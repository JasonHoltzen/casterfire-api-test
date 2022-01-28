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
var import_index_b4d695ef = __toModule(require("../../../chunks/index-b4d695ef.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1ur2yzw.svelte-1ur2yzw{background:var(--c-gray-darker);margin:0 0 3px;position:-webkit-sticky;position:sticky;top:0}h2.svelte-1ur2yzw.svelte-1ur2yzw,table.svelte-1ur2yzw.svelte-1ur2yzw{border-radius:10px;color:var(--c-gray-lighter);padding:10px}table.svelte-1ur2yzw.svelte-1ur2yzw{background:var(--c-gray-dark);width:100%}table.svelte-1ur2yzw thead.svelte-1ur2yzw{border-bottom:3px solid rgba(179,213,230,.2)}table.svelte-1ur2yzw tbody.svelte-1ur2yzw,table.svelte-1ur2yzw thead.svelte-1ur2yzw{display:flex;flex-flow:column nowrap;gap:5px;padding:.5rem;width:100%}table.svelte-1ur2yzw tr.svelte-1ur2yzw{border-bottom:1px solid var(--c-p-light);display:grid;gap:.5rem;grid-template-columns:1fr 2fr;width:100%}table.svelte-1ur2yzw tr.svelte-1ur2yzw:last-of-type{border-bottom:none}table.svelte-1ur2yzw tr.svelte-1ur2yzw:hover{background:rgba(64,149,191,.1)}table.svelte-1ur2yzw th.svelte-1ur2yzw{color:1px solid var(--c-p-light);font-size:1.05em;font-weight:700;text-align:left}",
  map: null
};
async function load({ fetch }) {
  let errors = [];
  let playerList = await fetch("/api/user/all-users").then((r) => r.json().then((r2) => r2.playerList)).catch((err) => errors.push(err));
  return { props: { errors, playerList } };
}
const All_users = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { playerList } = $$props;
  if ($$props.playerList === void 0 && $$bindings.playerList && playerList !== void 0)
    $$bindings.playerList(playerList);
  $$result.css.add(css);
  return `<h2 class="${"svelte-1ur2yzw"}">User List</h2>
${playerList ? `<table class="${"columnLabel svelte-1ur2yzw"}"><thead class="${"svelte-1ur2yzw"}"><tr class="${"svelte-1ur2yzw"}"><th class="${"svelte-1ur2yzw"}">Name</th>
				<th class="${"svelte-1ur2yzw"}">Date Joined</th></tr></thead>
		<tbody class="${"svelte-1ur2yzw"}">${(0, import_index_b4d695ef.g)(playerList, (player) => `<tr class="${"svelte-1ur2yzw"}"><td class="${"name"}">${(0, import_index_b4d695ef.e)(player.name)}</td>
					<td class="${"date"}">${(0, import_index_b4d695ef.e)(player.date)}</td>
				</tr>`)}</tbody></table>` : ``}`;
});
