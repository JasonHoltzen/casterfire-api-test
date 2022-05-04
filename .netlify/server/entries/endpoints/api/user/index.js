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
  get: () => get
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_erroh_c062e309 = __toModule(require("../../../../chunks/erroh-c062e309.js"));
var import_User_a98eda05 = __toModule(require("../../../../chunks/User-a98eda05.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
async function get({ locals }) {
  try {
    await (0, import_db_8890404f.c)();
    const user = await import_User_a98eda05.U.findOne({ _id: locals.userId }).lean().clone() || void 0;
    if (user) {
      delete user.password;
      delete user.__v;
      delete user.date;
    }
    return {
      status: 200,
      body: __spreadValues({}, user)
    };
  } catch (err) {
    return (0, import_erroh_c062e309.u)();
  }
}
