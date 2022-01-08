import connectDB from '$utils/db.js';
import * as Erroh from '$utils/erroh.js';
import User from '$models/User.js';

export async function get({ locals }) {
	try {
		await connectDB();
		const user = (await User.findOne({ _id: locals.userId }).lean().clone()) || undefined;

		if (user) {
			delete user.password;
			delete user.__v;
			delete user.date;
		}

		return {
			status: 200,
			body: {
				...user
			}
		};
	} catch (err) {
		return Erroh.unauthorized();
	}
}
