import Joi from 'joi';

let spellSchema = Joi.object({
	id: Joi.string()
		.alphanum()
		.meta({ _mongoose: { type: 'ObjectId', ref: 'Spell' } }),
	traits: Joi.array().required().items(Joi.string()),
	type: Joi.string().required(),
	name: Joi.string().alphanum().required().max(200),
	level: Joi.number().integer().required().min(0).max(10),
	source: Joi.string().max(255),
	traditions: Joi.array().items(Joi.string()),
	components: Joi.array().items(Joi.string()),
	cast: Joi.string().max(255),
	action: Joi.array().items(Joi.string()),
	trigger: Joi.string().max(200),
	range: Joi.string().max(100),
	area: Joi.string().max(100),
	cost: Joi.string().max(200),
	requirements: Joi.string().max(100),
	savingThrow: Joi.string().max(100),
	targets: Joi.string().max(100),
	effect: Joi.string().max(200),
	duration: Joi.string().max(100),
	bloodline: Joi.string(),
	domain: Joi.string(),
	lesson: Joi.string(),
	mystery: Joi.string(),
	patronTheme: Joi.string(),
	description: Joi.string().required().max(6000),
	custom: Joi.boolean().required()
});

export default spellSchema;
