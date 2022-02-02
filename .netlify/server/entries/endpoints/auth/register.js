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
var import_db_8890404f = __toModule(require("../../../chunks/db-8890404f.js"));
var import_User_7fc291b2 = __toModule(require("../../../chunks/User-7fc291b2.js"));
var import_Session_280fcc5d = __toModule(require("../../../chunks/Session-280fcc5d.js"));
var import_erroh_c062e309 = __toModule(require("../../../chunks/erroh-c062e309.js"));
var import_bcrypt = __toModule(require("bcrypt"));
var cookie = __toModule(require("cookie"));
var import_uuid = __toModule(require("uuid"));
var import_crypt_1ec0fc7a = __toModule(require("../../../chunks/crypt-1ec0fc7a.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
var import_tweetnacl = __toModule(require("tweetnacl"));
var import_tweetnacl_util = __toModule(require("tweetnacl-util"));
async function post({ body }) {
  if (!body) {
    throw (0, import_erroh_c062e309.n)();
  }
  try {
    await (0, import_db_8890404f.c)();
    const { email, name, password } = body;
    let user = void 0;
    user = await import_User_7fc291b2.U.findOne({ email }).lean().clone();
    if (user) {
      return (0, import_erroh_c062e309.c)();
    } else {
      user = void 0;
    }
    const salt = await import_bcrypt.default.genSalt(10);
    const encPw = await import_bcrypt.default.hash(password, salt);
    try {
      user = await import_User_7fc291b2.U.create({
        name,
        password: encPw,
        email
      });
      user = user.toObject();
      delete user.password;
    } catch (error) {
      if (error._message === "user validation failed") {
        return (0, import_erroh_c062e309.v)("User validation failed on the server");
      }
      return (0, import_erroh_c062e309.b)("Could not create new user");
    }
    const sessionId = (0, import_uuid.v4)();
    const token = (0, import_uuid.v4)();
    const key = (0, import_crypt_1ec0fc7a.g)();
    const encryptedToken = (0, import_crypt_1ec0fc7a.e)(token, key);
    try {
      await import_Session_280fcc5d.S.create({
        sessionId,
        userId: user._id,
        createdOn: Date.now(),
        token,
        key
      });
    } catch (error) {
      if (error._message === "session validation failed") {
        return (0, import_erroh_c062e309.v)("Session validation failed on the server");
      }
      return (0, import_erroh_c062e309.b)("Could not save session to server");
    }
    const session = JSON.stringify({
      sessionId,
      token: encryptedToken
    });
    const headers = {
      "Set-Cookie": cookie.serialize("session", session, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        path: "/"
      })
    };
    return {
      status: 200,
      headers,
      body: {
        user,
        message: "success"
      }
    };
  } catch (err) {
    if (err && err.message) {
      return err;
    }
    return (0, import_erroh_c062e309.s)();
  }
}
