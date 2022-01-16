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
  default: () => All_users,
  load: () => load
});
var import_index_dfe95557 = __toModule(require("../../../chunks/index-dfe95557.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-u3dcir.svelte-u3dcir{background:var(--c-gray-darker);margin:0 0 3px;position:-webkit-sticky;position:sticky;top:0}h2.svelte-u3dcir.svelte-u3dcir,ul.svelte-u3dcir.svelte-u3dcir{border-radius:10px;color:var(--c-gray-lighter);padding:10px}ul.svelte-u3dcir.svelte-u3dcir{background:var(--c-gray-dark);flex-flow:column nowrap}ul.svelte-u3dcir.svelte-u3dcir,ul.svelte-u3dcir li.svelte-u3dcir{display:flex}ul.svelte-u3dcir li.svelte-u3dcir{border-bottom:1px solid var(--c-p-light);flex-flow:row nowrap;padding:3px}ul.svelte-u3dcir li.svelte-u3dcir:last-of-type{border-bottom:none}ul.svelte-u3dcir li.svelte-u3dcir:hover{background:rgba(64,149,191,.1)}ul.svelte-u3dcir li .name.svelte-u3dcir{width:40%}ul.svelte-u3dcir li .date.svelte-u3dcir{flex:1 0 auto}",
  map: null
};
async function load({ fetch }) {
  let errors = [];
  let playerList = await fetch("/api/user/all-users").then((r) => r.json().then((r2) => r2.playerList)).catch((err) => errors.push(err));
  return { props: { errors, playerList } };
}
const All_users = (0, import_index_dfe95557.c)(($$result, $$props, $$bindings, slots) => {
  let { playerList } = $$props;
  if ($$props.playerList === void 0 && $$bindings.playerList && playerList !== void 0)
    $$bindings.playerList(playerList);
  $$result.css.add(css);
  return `<h2 class="${"svelte-u3dcir"}">User List</h2>
${playerList ? `<ul class="${"svelte-u3dcir"}">${(0, import_index_dfe95557.f)(playerList, (player) => `<li class="${"svelte-u3dcir"}"><div class="${"name svelte-u3dcir"}">${(0, import_index_dfe95557.e)(player.name)}</div>
				<div class="${"date svelte-u3dcir"}">${(0, import_index_dfe95557.e)(player.date)}</div>
			</li>`)}</ul>` : ``}`;
});
