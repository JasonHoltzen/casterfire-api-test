import mongoose from 'mongoose';
const { Schema } = mongoose;
import joigoose from 'joigoose';
import customSpellSchema from '$schemas/CustomSpell.js';
const Joigoose = joigoose(mongoose);

let CustomSpell = new Schema(Joigoose.convert(customSpellSchema));
export default mongoose.models['customspell'] || mongoose.model('customspell', CustomSpell);
