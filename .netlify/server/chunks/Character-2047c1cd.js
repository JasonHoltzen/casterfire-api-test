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
  c: () => characterSchema
});
var import_joi = __toModule(require("joi"));
const characterSchema = import_joi.default.object({
  _id: import_joi.default.string().alphanum().optional().allow("").meta({ _mongoose: { type: "ObjectId", ref: "Characters" } }),
  user: import_joi.default.string().alphanum().optional().allow("").meta({
    _mongoose: { type: "ObjectId", ref: "User" }
  }),
  characterName: import_joi.default.string().min(1).max(255).trim().required().messages({
    "string.base": "Character Name may only contain numbers and letters",
    "string.empty": "Character Name is required",
    "string.min": "Character name must be between 1 and 255 characters",
    "string.max": "Character name must be between 1 and 255 characters",
    "any.required": "Character Name is required"
  }),
  characterClass: import_joi.default.string().required().messages({
    "string.empty": "Class is required",
    "any.required": "Class is required"
  }),
  focus: import_joi.default.string().optional().allow(""),
  level: import_joi.default.number().integer().min(1).max(20),
  ancestry: import_joi.default.string().optional().allow(""),
  archetype: import_joi.default.string().optional().allow(""),
  alignment: import_joi.default.string().optional().allow(""),
  active: import_joi.default.bool().required(),
  spellbook: import_joi.default.array().items(import_joi.default.string().alphanum().meta({
    _mongoose: {
      type: "ObjectId",
      ref: "Spell"
    }
  })).optional().allow("")
});
