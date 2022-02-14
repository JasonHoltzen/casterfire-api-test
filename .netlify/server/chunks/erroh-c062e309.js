var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, '__esModule', { value: true });
var __export = (target, all) => {
	__markAsModule(target);
	for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
	E: () => Erroh,
	a: () => notFound,
	b: () => badRequest,
	c: () => conflict,
	n: () => notAcceptable,
	s: () => serverUnavailable,
	u: () => unauthorized,
	v: () => validationError
});
const badRequest = () => {
	return {
		status: 400,
		body: {
			error: 'Bad Request'
		}
	};
};
const unauthorized = () => {
	return {
		status: 401,
		body: {
			error: 'Unauthorized: '
		}
	};
};
const forbidden = () => {
	return {
		status: 403,
		body: {
			error: 'Forbidden'
		}
	};
};
const notFound = () => {
	return {
		status: 404,
		body: {
			error: 'Not Found'
		}
	};
};
const notAcceptable = () => {
	return {
		status: 406,
		body: {
			error: 'Not Acceptable'
		}
	};
};
const validationError = () => {
	return {
		status: 422,
		body: {
			error: 'Validation Error'
		}
	};
};
const requestTimeout = () => {
	return {
		status: 408,
		body: {
			error: 'Request timed out'
		}
	};
};
const conflict = () => {
	return {
		status: 409,
		body: {
			error: 'Conflict'
		}
	};
};
const serverError = () => {
	return {
		status: 500,
		body: {
			error: 'Internal server error'
		}
	};
};
const serverUnavailable = () => {
	return {
		status: 503,
		body: {
			error: 'Server Unavailable.'
		}
	};
};
const getText = (error, text) => {
	const errorList = {
		'Bad Request': 'The request was formed incorrectly.  Please try again.',
		Unauthorized:
			"You shall not pass...without the right email address and password (sorry, I couldn't help myself).  If you need to reset your password, email jason@holtzen.rocks from the email you used to sign up.",
		Forbidden: '',
		'Not Found': 'The requested resource was not found.',
		'Not Acceptable': '',
		'Validation Error': 'One or more values used are not valid, please correct and try again.',
		'Request timed out':
			'The hamster ran too slow on your request and it timed out.  Please try again.',
		Conflict: 'Conflict: value already exists.',
		'Internal server error':
			'Our server had a problem and bailed on your request.  Please try again.',
		'Server Unavailable':
			'Our server was not available.  It may be down for maintenance.  Please try again.  If problems persist, please come back later.'
	};
	if (text) return text;
	return errorList[error] || 'Something went wrong, please try again.';
};
var Erroh = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	[Symbol.toStringTag]: 'Module',
	badRequest,
	unauthorized,
	forbidden,
	notFound,
	notAcceptable,
	validationError,
	requestTimeout,
	conflict,
	serverError,
	serverUnavailable,
	getText
});
