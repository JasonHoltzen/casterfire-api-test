import * as cookie from 'cookie';
import connectDB from '$utils/db.js';
import { de } from '$utils/crypt.js';
import Session from '$models/Session.js';

export const handle = async ({ request, resolve }) => {
	const cookies = await cookie.parse(request.headers.cookie || '');
	const sessionCookieString = cookies.session;

	let cookieSession;
	if (sessionCookieString) {
		cookieSession = await JSON.parse(sessionCookieString);
	}

	let userSessionId, userToken;
	//? removed await from sessionCookieString
	if (await cookieSession) {
		userSessionId = cookieSession.sessionId || undefined;
		userToken = cookieSession.token || undefined;
	}

	//? removed await from here, too
	if ((await userSessionId) && (await userToken)) {
		try {
			await connectDB();
			const serverSession = await Session.findOne({
				sessionId: userSessionId
			}).lean();

			if (await serverSession) {
				if (serverSession.key && serverSession.token) {
					const decryptedUserToken = de(userToken, serverSession.key);
					if (decryptedUserToken === serverSession.token) {
						const userId = await serverSession.userId.toString();
						request.locals.userId = userId;
					}
				}
			}
		} catch (err) {
			request.locals.userId = undefined;
		}
		//? removed the wrapper below
	}

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers
		}
	};
};

export const getSession = (request) => {
	const userId = request.locals.userId || undefined;
	return {
		userId
	};
};
