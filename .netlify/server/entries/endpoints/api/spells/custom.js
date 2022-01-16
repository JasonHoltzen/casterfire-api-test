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
  try {
    if (!locals.userId) {
      return (0, import_erroh_c062e309.u)("Unauthorized");
    }
    await (0, import_db_8890404f.c)();
    const customSpells = await CustomSpell$1.find({ user: locals.userId }).sort("name").clone();
    if (!customSpells) {
      return (0, import_erroh_c062e309.E)().notFound("We can't find the spells! The magic is gone!");
    }
    return {
      status: 200,
      body: {
        customSpells
      }
    };
  } catch (err) {
    console.log(err);
    return err;
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
    if (!customSpell._id) {
      customSpell._id = (0, import_mongooseId_3cd13daa.g)();
    }
    customSpell.user = { _id: locals.userId };
    let query = { _id: customSpell._id };
    const newSpell = await CustomSpell$1.findOneAndUpdate(query, customSpell, { upsert: true, returnNewDocument: true }, async (err) => {
      if (err) {
        console.log(err);
        return (0, import_erroh_c062e309.b)("The data was bad...");
      }
    }).lean().clone;
    return {
      status: 200,
      body: {
        customSpell: __spreadValues({}, newSpell),
        success: true
      }
    };
  } catch (err) {
    console.log(err);
    return (0, import_erroh_c062e309.s)();
  }
}
async function del({ body, locals }) {
  let errors = [];
  try {
    if (!locals.userId) {
      return (0, import_erroh_c062e309.u)("Unauthorized");
    }
    if (!body) {
      return (0, import_erroh_c062e309.b)("No body.");
    }
    const { customSpell } = body;
    if (!customSpell._id || !customSpell.custom) {
      return (0, import_erroh_c062e309.b)("This is not a custom spell");
    }
    await (0, import_db_8890404f.c)();
    const charQuery = { user: customSpell.user };
    await import_Character_d14be3f1.C.updateMany(charQuery, { $pull: { spellbook: { $in: [customSpell._id] } } }, { multi: true }, async (err) => {
      if (err) {
        errors.push(err);
      } else {
        console.log("Spell removed from all characters owned by user");
      }
    });
    const spellQuery = { _id: customSpell._id, user: customSpell.user };
    const deletedSpell = await CustomSpell$1.findOneAndRemove(spellQuery, (err, result) => {
      if (err) {
        errors.push(err);
        return (0, import_erroh_c062e309.a)(err);
      } else {
        if (!result) {
          return (0, import_erroh_c062e309.a)("Didn't find the item");
        }
      }
      return result;
    });
    const spell = __spreadValues({}, deletedSpell);
    return {
      status: 200,
      body: {
        success: true,
        deletedSpell: spell
      }
    };
  } catch (err) {
    return (0, import_erroh_c062e309.s)(JSON.stringify(errors));
  }
}
