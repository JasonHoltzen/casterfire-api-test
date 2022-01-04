import connectDB from '$utils/db.js';
import User from '$models/User.js';
import * as Erroh from '$utils/erroh.js';

export async function post({ body, locals }) {
	try {
		if (!body) {
			return Erroh.badRequest('You need a body...');
		}
		if (!locals.userId) {
			return Erroh.unauthorized('User is not logged in or session is invalid');
		}

		const { _id, name, email } = body;

		if (locals.userId !== _id) {
			return Erroh.unauthorized('Logged in user ID does not match submitted user ID.');
		}

		const filter = { _id: locals.userId };
		const update = { name, email };

		try {
			await connectDB();
			const user = await User.findOneAndUpdate(filter, update, {
				new: true
			}).lean();

			if (!user) {
				return Erroh.notFound('User not found');
			}
			delete user.password;
			delete user.__v;
			delete user.date;
			user._id = user._id.toString();

			return {
				status: 200,
				body: {
					user
				}
			};
		} catch (err) {
			return Erroh.serverUnavailable();
		}
	} catch (err) {
		console.log(err);
		return err;
	}
}
