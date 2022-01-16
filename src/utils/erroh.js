//Erroh is a custom error handler inspired by @hapi/boom

export const badRequest = () => {
	return {
		status: 400,
		body: {
			error: 'Bad Request'
		}
	};
};

export const unauthorized = () => {
	return {
		status: 401,
		body: {
			error: 'Unauthorized: '
		}
	};
};

export const forbidden = () => {
	return {
		status: 403,
		body: {
			error: 'Forbidden'
		}
	};
};

export const notFound = () => {
	return {
		status: 404,
		body: {
			error: 'Not Found'
		}
	};
};

export const notAcceptable = () => {
	return {
		status: 406,
		body: {
			error: 'Not Acceptable'
		}
	};
};

export const validationError = () => {
	return {
		status: 422,
		body: {
			error: 'Validation Error'
		}
	};
};

export const requestTimeout = () => {
	return {
		status: 408,
		body: {
			error: 'Request timed out'
		}
	};
};

export const conflict = () => {
	return {
		status: 409,
		body: {
			error: 'Conflict'
		}
	};
};

export const serverError = () => {
	return {
		status: 500,
		body: {
			error: 'Internal server error'
		}
	};
};

export const serverUnavailable = () => {
	return {
		status: 503,
		body: {
			error: 'Server Unavailable.'
		}
	};
};

export const getText = (error, text) => {
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
