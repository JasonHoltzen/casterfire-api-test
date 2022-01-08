import connectDB from '$utils/db.js';
import Spell from '$models/Spell.js';
import * as Erroh from '$utils/erroh.js';

export async function get() {
	try {
		await connectDB();
		const spells = await Spell.find().sort('name').lean().clone();

		if (!spells) {
			return Erroh().notFound("We can't find the spells! The magic is gone!");
		}

		return {
			status: 200,
			body: {
				spells
			}
		};
	} catch (err) {
		console.log(err);
		return err;
	}
}
