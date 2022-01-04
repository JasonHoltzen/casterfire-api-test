import * as cookie from 'cookie';
import connectDB from '$utils/db.js';
import { de } from '$utils/crypt.js';
import Session from '$models/Session.js';

export const handle = async ({ request, resolve }) => {
	const cookies = await cookie.parse(request.headers.cookie || '');
	console.log(cookies);
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
			console.log('trying');
			await connectDB();
			const serverSession = await Session.findOne({
				sessionId: userSessionId
			}).lean();
			console.log('made it past server session');

			if (await serverSession) {
				console.log(serverSession);
				if (serverSession.key && serverSession.token) {
					console.log('serverSession.key & .token were present');
					const decryptedUserToken = de(userToken, serverSession.key);
					if (decryptedUserToken === serverSession.token) {
						const userId = await serverSession.userId.toString();
						request.locals.userId = userId;
					}
				}
			}
		} catch (err) {
			console.log('catching');
			request.locals.userId = 'bob';
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
		userId,
		cows: 'yep, cows'
	};
};
