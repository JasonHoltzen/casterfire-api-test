import Joi from 'joi';

const characterSchema = Joi.object({
	_id: Joi.string()
		.alphanum()
		.optional()
		.allow('')
		.meta({ _mongoose: { type: 'ObjectId', ref: 'Characters' } }),
	user: Joi.string()
		.alphanum()
		.optional()
		.allow('')
		.meta({
			_mongoose: { type: 'ObjectId', ref: 'User' }
		}),
	characterName: Joi.string().min(1).max(255).trim().required().messages({
		'string.base': 'Character Name may only contain numbers and letters',
		'string.empty': 'Character Name is required',
		'string.min': 'Character name must be between 1 and 255 characters',
		'string.max': 'Character name must be between 1 and 255 characters',
		'any.required': 'Character Name is required'
	}),
	characterClass: Joi.string().required().messages({
		'string.empty': 'Class is required',
		'any.required': 'Class is required'
	}),
	focus: Joi.string().optional().allow(''),
	level: Joi.number().integer().min(1).max(20),
	ancestry: Joi.string().optional().allow(''),
	archetype: Joi.string().optional().allow(''),
	alignment: Joi.string().optional().allow(''),
	active: Joi.bool().required(),
	spellbook: Joi.array()
		.items(
			Joi.string()
				.alphanum()
				.meta({
					_mongoose: {
						type: 'ObjectId',
						ref: 'Spell'
					}
				})
		)
		.optional()
		.allow('')
});

export default characterSchema;
