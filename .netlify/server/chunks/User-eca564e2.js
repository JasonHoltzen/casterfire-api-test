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
  U: () => User$1
});
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
const userSchema = import_joi.default.object({
  name: import_joi.default.string().regex(/^[a-zA-Z0-9, ]*$/, "Alphanumerics, space and comma characters").min(2).max(255).trim().required(),
  email: import_joi.default.string().email().min(2).max(255).trim().required(),
  password: import_joi.default.string().pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*(),./]{3,200}$")).required(),
  date: import_joi.default.date().default(Date.now()),
  id: import_joi.default.string().alphanum().meta({ _mongoose: { type: "ObjectId", ref: "User" } }),
  customSpells: [
    {
      spell: import_joi.default.string().alphanum().meta({
        _mongoose: {
          type: "ObjectId",
          ref: "Spell"
        }
      })
    }
  ]
});
const { Schema } = import_mongoose.default;
const Joigoose = (0, import_joigoose.default)(import_mongoose.default);
let User = new Schema(Joigoose.convert(userSchema));
var User$1 = import_mongoose.default.models["user"] || import_mongoose.default.model("user", User);
