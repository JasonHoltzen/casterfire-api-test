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
  d: () => de,
  e: () => en,
  g: () => genKey
});
var import_tweetnacl = __toModule(require("tweetnacl"));
var import_tweetnacl_util = __toModule(require("tweetnacl-util"));
const { secretbox, randomBytes } = import_tweetnacl.default;
const { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } = import_tweetnacl_util.default;
const newNonce = () => randomBytes(secretbox.nonceLength);
const genKey = () => encodeBase64(randomBytes(secretbox.keyLength));
const en = (json, key) => {
  const keyUint8Array = decodeBase64(key);
  const nonce = newNonce();
  const messageUint8 = decodeUTF8(JSON.stringify(json));
  const box = secretbox(messageUint8, nonce, keyUint8Array);
  const fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);
  const base64FullMessage = encodeBase64(fullMessage);
  return base64FullMessage;
};
const de = (messageWithNonce, key) => {
  const keyUint8Array = decodeBase64(key);
  const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(secretbox.nonceLength, messageWithNonce.length);
  const decrypted = secretbox.open(message, nonce, keyUint8Array);
  if (!decrypted) {
    console.log("couldn't decrypt message");
    throw new Error("couldn't decrypt message");
  }
  const base64DecryptedMessage = encodeUTF8(decrypted);
  return JSON.parse(base64DecryptedMessage);
};
