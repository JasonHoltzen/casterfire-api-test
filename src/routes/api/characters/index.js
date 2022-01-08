import connectDB from '$utils/db.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';
import { getNewId } from '$utils/mongooseId';

export async function get({ locals }) {
	if (!locals.userId) {
		return Erroh.unauthorized('Unauthorized');
	}

	try {
		await connectDB();
		const chars = await Character.find({ user: locals.userId }).lean().clone();

		if (chars.length < 1) {
			return Erroh.notFound();
		}

		return {
			status: 200,
			body: {
				characters: [...chars]
			}
		};
	} catch (error) {
		return Erroh.serverUnavailable();
	}
}

export async function post({ body, locals }) {
	try {
		if (!body) {
			return Erroh.badRequest('You need a body...');
		}
		if (!locals.userId) {
			return Erroh.unauthorized('Unauthorized');
		}

		const { character } = body;

		if (!character._id) {
			character._id = getNewId();
		}

		character.user = { _id: locals.userId };
		let query = { _id: character._id };

		const newChar = await Character.findOneAndUpdate(
			query,
			character,
			{ upsert: true },
			async (err) => {
				if (err) {
					return Erroh.badRequest('The data was bad...');
				} else {
					console.log('Character saved');
				}
			}
		).clone();

		return {
			body: {
				character: newChar,
				success: true,
				status: 200
			}
		};
	} catch (err) {
		return Erroh.serverUnavailable();
	}
}

export async function del({ body, locals }) {
	try {
		if (!body) {
			return Erroh.badRequest('A head without a body...?');
		}
		if (!locals.userId) {
			Erroh.unauthorized('You shall not pass');
		}

		const { id } = body;
		if (!id) {
			return Erroh.badRequest('Must provide an id');
		}

		await connectDB();
		const query = { _id: id, user: locals.userId };
		const isDeleted = await Character.findOneAndRemove(query, (err, result) => {
			if (!!err || !result) {
				return Erroh.notFound(
					'A character with that ID belonging to the logged in user was not found.'
				);
			}
			return result;
		});

		return {
			status: 200,
			body: {
				success: true,
				isDeleted: isDeleted
			}
		};
	} catch (err) {
		return Erroh.serverUnavailable(err);
	}
}
