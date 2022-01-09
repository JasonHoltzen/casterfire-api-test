import connectDB from '$utils/db.js';
import User from '$models/User.js';
import Session from '$models/Session.js';
import * as Erroh from '$utils/erroh.js';
import bcrypt from 'bcrypt';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { genKey, en } from '$utils/crypt.js';

export async function post({ body }) {
	if (!body) {
		throw Erroh.badRequest(
			"Bad request!  BAD!  Go sit in the corner.  That'll teach you, stupid request."
		);
	}

	try {
		const { email, password } = body;
		await connectDB();

		let user = await User.findOne({ email }).lean().clone();

		if (!user)
			return Erroh.notFound(
				"You don't exist!  Hast though scribeth thine name upon our registration form?"
			);

		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) {
			delete user.password;

			const sessionId = uuidv4();
			const token = uuidv4();
			const key = genKey();
			const encryptedToken = en(token, key);

			try {
				await Session.create({
					sessionId,
					userId: user._id,
					createdOn: Date.now(),
					token,
					key
				});
			} catch (error) {
				if (error._message === 'session validation failed') {
					return Erroh.validationError('Session validation failed on the server');
				}
				return Erroh.badRequest('Could not save session to server');
			}

			const session = JSON.stringify({
				sessionId,
				token: encryptedToken
			});

			const headers = {
				'Set-Cookie': cookie.serialize('session', session, {
					httpOnly: true,
					maxAge: 60 * 60 * 24 * 7,
					sameSite: true,
					path: '/'
				})
			};

			return {
				status: 200,
				headers,
				body: {
					user,
					message: 'success'
				}
			};
		}

		return Erroh.unauthorized('None...shall...pass...without the correct email and password.');
	} catch (err) {
		console.log(err);
		return Erroh.serverUnavailable(
			'Barwench!  Barwench...?  Where is the barwench!?  Bah, server is unavailable.'
		);
	}
}
