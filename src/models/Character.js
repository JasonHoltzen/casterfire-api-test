import mongoose from 'mongoose';
const { Schema } = mongoose;
import joigoose from 'joigoose';
const Joigoose = joigoose(mongoose);
import characterSchema from '$schemas/Character.js';

let Character = new Schema(Joigoose.convert(characterSchema));
export default mongoose.models['character'] || mongoose.model('character', Character);
