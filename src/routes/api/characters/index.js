import connectDB from '$utils/db.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';
import { getNewId } from '$utils/mongooseId.js';

export async function get({ locals }) {
	if (!locals.userId) {
		return Erroh.unauthorized('Unauthorized');
	}

	try {
		await connectDB();
		let chars = await Character.find({ user: locals.userId }).clone().lean();

		return {
			status: 200,
			body: {
				success: true,
				characters: chars
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
		const query = { _id: character._id, user: locals.userId };

		await connectDB();
		const newChar = await Character.findOneAndUpdate(
			query,
			character,
			{ upsert: true, returnOriginal: false },
			(err, doc) => {
				if (err) {
					return null;
				} else {
					return doc;
				}
			}
		)
			.clone()
			.lean();

		if (await newChar) {
			return {
				status: 200,
				body: {
					character: newChar,
					success: true
				}
			};
		}

		return Erroh.notFound();
	} catch (err) {
		return err;
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
		const deletedCharacter = await Character.findOneAndRemove(query, (err, doc) => {
			if (!err && !!doc) {
				return doc;
			} else {
				return err;
			}
		})
			.clone()
			.lean();

		if (await deletedCharacter) {
			return {
				status: 200,
				body: {
					success: true,
					id: deletedCharacter._id
				}
			};
		}

		return Erroh.notFound();
	} catch (err) {
		return err;
	}
}
