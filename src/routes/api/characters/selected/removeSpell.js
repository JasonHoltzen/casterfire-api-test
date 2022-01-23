import connectDB from '$utils/db.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';

export async function post({ locals, body }) {
	if (!body) {
		return Erroh.badRequest('No body received on request');
	}

	if (!locals.userId) {
		return Erroh.unauthorized('Not authorized');
	}

	const { spellId, characterId } = body;

	if (!spellId || !characterId) {
		return Erroh.badRequest('Must contain a spell and a character.');
	}

	try {
		await connectDB();
		const query = { _id: characterId, user: locals.userId };

		const updatedCharacter = await Character.findOneAndUpdate(
			query,
			{ $pull: { spellbook: spellId } },
			{ returnOriginal: false },
			(err, doc) => {
				if (err) return null;
				else return doc;
			}
		)
			.clone()
			.lean();

		console.log(updatedCharacter);

		return {
			status: 200,
			body: {
				character: updatedCharacter
			}
		};
	} catch (error) {
		return Erroh.badRequest(error);
	}
}
