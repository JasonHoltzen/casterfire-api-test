import mongoose from 'mongoose';
const { Schema } = mongoose;
import joigoose from 'joigoose';
import spellSchema from '$schemas/Spell.js';
const Joigoose = joigoose(mongoose);

let Spell = new Schema(Joigoose.convert(spellSchema));
export default mongoose.models['pf2spell'] || mongoose.model('pf2spell', Spell);
