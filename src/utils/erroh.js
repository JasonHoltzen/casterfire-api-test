//Erroh is a custom error handler inspired by @hapi/boom

export const badRequest = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 400,
		body: {
			error: 'Bad Request',
			message
		}
	};
};

export const unauthorized = (message) => {
	if (!message) {
		message =
			"You shall not pass!  Sorry...I couldn't help myself.  The email or password you provided wasn't valid.  If you need to reset your password, email jason@holtzen.rocks from the email you used to sign up.";
	}
	return {
		status: 401,
		body: {
			error: 'Unauthorized: ' + message,
			message
		}
	};
};

export const forbidden = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 403,
		body: {
			error: 'Forbidden',
			message
		}
	};
};

export const notFound = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 404,
		body: {
			error: 'Not Found',
			message
		}
	};
};

export const notAcceptable = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 406,
		body: {
			error: 'Not Acceptable',
			message
		}
	};
};

export const validationError = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 422,
		body: {
			error: 'Validation Error',
			message
		}
	};
};

export const requestTimeout = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 408,
		body: {
			error: 'Request timed out',
			message
		}
	};
};

export const conflict = (message) => {
	if (!message) {
		message =
			"A doppleganger, eh?  You're not getting one over on me.  Someone with that same email has already registered. (It was probably you...our code wizard is a loon.)";
	}
	return {
		status: 409,
		body: {
			error: 'Conflict',
			message
		}
	};
};

export const serverError = (message) => {
	if (!message) {
		message = '';
	}
	return {
		status: 500,
		body: {
			error: 'Internal server error',
			message
		}
	};
};

export const serverUnavailable = (message) => {
	if (!message)
		message = 'Barwench!  Barwench...?  Where is the barwench!?  Bah, server is unavailable.';
	return {
		status: 503,
		body: {
			error: 'Server Unavailable.',
			message
		}
	};
};

export const getText = (error, text) => {
	const errorList = {
		'Bad Request': 'The request was formed incorrectly.  Please try again.',
		Unauthorized:
			"You shall not pass...without the right email address and password (sorry, I couldn't help myself).  If you need to reset your password, email jason@holtzen.rocks from the email you used to sign up.",
		Forbidden: '',
		'Not Found': 'That email address was not found.  Please use the register box.',
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
