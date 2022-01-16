var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  get: () => get
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
var import_erroh_c062e309 = __toModule(require("../../../../chunks/erroh-c062e309.js"));
var import_dotenv = __toModule(require("dotenv"));
let spellSchema = import_joi.default.object({
  id: import_joi.default.string().alphanum().meta({ _mongoose: { type: "ObjectId", ref: "Spell" } }),
  traits: import_joi.default.array().required().items(import_joi.default.string()),
  type: import_joi.default.string().required(),
  name: import_joi.default.string().alphanum().required().max(200),
  level: import_joi.default.number().integer().required().min(0).max(10),
  source: import_joi.default.string().max(255),
  traditions: import_joi.default.array().items(import_joi.default.string()),
  components: import_joi.default.array().items(import_joi.default.string()),
  cast: import_joi.default.string().max(255),
  action: import_joi.default.array().items(import_joi.default.string()),
  trigger: import_joi.default.string().max(200),
  range: import_joi.default.string().max(100),
  area: import_joi.default.string().max(100),
  cost: import_joi.default.string().max(200),
  requirements: import_joi.default.string().max(100),
  savingThrow: import_joi.default.string().max(100),
  targets: import_joi.default.string().max(100),
  effect: import_joi.default.string().max(200),
  duration: import_joi.default.string().max(100),
  bloodline: import_joi.default.string(),
  domain: import_joi.default.string(),
  lesson: import_joi.default.string(),
  mystery: import_joi.default.string(),
  patronTheme: import_joi.default.string(),
  description: import_joi.default.string().required().max(6e3),
  custom: import_joi.default.boolean().required()
});
const { Schema } = import_mongoose.default;
const Joigoose = (0, import_joigoose.default)(import_mongoose.default);
let Spell = new Schema(Joigoose.convert(spellSchema));
var Spell$1 = import_mongoose.default.models["pf2spell"] || import_mongoose.default.model("pf2spell", Spell);
async function get() {
  try {
    await (0, import_db_8890404f.c)();
    const spells = await Spell$1.find().sort("name").lean().clone();
    if (!spells) {
      return (0, import_erroh_c062e309.E)().notFound("We can't find the spells! The magic is gone!");
    }
    return {
      status: 200,
      body: {
        spells
      }
    };
  } catch (err) {
    console.log(err);
    return err;
  }
}
