import connectDB from '$utils/db.js';
import Session from '$models/Session.js';
import * as Erroh from '$utils/erroh.js';
import * as cookie from 'cookie';

export async function del({ locals }) {
	if (!locals.userId) {
		return {
			status: 200,
			body: {}
		};
	}

	try {
		await connectDB();
		Session.deleteMany({ userId: locals.userId });
	} catch (err) {
		Erroh.serverUnavailable("Request didn't get to the server");
	}

	const headers = {
		'Set-Cookie': cookie.serialize('session', '', {
			httpOnly: true,
			maxAge: -1,
			sameSite: true,
			path: '/'
		})
	};
	return {
		status: 200,
		headers,
		body: {
			user: undefined
		}
	};
}
