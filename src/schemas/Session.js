import Joi from 'joi';

let sessionSchema = Joi.object({
	userId: Joi.string().meta({ _mongoose: { type: 'ObjectId', ref: 'User' } }),
	sessionId: Joi.string().uuid().required(),
	createdOn: Joi.date().required(),
	key: Joi.string().required(),
	token: Joi.string().required()
});

export default sessionSchema;
