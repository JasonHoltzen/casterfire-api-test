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
  default: () => _layout_reset
});
var import_index_dfe95557 = __toModule(require("../../../chunks/index-dfe95557.js"));
var import_lockuptext_9f3078c3 = __toModule(require("../../../chunks/lockuptext-9f3078c3.js"));
var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1w0vinl.svelte-1w0vinl{--header-height:80px;flex:1 1 auto;flex-flow:column nowrap;height:100%;margin:0 auto;max-height:100%;max-width:1280px}.container.svelte-1w0vinl.svelte-1w0vinl,header.svelte-1w0vinl.svelte-1w0vinl{display:flex;position:relative}header.svelte-1w0vinl.svelte-1w0vinl{align-items:center;background:var(--c-gray-darkest);border-radius:var(--bdrs);color:var(--c-gray-lighter);flex-flow:row nowrap;justify-content:space-between;max-height:var(--header-height);padding:10px;width:100%;z-index:20}header.svelte-1w0vinl a.back.svelte-1w0vinl{border-bottom:1px solid transparent;border-top:1px solid transparent;padding:0 5px;position:absolute;text-decoration:none;text-transform:uppercase;transition:border-color .2s ease-in-out}header.svelte-1w0vinl a.back.svelte-1w0vinl,header.svelte-1w0vinl a.back.svelte-1w0vinl:visited{color:var(--c-p-light)}header.svelte-1w0vinl a.back.svelte-1w0vinl:active,header.svelte-1w0vinl a.back.svelte-1w0vinl:hover{border-bottom-color:var(--c-p-lighter);border-left-color:solid;border-right-color:solid;border-top-color:1px}header.svelte-1w0vinl .lockup.svelte-1w0vinl{align-items:center;align-self:center;display:flex;flex-flow:row nowrap;justify-content:center;margin:0 auto}header.svelte-1w0vinl .lockup h1.svelte-1w0vinl{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}header.svelte-1w0vinl .lockup .logo.svelte-1w0vinl{height:60px;margin:0 10px;width:auto}main.svelte-1w0vinl.svelte-1w0vinl{border-radius:10px;flex:1 1 auto;margin:10px auto;overflow:auto;position:relative;width:clamp(200px,40%,600px)}",
  map: null
};
const _layout_reset = (0, import_index_dfe95557.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1w0vinl"}"><header class="${"svelte-1w0vinl"}"><a href="${"/"}" class="${"back svelte-1w0vinl"}">\u2190\xA0Back</a>
		<div class="${"lockup svelte-1w0vinl"}"><img${(0, import_index_dfe95557.a)("src", import_lockuptext_9f3078c3.L, 0)} alt="${"CasterFire Logo"}" class="${"logo svelte-1w0vinl"}">
			<img${(0, import_index_dfe95557.a)("src", import_lockuptext_9f3078c3.a, 0)} alt="${"CasterFire Lockup Text"}" class="${"logo svelte-1w0vinl"}">
			<h1 class="${"svelte-1w0vinl"}">CasterFire</h1></div></header>
	<main class="${"svelte-1w0vinl"}">${slots.default ? slots.default({}) : ``}</main></div>

`;
});
