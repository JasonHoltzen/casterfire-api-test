import * as cookie from 'cookie';
import connectDB from '$utils/db.js';
import { de } from '$utils/crypt.js';

export const handle = async ({ request, resolve }) => {
	const cookies = await cookie.parse(request.headers.cookie || '');
	const sessionCookieString = cookies.session;

	let cookieSession;
	if (sessionCookieString) {
		cookieSession = await JSON.parse(sessionCookieString);
	}

	let userSessionId, userToken;
	//todo: removed await from cookieSessionString
	if (sessionCookieString) {
		userSessionId = cookieSession.sessionId || undefined;
		userToken = cookieSession.token || undefined;
	}

	//todo: removed await from here, too
	// if (userSessionId && userToken) {
	// put it back here
	// }

	try {
		await connectDB();
		request.locals.isConnected = true;
	} catch (err) {
		console.log(err);
		request.locals.isConnected = false;
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
	const isConnected = request.locals.isConnected || undefined;
	return {
		isConnected
	};
};
