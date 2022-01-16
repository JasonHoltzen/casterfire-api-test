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
  del: () => del,
  get: () => get,
  post: () => post
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_Character_d14be3f1 = __toModule(require("../../../../chunks/Character-d14be3f1.js"));
var import_erroh_c062e309 = __toModule(require("../../../../chunks/erroh-c062e309.js"));
var import_mongooseId_3cd13daa = __toModule(require("../../../../chunks/mongooseId-3cd13daa.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_Character_2047c1cd = __toModule(require("../../../../chunks/Character-2047c1cd.js"));
var import_joi = __toModule(require("joi"));
async function get({ locals }) {
  if (!locals.userId) {
    return (0, import_erroh_c062e309.u)();
  }
  try {
    await (0, import_db_8890404f.c)();
    let chars = await import_Character_d14be3f1.C.find({ user: locals.userId }).clone().lean();
    return {
      status: 200,
      body: {
        success: true,
        characters: chars
      }
    };
  } catch (error) {
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
    const { character } = body;
    if (!character._id) {
      character._id = (0, import_mongooseId_3cd13daa.g)();
    }
    character.user = { _id: locals.userId };
    const query = { _id: character._id, user: locals.userId };
    await (0, import_db_8890404f.c)();
    const newChar = await import_Character_d14be3f1.C.findOneAndUpdate(query, character, { upsert: true, returnOriginal: false }, (err, doc) => {
      if (err) {
        return null;
      } else {
        return doc;
      }
    }).clone().lean();
    if (await newChar) {
      return {
        status: 200,
        body: {
          character: newChar,
          success: true
        }
      };
    }
    return (0, import_erroh_c062e309.a)();
  } catch (err) {
    return err;
  }
}
async function del({ body, locals }) {
  try {
    if (!body) {
      return (0, import_erroh_c062e309.b)("A head without a body...?");
    }
    if (!locals.userId) {
      (0, import_erroh_c062e309.u)("You shall not pass");
    }
    const { id } = body;
    if (!id) {
      return (0, import_erroh_c062e309.b)("Must provide an id");
    }
    await (0, import_db_8890404f.c)();
    const query = { _id: id, user: locals.userId };
    const deletedCharacter = await import_Character_d14be3f1.C.findOneAndRemove(query, (err, doc) => {
      if (!err && !!doc) {
        return doc;
      } else {
        return err;
      }
    }).clone().lean();
    if (await deletedCharacter) {
      return {
        status: 200,
        body: {
          success: true,
          id: deletedCharacter._id
        }
      };
    }
    return (0, import_erroh_c062e309.a)();
  } catch (err) {
    return err;
  }
}
