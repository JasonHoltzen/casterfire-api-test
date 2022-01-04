import mongoose from 'mongoose';
const { Schema } = mongoose;
import joigoose from 'joigoose';
import sessionSchema from '$schemas/Session.js';
const Joigoose = joigoose(mongoose);

let Session = new Schema(Joigoose.convert(sessionSchema));
export default mongoose.models['session'] || mongoose.model('session', Session);
