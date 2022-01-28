var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
  del: () => del,
  get: () => get,
  post: () => post
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_CustomSpell_d270f8cd = __toModule(require("../../../../chunks/CustomSpell-d270f8cd.js"));
var import_Character_d14be3f1 = __toModule(require("../../../../chunks/Character-d14be3f1.js"));
var import_erroh_c062e309 = __toModule(require("../../../../chunks/erroh-c062e309.js"));
var import_mongooseId_3cd13daa = __toModule(require("../../../../chunks/mongooseId-3cd13daa.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_joi = __toModule(require("joi"));
var import_Character_2047c1cd = __toModule(require("../../../../chunks/Character-2047c1cd.js"));
const { Schema } = import_mongoose.default;
const Joigoose = (0, import_joigoose.default)(import_mongoose.default);
let CustomSpell = new Schema(Joigoose.convert(import_CustomSpell_d270f8cd.c));
var CustomSpell$1 = import_mongoose.default.models["customspell"] || import_mongoose.default.model("customspell", CustomSpell);
async function get({ locals }) {
  if (!locals.userId) {
    return (0, import_erroh_c062e309.u)();
  }
  try {
    await (0, import_db_8890404f.c)();
    const customSpells = await CustomSpell$1.find({ user: locals.userId }).lean().clone();
    return {
      status: 200,
      body: {
        success: true,
        customSpells
      }
    };
  } catch (err) {
    return (0, import_erroh_c062e309.s)();
  }
}
async function post({ body, locals }) {
  try {
    if (!body) {
      return (0, import_erroh_c062e309.b)("You need a body...");
    }
    if (!locals.userId) {
      return (0, import_erroh_c062e309.u)("Unauthorized");
    }
    const { customSpell } = body;
    let _a = customSpell, { _id } = _a, spell = __objRest(_a, ["_id"]);
    if (!_id) {
      _id = (0, import_mongooseId_3cd13daa.g)();
    }
    spell.user = { _id: locals.userId };
    const query = { _id, user: locals.userId };
    await (0, import_db_8890404f.c)();
    const newSpell = await CustomSpell$1.findOneAndUpdate(query, spell, { upsert: true, returnOriginal: false }, (err, doc) => {
      if (err) {
        return void 0;
      } else {
        return doc;
      }
    }).lean().clone();
    if (await newSpell) {
      if (!newSpell)
        return (0, import_erroh_c062e309.b)();
      return {
        status: 200,
        body: {
          customSpell: __spreadValues({}, newSpell),
          success: true
        }
      };
    }
    return (0, import_erroh_c062e309.a)();
  } catch (err) {
    console.log(err);
    return err;
  }
}
async function del({ body, locals }) {
  try {
    if (!locals.userId) {
      return (0, import_erroh_c062e309.u)();
    }
    if (!body) {
      return (0, import_erroh_c062e309.b)();
    }
    const { id } = body;
    await (0, import_db_8890404f.c)();
    const charQuery = { user: locals.userId };
    const removedCount = await import_Character_d14be3f1.C.updateMany(charQuery, { $pull: { spellbook: { $in: [id] } } }, { multi: true }, (err, res) => {
      if (err) {
        return 0;
      } else {
        const { modifiedCount } = res;
        return modifiedCount;
      }
    }).lean().clone();
    const spellQuery = { _id: id, user: locals.userId };
    const deletedSpell = await CustomSpell$1.findOneAndRemove(spellQuery, (err, doc) => {
      if (!err) {
        return doc;
      } else {
        return null;
      }
    }).clone().lean();
    if (removedCount && deletedSpell) {
      return {
        status: 200,
        body: {
          success: true,
          spellId: deletedSpell._id,
          removedFromCount: removedCount
        }
      };
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}
