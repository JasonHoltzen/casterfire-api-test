import Joi from 'joi';

const pw_lower = new RegExp('^(?=.*[a-z])');
const pw_upper = new RegExp('^(?=.*[A-Z])');
const pw_num = new RegExp('^(?=.*[0-9])');
const pw_special = new RegExp('^(?=.*[!@#$%^&*])');

export const authSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			'string.email': 'a valid email address'
		}),
	password: Joi.string()
		.min(8)
		.max(255)
		.pattern(pw_lower, { name: '1 lowercase character' })
		.pattern(pw_upper, { name: '1 uppercase character' })
		.pattern(pw_num, { name: '1 number' })
		.pattern(pw_special, { name: '1 special character' })
		.required()
		.messages({
			'string.pattern.name': '{#name}',
			'string.min': 'at least 8 characters',
			'string.max': 'no more than 255 characters',
			'string.empty': 'text'
		}),
	repeat_password: Joi.ref('password'),
	name: Joi.string().alphanum().messages({ 'string.alphanum': 'only letters or numbers' })
})
	.with('repeat_password', 'password')
	.messages({ 'object.with': 'both password fields' })
	.with('repeat_password', 'name')
	.messages({ 'object.with': 'name entry' })
	.with('name', 'repeat_password')
	.messages({ 'object.with': 'a confirmed password' });

export const validate = (v) => {
	const result = authSchema.validate(v, { abortEarly: false });

	if (!result.error) return { validated: true };

	const errors = result.error.details.reduce((acc, curr) => {
		const label = curr.context.label;
		const labelErrors = { message: curr.message, type: curr.type };

		if (!acc[label]) acc[label] = { field: label, errors: [] };

		acc[label].errors = [...acc[label].errors, { ...labelErrors }];

		return acc;
	}, {});

	return { validated: false, errors };
};
