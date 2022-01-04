import mongoose from 'mongoose';

export const getNewId = () => {
	let id = new mongoose.Types.ObjectId();
	return id;
};
