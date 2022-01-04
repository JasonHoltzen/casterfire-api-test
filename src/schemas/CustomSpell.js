import Joi from 'joi';

let customSpellSchema = Joi.object({
	id: Joi.string()
		.alphanum()
		.meta({ _mongoose: { type: 'ObjectId', ref: 'CustomSpell' } }),
	user: Joi.string()
		.alphanum()
		.allow('')
		.meta({
			_mongoose: { type: 'ObjectId', ref: 'User' }
		}),
	traits: Joi.array().unique().required().items(Joi.string().required()).messages({
		'array.unique': 'Cannot have duplicate traits',
		'string.required': 'At least one trait is required'
	}),
	type: Joi.string().required(),
	name: Joi.string().required().max(200),
	level: Joi.number().integer().required().min(0).max(10),
	source: Joi.string().allow(null, '').max(255),
	traditions: Joi.array().items(Joi.string()).allow(null),
	components: Joi.array().items(Joi.string()).allow(null),
	cast: Joi.string().allow(null, '').max(255),
	action: Joi.array().items(Joi.string()).allow(null),
	trigger: Joi.string().allow(null, '').max(200),
	range: Joi.string().allow(null, '').max(100),
	area: Joi.string().allow(null, '').max(100),
	cost: Joi.string().allow(null, '').max(200),
	requirements: Joi.string().allow(null, '').max(100),
	savingThrow: Joi.string().allow(null, '').max(100),
	targets: Joi.string().allow(null, '').max(100),
	effect: Joi.string().allow(null, '').max(200),
	duration: Joi.string().allow(null, '').max(100),
	bloodline: Joi.string().allow(null, ''),
	domain: Joi.string().allow(null, ''),
	lesson: Joi.string().allow(null, ''),
	mystery: Joi.string().allow(null, ''),
	patronTheme: Joi.string().allow(null, ''),
	description: Joi.string().required().max(6000),
	custom: Joi.bool().required().default(true)
});

export default customSpellSchema;
