import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const mongodb_uri = process.env['MONGODB_URI'];

if (!mongodb_uri) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const opts = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	bufferCommands: false
};

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { db: null, promise: null };
}

async function connectDB() {
	if (cached.db) {
		return cached.db;
	}

	if (!cached.promise) {
		try {
			cached.promise = mongoose.connect(mongodb_uri, opts).then((mongoose) => {
				return mongoose;
			});
		} catch (error) {
			return null;
		}
	}
	cached.db = await cached.promise;
	return cached.db;
}
export default connectDB;
