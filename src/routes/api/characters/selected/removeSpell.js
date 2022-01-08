import connectDB from '$utils/db.js';
import Character from '$models/Character.js';
import * as Erroh from '$utils/erroh.js';

export async function post({ locals, body }) {
	if (!locals.userId) {
		console.log('Not authorized');
		return Erroh.unauthorized('Not authorized');
	}

	if (!body) {
		console.log('No character selected');
		return Erroh.badRequest('No body received on request');
	}

	const { spellId, character } = body;

	if (!spellId || !character) {
		return Erroh.badRequest('Must contain a spell and a character.');
	}

	try {
		await connectDB();
		const query = { _id: character, user: locals.userId };

		const updatedCharacter = await Character.findOneAndUpdate(
			query,
			{ $pull: { spellbook: spellId } },
			{ new: true }
		);
		return {
			status: 200,
			body: {
				updatedCharacter
			}
		};
	} catch (error) {
		console.log(error);
		return Erroh.badRequest(error);
	}
}
