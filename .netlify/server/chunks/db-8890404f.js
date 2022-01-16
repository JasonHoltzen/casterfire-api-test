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
  c: () => connectDB
});
var import_dotenv = __toModule(require("dotenv"));
var import_mongoose = __toModule(require("mongoose"));
import_dotenv.default.config();
const mongodb_uri = process.env["MONGODB_URI"];
if (!mongodb_uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false
};
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { db: null, promise: null };
}
async function connectDB() {
  if (cached.db) {
    return cached.db;
  }
  if (!cached.promise) {
    try {
      cached.promise = import_mongoose.default.connect(mongodb_uri, opts).then((mongoose2) => {
        return mongoose2;
      });
    } catch (error) {
      return null;
    }
  }
  cached.db = await cached.promise;
  return cached.db;
}
