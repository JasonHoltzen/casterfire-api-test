import Joi from 'joi';

const userSchema = Joi.object({
	name: Joi.string().alphanum().min(2).max(255).trim().required(),
	email: Joi.string().email().min(2).max(255).trim().required(),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*(),./]{3,200}$')).required(),
	date: Joi.date().default(Date.now()),
	id: Joi.string()
		.alphanum()
		.meta({ _mongoose: { type: 'ObjectId', ref: 'User' } }),
	customSpells: [
		{
			spell: Joi.string()
				.alphanum()
				.meta({
					_mongoose: {
						type: 'ObjectId',
						ref: 'Spell'
					}
				})
		}
	]
});

export default userSchema;
