import connectDB from '$utils/db.js';
import User from '$models/User.js';

const convertDate = (date) => {
	let month = (date.getMonth() + 1).toString().padStart(2, 0);
	let day = date.getDate().toString().padStart(2, 0);
	let year = date.getFullYear().toString().padStart(2, 0);
	let hour = date.getHours().toString().padStart(2, 0);
	let minutes = date.getMinutes().toString().padStart(2, 0);

	return `${month}.${day}.${year} - ${hour}:${minutes}`;
};

export async function get() {
	try {
		await connectDB();
		const users = (await User.find({}).lean().clone()) || undefined;

		const playerList = await users.map((user) => {
			delete user._id;
			delete user.__v;
			delete user.email;
			delete user.password;

			let date = convertDate(new Date(user.date));
			user.date = date;

			return user;
		});

		return {
			status: 200,
			body: {
				playerList
			}
		};
	} catch (err) {
		console.log(err);
		return err;
	}
}
