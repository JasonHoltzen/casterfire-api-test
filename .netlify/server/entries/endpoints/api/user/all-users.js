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
  get: () => get
});
var import_db_8890404f = __toModule(require("../../../../chunks/db-8890404f.js"));
var import_User_eca564e2 = __toModule(require("../../../../chunks/User-eca564e2.js"));
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
var import_joigoose = __toModule(require("joigoose"));
var import_joi = __toModule(require("joi"));
const convertDate = (date) => {
  let month = (date.getMonth() + 1).toString().padStart(2, 0);
  let day = date.getDate().toString().padStart(2, 0);
  let year = date.getFullYear().toString().padStart(2, 0);
  let hour = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  return `${month}.${day}.${year} - ${hour}:${minutes}`;
};
async function get() {
  try {
    await (0, import_db_8890404f.c)();
    const users = await import_User_eca564e2.U.find({}).lean().clone() || void 0;
    const playerList = await users.map((user) => {
      delete user._id;
      delete user.__v;
      delete user.email;
      delete user.password;
      let date = convertDate(new Date(user.date));
      user.date = date;
      return user;
    });
    return {
      status: 200,
      body: {
        playerList
      }
    };
  } catch (err) {
    console.log(err);
    return err;
  }
}
