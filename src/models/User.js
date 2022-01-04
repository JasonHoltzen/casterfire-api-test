import mongoose from 'mongoose';
const { Schema } = mongoose;
import joigoose from 'joigoose';
import userSchema from '$schemas/User.js';
const Joigoose = joigoose(mongoose);

let User = new Schema(Joigoose.convert(userSchema));
export default mongoose.models['user'] || mongoose.model('user', User);
