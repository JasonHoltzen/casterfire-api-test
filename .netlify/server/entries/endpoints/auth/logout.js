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
  del: () => del
});
var import_db_8890404f = __toModule(require("../../../chunks/db-8890404f.js"));
var import_Session_280fcc5d = __toModule(require("../../../chunks/Session-280fcc5d.js"));
var cookie = __toModule(require("cookie"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
async function del({ locals }) {
  if (!locals.userId) {
    return {
      status: 200,
      body: {}
    };
  }
  try {
    await (0, import_db_8890404f.c)();
    import_Session_280fcc5d.S.deleteMany({ userId: locals.userId });
  } catch (err) {
  }
  const headers = {
    "Set-Cookie": cookie.serialize("session", "", {
      httpOnly: true,
      maxAge: -1,
      sameSite: true,
      path: "/"
    })
  };
  return {
    status: 200,
    headers,
    body: {
      user: void 0
    }
  };
}
