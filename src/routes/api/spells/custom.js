import connectDB from '$utils/db.js';
import CustomSpell from '$models/CustomSpell.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';
import { getNewId } from '$utils/mongooseId';

export async function get({ locals }) {
	if (!locals.userId) {
		return Erroh.unauthorized('Unauthorized');
	}

	try {
		await connectDB();
		const customSpells = await CustomSpell.find({ user: locals.userId }).lean().clone();

		return {
			status: 200,
			body: {
				success: true,
				customSpells
			}
		};
	} catch (err) {
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

		const { customSpell } = body;
		let { _id, ...spell } = customSpell;

		if (!_id) {
			_id = getNewId();
		}

		spell.user = { _id: locals.userId };
		const query = { _id: _id, user: locals.userId };

		await connectDB();
		const newSpell = await CustomSpell.findOneAndUpdate(
			query,
			spell,
			{ upsert: true, returnOriginal: false },
			(err, doc) => {
				if (err) {
					return undefined;
				} else {
					return doc;
				}
			}
		)
			.lean()
			.clone();

		if (await newSpell) {
			if (!newSpell) return Erroh.badRequest();
			return {
				status: 200,
				body: {
					customSpell: { ...newSpell },
					success: true
				}
			};
		}
		return Erroh.notFound();
	} catch (err) {
		console.log(err);
		return err;
	}
}

export async function del({ body, locals }) {
	try {
		if (!locals.userId) {
			return Erroh.unauthorized();
		}
		if (!body) {
			return Erroh.badRequest();
		}
		const { id } = body;

		await connectDB();
		const charQuery = { user: locals.userId };
		const removedCount = await Character.updateMany(
			charQuery,
			{ $pull: { spellbook: { $in: [id] } } },
			{ multi: true },
			(err, res) => {
				if (err) {
					return 0;
				} else {
					const { modifiedCount } = res;
					return modifiedCount;
				}
			}
		)
			.lean()
			.clone();

		const spellQuery = { _id: id, user: locals.userId };
		const deletedSpell = await CustomSpell.findOneAndRemove(spellQuery, (err, doc) => {
			if (!err) {
				return doc;
			} else {
				return null;
			}
		})
			.clone()
			.lean();

		if (removedCount && deletedSpell) {
			return {
				status: 200,
				body: {
					success: true,
					spellId: deletedSpell._id,
					removedFromCount: removedCount
				}
			};
		}
	} catch (err) {
		console.log(err);
		return err;
	}
}
