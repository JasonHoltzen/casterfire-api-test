import connectDB from '$utils/db.js';
import User from '$models/User.js';
import Session from '$models/Session.js';
import * as Erroh from '$utils/erroh.js';
import bcrypt from 'bcrypt';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { genKey, en } from '$utils/crypt';

export async function post({ body }) {
	if (!body) {
		throw Erroh.notAcceptable('Form is not filled out.');
	}

	try {
		await connectDB();
		const { email, name, password } = body;
		let user = undefined;

		user = await User.findOne({ email }).lean().clone();
		if (user) {
			return Erroh.conflict();
		} else {
			user = undefined;
		}

		const salt = await bcrypt.genSalt(10);
		const encPw = await bcrypt.hash(password, salt);

		try {
			user = await User.create({
				name,
				password: encPw,
				email
			});
			user = user.toObject();
			delete user.password;
			console.log(user);
		} catch (error) {
			if (error._message === 'user validation failed') {
				return Erroh.validationError('User validation failed on the server');
			}
			return Erroh.badRequest('Could not create new user');
		}

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
				sameSite: 'strict',
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
	} catch (err) {
		if (err && err.message) {
			return err;
		}
		return Erroh.serverUnavailable(
			'Barwench!  Barwench...?  Where is the barwench!?  Bah, server is unavailable.'
		);
	}
}
