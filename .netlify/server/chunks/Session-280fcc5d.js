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
  S: () => Session$1
});
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
let sessionSchema = import_joi.default.object({
  userId: import_joi.default.string().meta({ _mongoose: { type: "ObjectId", ref: "User" } }),
  sessionId: import_joi.default.string().uuid().required(),
  createdOn: import_joi.default.date().required(),
  key: import_joi.default.string().required(),
  token: import_joi.default.string().required()
});
const { Schema } = import_mongoose.default;
const Joigoose = (0, import_joigoose.default)(import_mongoose.default);
let Session = new Schema(Joigoose.convert(sessionSchema));
var Session$1 = import_mongoose.default.models["session"] || import_mongoose.default.model("session", Session);
