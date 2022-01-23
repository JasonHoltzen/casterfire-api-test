import connectDB from '$utils/db.js';
import CustomSpell from '$models/CustomSpell.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';
import { getNewId } from '$utils/mongooseId';

export async function get({ locals }) {
	try {
		if (!locals.userId) {
			return Erroh.unauthorized('Unauthorized');
		}
		await connectDB();
		const customSpells = await CustomSpell.find({ user: locals.userId })
			.sort('name')
			.clone()
			.lean();

		return {
			status: 200,
			body: {
				customSpells
			}
		};
	} catch (err) {
		console.log(err);
		return err;
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

		const { customSpell } = body;
		if (!customSpell._id) {
			customSpell._id = getNewId();
		}

		customSpell.user = { _id: locals.userId };
		let query = { _id: customSpell._id };

		const newSpell = await CustomSpell.findOneAndUpdate(
			query,
			customSpell,
			{ upsert: true, returnNewDocument: true },
			async (err) => {
				if (err) {
					console.log(err);
					return Erroh.badRequest('The data was bad...');
				}
			}
		).lean().clone;

		return {
			status: 200,
			body: {
				customSpell: { ...newSpell },
				success: true
			}
		};
	} catch (err) {
		console.log(err);
		return Erroh.serverUnavailable(err);
	}
}

export async function del({ body, locals }) {
	let errors = [];
	try {
		if (!locals.userId) {
			return Erroh.unauthorized('Unauthorized');
		}
		if (!body) {
			return Erroh.badRequest('No body.');
		}
		const { customSpell } = body;

		if (!customSpell._id || !customSpell.custom) {
			return Erroh.badRequest('This is not a custom spell');
		}

		await connectDB();
		const charQuery = { user: customSpell.user };
		await Character.updateMany(
			charQuery,
			{ $pull: { spellbook: { $in: [customSpell._id] } } },
			{ multi: true },
			async (err) => {
				if (err) {
					errors.push(err);
				} else {
					console.log('Spell removed from all characters owned by user');
				}
			}
		);

		const spellQuery = { _id: customSpell._id, user: customSpell.user };
		const deletedSpell = await CustomSpell.findOneAndRemove(spellQuery, (err, result) => {
			if (err) {
				errors.push(err);
				return Erroh.notFound(err);
			} else {
				if (!result) {
					return Erroh.notFound("Didn't find the item");
				}
			}
			return result;
		});

		const spell = { ...deletedSpell };

		return {
			status: 200,
			body: {
				success: true,
				deletedSpell: spell
			}
		};
	} catch (err) {
		return Erroh.serverUnavailable(JSON.stringify(errors));
	}
}
