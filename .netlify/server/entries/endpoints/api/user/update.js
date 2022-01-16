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
  post: () => post
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_User_7fc291b2 = __toModule(require("../../../../chunks/User-7fc291b2.js"));
var import_erroh_c062e309 = __toModule(require("../../../../chunks/erroh-c062e309.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
async function post({ body, locals }) {
  try {
    if (!body) {
      return (0, import_erroh_c062e309.b)("You need a body...");
    }
    if (!locals.userId) {
      return (0, import_erroh_c062e309.u)("User is not logged in or session is invalid");
    }
    const { _id, name, email } = body;
    if (locals.userId !== _id) {
      return (0, import_erroh_c062e309.u)("Logged in user ID does not match submitted user ID.");
    }
    const filter = { _id: locals.userId };
    const update = { name, email };
    try {
      await (0, import_db_8890404f.c)();
      const user = await import_User_7fc291b2.U.findOneAndUpdate(filter, update, {
        new: true
      }).lean();
      if (!user) {
        return (0, import_erroh_c062e309.a)("User not found");
      }
      delete user.password;
      delete user.__v;
      delete user.date;
      user._id = user._id.toString();
      return {
        status: 200,
        body: {
          user
        }
      };
    } catch (err) {
      return (0, import_erroh_c062e309.s)();
    }
  } catch (err) {
    console.log(err);
    return err;
  }
}