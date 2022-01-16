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
  c: () => customSpellSchema
});
var import_joi = __toModule(require("joi"));
let customSpellSchema = import_joi.default.object({
  id: import_joi.default.string().alphanum().meta({ _mongoose: { type: "ObjectId", ref: "CustomSpell" } }),
  user: import_joi.default.string().alphanum().allow("").meta({
    _mongoose: { type: "ObjectId", ref: "User" }
  }),
  traits: import_joi.default.array().unique().required().items(import_joi.default.string().required()).messages({
    "array.unique": "Cannot have duplicate traits",
    "string.required": "At least one trait is required"
  }),
  type: import_joi.default.string().required(),
  name: import_joi.default.string().required().max(200),
  level: import_joi.default.number().integer().required().min(0).max(10),
  source: import_joi.default.string().allow(null, "").max(255),
  traditions: import_joi.default.array().items(import_joi.default.string()).allow(null),
  components: import_joi.default.array().items(import_joi.default.string()).allow(null),
  cast: import_joi.default.string().allow(null, "").max(255),
  action: import_joi.default.array().items(import_joi.default.string()).allow(null),
  trigger: import_joi.default.string().allow(null, "").max(200),
  range: import_joi.default.string().allow(null, "").max(100),
  area: import_joi.default.string().allow(null, "").max(100),
  cost: import_joi.default.string().allow(null, "").max(200),
  requirements: import_joi.default.string().allow(null, "").max(100),
  savingThrow: import_joi.default.string().allow(null, "").max(100),
  targets: import_joi.default.string().allow(null, "").max(100),
  effect: import_joi.default.string().allow(null, "").max(200),
  duration: import_joi.default.string().allow(null, "").max(100),
  bloodline: import_joi.default.string().allow(null, ""),
  domain: import_joi.default.string().allow(null, ""),
  lesson: import_joi.default.string().allow(null, ""),
  mystery: import_joi.default.string().allow(null, ""),
  patronTheme: import_joi.default.string().allow(null, ""),
  description: import_joi.default.string().required().max(6e3),
  custom: import_joi.default.bool().required().default(true)
});
