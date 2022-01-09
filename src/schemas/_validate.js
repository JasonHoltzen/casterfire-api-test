const buildErrorText = (label, errors) => {
	let errorString = label + ' requires ';
	if (errors.length === 1) return (errorString += errors[0]);

	errors.forEach((e, index) => {
		let beforeText = '';
		let afterText = ' ';
		let punctuation = errors.length > 2 ? ', ' : ' ';
		if (errors.length === index + 1) {
			beforeText = 'and ';
		} else {
			afterText = punctuation;
		}
		errorString += `${beforeText}${e}${afterText}`;
	});

	return errorString;
};

export const validate = (schema, data) => {
	const result = schema.validate(data, { abortEarly: false });

	if (!result.error) return;

	const errors = result.error.details.reduce((acc, curr) => {
		const label = curr.context.label;
		if (!acc[label]) acc[label] = [];
		acc[label] = [...acc[label], curr.message];
		return acc;
	}, {});

	return Object.entries(errors).reduce((acc, [key, value]) => {
		acc[key] = buildErrorText(key, value);
		return acc;
	}, {});
};
