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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["favicon.ico", "favicon.png", "global.css", "lockuptext.svg", "logo.svg"]),
  _: {
    mime: { ".ico": "image/vnd.microsoft.icon", ".png": "image/png", ".css": "text/css", ".svg": "image/svg+xml" },
    entry: { "file": "start-8322c5dc.js", "js": ["start-8322c5dc.js", "chunks/vendor-ad9d9cc1.js"], "css": ["assets/start-464e9d0a.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/all-users\/?$/,
        params: null,
        path: "/all-users",
        a: [3, 4],
        b: []
      },
      {
        type: "endpoint",
        pattern: /^\/auth\/register\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/register.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/auth\/logout\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/logout.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/auth\/login\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/auth/login.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/characters\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/characters/index.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/characters\/selected\/removeSpell\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/characters/selected/removeSpell.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/characters\/selected\/addSpell\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/characters/selected/addSpell.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/spells\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/spells/index.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/spells\/custom\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/spells/custom.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/user\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/user/index.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/user\/all-users\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/user/all-users.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/user\/update\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/api/user/update.js")))
      }
    ]
  }
};
