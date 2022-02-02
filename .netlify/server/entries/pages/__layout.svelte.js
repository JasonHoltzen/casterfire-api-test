var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  default: () => _layout,
  load: () => load
});
var import_index_b4d695ef = __toModule(require("../../chunks/index-b4d695ef.js"));
var import_spellForm_f8ba31d6 = __toModule(require("../../chunks/spellForm-f8ba31d6.js"));
var import_lockuptext_9f3078c3 = __toModule(require("../../chunks/lockuptext-9f3078c3.js"));
var import_Character_2047c1cd = __toModule(require("../../chunks/Character-2047c1cd.js"));
var import_joi = __toModule(require("joi"));
var import_CustomSpell_d270f8cd = __toModule(require("../../chunks/CustomSpell-d270f8cd.js"));
var app$1 = "";
var app = "";
const Menu = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox, 0)}><path d="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const initFormStore = {
  spellbook: [],
  _id: "",
  active: true,
  alignment: "",
  ancestry: "",
  archetype: "",
  focus: "",
  characterClass: "",
  characterName: "",
  level: 1,
  user: ""
};
const createCharacterFormStore = () => {
  const { subscribe: subscribe2, set } = (0, import_spellForm_f8ba31d6.w)(initFormStore);
  return {
    subscribe: subscribe2,
    set,
    reset: () => set(__spreadValues({}, initFormStore)),
    save: (n) => {
      set(n);
    }
  };
};
const calculateDropdowns = (characterFormValues2, staticLists2) => {
  const classes = staticLists2.classes.map((_class) => {
    return _class.name;
  });
  let selectedClass = staticLists2.classes.find((_class) => {
    return _class.name === characterFormValues2.characterClass;
  });
  let focuses;
  if (!!selectedClass && selectedClass.focusRef !== void 0) {
    let classFullFocus = staticLists2.focuses.find((_focus) => {
      return _focus.name === selectedClass.focusRef;
    });
    focuses = [...classFullFocus.options].map((_opt) => {
      return _opt.name;
    });
  } else {
    focuses = [];
  }
  let archetypes = staticLists2.archetypes.map((arch) => {
    return arch.name;
  });
  return {
    classes,
    focuses,
    ancestries: [...staticLists2.ancestries],
    archetypes,
    alignments: [...staticLists2.alignments]
  };
};
const characterFormValues = createCharacterFormStore();
(0, import_spellForm_f8ba31d6.d)([characterFormValues, import_spellForm_f8ba31d6.s], ([$characterFormValues, $staticLists]) => {
  return calculateDropdowns($characterFormValues, $staticLists);
});
(0, import_spellForm_f8ba31d6.d)([characterFormValues], ([$characterFormValues]) => {
  const tempFormVals = __spreadValues({}, $characterFormValues);
  let messages = [];
  delete tempFormVals.__v;
  const validation = import_Character_2047c1cd.c.validate(tempFormVals, { abortEarly: false });
  if (!!validation && !!validation.error && !!validation.error.details) {
    validation.error.details.forEach((e) => messages.push(e.message.toString()));
  }
  return messages;
});
var validatedInput_svelte_svelte_type_style_lang = "";
const pw_lower = new RegExp("^(?=.*[a-z])");
const pw_upper = new RegExp("^(?=.*[A-Z])");
const pw_num = new RegExp("^(?=.*[0-9])");
const pw_special = new RegExp("^(?=.*?[#?!@$%^&*-])");
import_joi.default.object({
  email: import_joi.default.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "text",
    "string.email": "a valid email address"
  }),
  password: import_joi.default.string().min(8).max(255).pattern(pw_lower, { name: "1 lowercase character" }).pattern(pw_upper, { name: "1 uppercase character" }).pattern(pw_num, { name: "1 number" }).pattern(pw_special, { name: "1 special character" }).required().messages({
    "string.empty": "text",
    "string.min": "at least 8 characters",
    "string.max": "no more than 255 characters",
    "string.pattern.name": "{#name}"
  }),
  repeat_password: import_joi.default.ref("password"),
  name: import_joi.default.string().alphanum().messages({
    "string.empty": "text",
    "string.alphanum": "only letters or numbers"
  })
}).with("repeat_password", "password").messages({ "object.with": "both password fields" }).with("repeat_password", "name").messages({ "object.with": "name entry" }).with("name", "repeat_password").messages({ "object.with": "a confirmed password" });
var login_svelte_svelte_type_style_lang = "";
var register_svelte_svelte_type_style_lang = "";
var authform_svelte_svelte_type_style_lang = "";
var logoutButton_svelte_svelte_type_style_lang = "";
var characterEditModal_svelte_svelte_type_style_lang = "";
var nav_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{cursor:pointer}h3.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{color:var(--c-p-light);margin:.5rem 0 1rem auto;text-align:left;text-transform:uppercase;width:clamp(100px,200px,80%)}.navMenu.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{flex:0 0 auto;position:relative}.menuButton.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-p-dark);background-image:linear-gradient(45deg,var(--c-p-dark) 25%,var(--c-p-light) 75%);border:none;border-radius:50%;box-sizing:border-box;display:flex;height:40px;position:relative;transition:all .2s ease-in-out;width:40px;z-index:100}.menuButton.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9:hover{box-shadow:0 5px 3px var(--c-s-light);transform:translateY(-3px)}@media(max-width:992px){.menuButton.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{height:44px;width:44px}}.menuButton.svelte-1uyrbt9 span.svelte-1uyrbt9.svelte-1uyrbt9{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.menuOptions.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-gray-dark);border:2px solid var(--c-gray-darkest);border-radius:10px;border-top-left-radius:22px;box-shadow:2px 2px 5px var(--c-s-dark);color:var(--c-gray-lighter);list-style-type:none;max-width:300px;min-width:220px;padding:0 10px 10px;position:absolute;top:0;width:20vw;z-index:-1}.buttonRow.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{display:flex;flex-flow:row nowrap;justify-content:space-between;width:100%}.buttonRow.buttonRow__top.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{flex-flow:column nowrap}.buttonRow.buttonRow__top.svelte-1uyrbt9 button.svelte-1uyrbt9.svelte-1uyrbt9{margin-bottom:8px}.buttonRow.svelte-1uyrbt9 button.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-p-dark);background-image:linear-gradient(45deg,var(--c-p-dark) 25%,var(--c-p-light) 75%);border:none;border-radius:10px;box-sizing:content-box;color:#fff;cursor:pointer;display:flex;height:34px;padding:5px 10px;place-items:center center;transition:all .2s ease-in-out}.buttonRow.svelte-1uyrbt9 button .text.svelte-1uyrbt9.svelte-1uyrbt9{font-size:16px;padding-left:5px;padding-top:2px}ul.navPoints.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{display:flex;flex-flow:column nowrap}.characterList.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{border-bottom:2px solid var(--c-s-light);border-top:2px solid var(--c-s-light);margin:10px 0;padding:10px 0;width:100%}.characterList.svelte-1uyrbt9 .characterName.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-gray-dark);border-radius:10px;display:block;height:44px;margin-bottom:5px;padding:2px;text-decoration:underline;transition:all .2s ease-in-out;width:100%}.characterList.svelte-1uyrbt9 .characterName.svelte-1uyrbt9.svelte-1uyrbt9:hover{background:var(--c-gray-darker)}.characterList.svelte-1uyrbt9 .characterName .text.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-gray-dark);border-radius:10px;display:flex;height:100%;padding-left:5px;place-items:center start;transition:all .2s ease-in-out;width:100%}.characterList.svelte-1uyrbt9 .characterName .text.svelte-1uyrbt9.svelte-1uyrbt9:hover{background:var(--c-gray-darker)}.characterList.svelte-1uyrbt9 input.svelte-1uyrbt9.svelte-1uyrbt9{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.characterList.svelte-1uyrbt9 input.svelte-1uyrbt9:checked+.characterName.svelte-1uyrbt9{background:var(--c-p-dark);background-image:linear-gradient(45deg,var(--c-p-dark) 25%,var(--c-p-light) 75%)}.characterList.svelte-1uyrbt9 input:checked+.characterName .text.svelte-1uyrbt9.svelte-1uyrbt9{background:var(--c-gray-dark)}a.userReport.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9{font-size:14px;max-width:35%;text-align:center;transition:color .2s ease-in-out}a.userReport.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9,a.userReport.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9:visited{color:var(--c-p-light)}a.userReport.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9:focus,a.userReport.svelte-1uyrbt9.svelte-1uyrbt9.svelte-1uyrbt9:hover{color:var(--c-p-lighter)}",
  map: null
};
const Nav = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_modal;
  let $$unsubscribe_selectedCharacter;
  let $$unsubscribe_characterFormValues;
  let $$unsubscribe_user;
  let $$unsubscribe_characters;
  $$unsubscribe_modal = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.m, (value) => value);
  $$unsubscribe_selectedCharacter = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.a, (value) => value);
  $$unsubscribe_characterFormValues = (0, import_index_b4d695ef.b)(characterFormValues, (value) => value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => value);
  $$unsubscribe_characters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.c, (value) => value);
  let menuIconProps = {
    color: "var(--c-gray-lighter)",
    width: "30px",
    height: "30px",
    size: "30px",
    viewBox: "0 0 24 24"
  };
  $$result.css.add(css$4);
  $$unsubscribe_modal();
  $$unsubscribe_selectedCharacter();
  $$unsubscribe_characterFormValues();
  $$unsubscribe_user();
  $$unsubscribe_characters();
  return `<nav class="${"navMenu svelte-1uyrbt9"}"><button class="${"menuButton svelte-1uyrbt9"}" aria-label="${"Show site menu"}" aria-haspopup="${"true"}">${`<span class="${"svelte-1uyrbt9"}">${(0, import_index_b4d695ef.v)(Menu, "MenuButtonIcon").$$render($$result, Object.assign(menuIconProps), {}, {})}</span>`}</button>

	${``}
</nav>`;
});
const Account = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox, 0)}><path d="${"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const NotebookOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox, 0)}><path d="${"M17,4V10L15,8L13,10V4H9V20H19V4H17M3,7V5H5V4C5,2.89 5.9,2 7,2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M5,5V7H7V5H5M5,19H7V17H5V19M5,13H7V11H5V13Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const BookOpenVariant = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox, 0)}><path d="${"M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var playerInfo_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".playerInfo.svelte-1myhn89.svelte-1myhn89{align-items:flex-end;color:#fff;display:flex;flex-flow:column nowrap;gap:.25rem;margin-left:auto}@media(max-width:767px){.playerInfo.svelte-1myhn89.svelte-1myhn89{flex-flow:row wrap;justify-content:space-between;width:100%}}span.svelte-1myhn89.svelte-1myhn89{align-items:center;display:inline-flex;flex-flow:row nowrap;justify-content:space-between}.character.svelte-1myhn89.svelte-1myhn89,.user.svelte-1myhn89.svelte-1myhn89{display:flex;flex-flow:row nowrap;gap:10px}.character.svelte-1myhn89 .icon.svelte-1myhn89,.user.svelte-1myhn89 .icon.svelte-1myhn89{display:grid;place-items:center center}.character.svelte-1myhn89 .text.svelte-1myhn89,.user.svelte-1myhn89 .text.svelte-1myhn89{font-weight:700;text-transform:uppercase}",
  map: null
};
const PlayerInfo = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let characterName;
  let level;
  let ancestry;
  let characterClass;
  let $selectedCharacter, $$unsubscribe_selectedCharacter;
  let $user, $$unsubscribe_user;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_selectedCharacter = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.a, (value) => $selectedCharacter = value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => $user = value);
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  const iconProps = {
    color: "var(--c-gray-lighter)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  $$result.css.add(css$3);
  ({ characterName, level, ancestry, characterClass } = $selectedCharacter);
  $$unsubscribe_selectedCharacter();
  $$unsubscribe_user();
  $$unsubscribe_filters();
  return `${($user == null ? void 0 : $user.name) ? `<div class="${"playerInfo svelte-1myhn89"}"><div class="${"user svelte-1myhn89"}"><span class="${"icon svelte-1myhn89"}">${(0, import_index_b4d695ef.v)(Account, "UserIcon").$$render($$result, Object.assign(iconProps), {}, {})}</span>
			<span class="${"text svelte-1myhn89"}">${(0, import_index_b4d695ef.e)($user.name)}</span></div>
		${characterName ? `<div class="${"character svelte-1myhn89"}"><span class="${"icon svelte-1myhn89"}">${!$filters.characterSpells.isolate ? `${(0, import_index_b4d695ef.v)(NotebookOutline, "CharacterIcon").$$render($$result, Object.assign(iconProps), {}, {})}` : `${(0, import_index_b4d695ef.v)(BookOpenVariant, "CharacterAltIcon").$$render($$result, Object.assign(iconProps), {}, {})}`}</span>
				<span class="${"text svelte-1myhn89"}">${(0, import_index_b4d695ef.e)(characterName)} (${(0, import_index_b4d695ef.e)(level)})
					${(0, import_index_b4d695ef.e)(ancestry)}
					${(0, import_index_b4d695ef.e)(characterClass)}</span></div>` : ``}</div>` : `<div class="${"playerInfo svelte-1myhn89"}"></div>`}

`;
});
var copyButton_svelte_svelte_type_style_lang = "";
var consoleItem_svelte_svelte_type_style_lang = "";
var console_svelte_svelte_type_style_lang = "";
var modal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".modal.svelte-1b7roaa{-webkit-backdrop-filter:blur(10px) saturate(180%);backdrop-filter:blur(10px) saturate(180%);background:rgba(86,101,115,.85);bottom:0;display:grid;height:100%;left:0;overflow:auto;place-items:center center;position:absolute;right:0;top:0;width:100%;z-index:3333}",
  map: null
};
const Modal = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.m, (value) => $modal = value);
  $$result.css.add(css$2);
  $$unsubscribe_modal();
  return `${$modal.show ? `<div class="${"modal svelte-1b7roaa"}">${(0, import_index_b4d695ef.v)($modal.component || import_index_b4d695ef.m, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
var errorToast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".screenBlur.svelte-1g6nn67{background:hsla(0,0%,100%,.5);display:grid;height:100vh;overflow:hidden;padding:10%;place-items:flex-start center;position:absolute;width:100vw;z-index:6666}.container.svelte-1g6nn67{background:#333;border-radius:.4rem;color:#fefefe;flex-flow:column nowrap;min-width:200px;padding:.5rem;position:relative;width:30%}.container.svelte-1g6nn67,.topBar.svelte-1g6nn67{align-items:flex-start;display:flex;justify-content:space-between}.topBar.svelte-1g6nn67{flex-flow:row nowrap;padding:.25rem;width:100%}h3.svelte-1g6nn67{align-self:center;flex:1 1 100%;margin:0;padding:0}button.svelte-1g6nn67{background:var(--c-p-light);border:2px solid transparent;border-radius:50%;color:#fff;display:grid;flex:0 0 36px;height:36px;outline:none;padding:0;place-items:center center;transition:border-color .4s ease-in-out}button.svelte-1g6nn67:hover{border-color:var(--c-gray-lighter)}p.svelte-1g6nn67{padding:.75rem}",
  map: null
};
const ErrorToast = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $dataError, $$unsubscribe_dataError;
  $$unsubscribe_dataError = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.b, (value) => $dataError = value);
  const iconProps = {
    color: "var(--c-gray-lighter)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  $$result.css.add(css$1);
  $$unsubscribe_dataError();
  return `<div class="${"screenBlur svelte-1g6nn67"}"><div class="${"container svelte-1g6nn67"}"><div class="${"topBar svelte-1g6nn67"}"><h3 class="${"svelte-1g6nn67"}">Uh oh! ${!!($dataError == null ? void 0 : $dataError.code) ? `A ${(0, import_index_b4d695ef.e)($dataError.code)} error...` : ``}</h3>
			<button aria-label="${"close error"}" class="${"closeButton svelte-1g6nn67"}">${(0, import_index_b4d695ef.v)(import_spellForm_f8ba31d6.C, "CloseIcon").$$render($$result, Object.assign(iconProps), {}, {})}</button></div>
		${!!($dataError == null ? void 0 : $dataError.message) ? `<p class="${"svelte-1g6nn67"}">${(0, import_index_b4d695ef.e)($dataError.message)}</p>` : `<p class="${"svelte-1g6nn67"}">Oof...an error we didn&#39;t plan for. Sorry about that.</p>`}</div>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-13032o3.svelte-13032o3{display:grid;flex:1 1 auto;gap:3px;grid-template-columns:minmax(250px,1fr) minmax(200px,3fr);grid-template-rows:-webkit-min-content -webkit-min-content 1fr;grid-template-rows:min-content min-content 1fr;height:100%;margin:0 auto;max-height:100%;max-width:1280px;position:relative}@media(max-width:767px){.container.svelte-13032o3.svelte-13032o3{grid-template-columns:100%;height:auto;max-height:auto}.container.svelte-13032o3>.svelte-13032o3{grid-column:1/-1!important;grid-row:auto!important}}header.svelte-13032o3.svelte-13032o3{align-items:center;background:var(--c-gray-darkest);border-radius:var(--bdrs);color:varl(--c-gray-lighter);display:flex;flex-flow:row wrap;gap:1rem;grid-column:1/-1;grid-row:1/1;justify-content:space-between;padding:10px;z-index:20}@media(max-width:767px){header.svelte-13032o3.svelte-13032o3{justify-content:flex-start}}.lockup.svelte-13032o3.svelte-13032o3{align-items:center;display:flex;flex:1 1 auto;flex-flow:row nowrap;gap:.5rem;justify-content:center;margin:0 auto;max-width:70%}.logo.svelte-13032o3.svelte-13032o3{min-height:20px;width:clamp(20px,10vw,50px)}.logoText.svelte-13032o3.svelte-13032o3{max-height:60px;min-height:20px;width:clamp(80px,60vw,250px)}h1.svelte-13032o3.svelte-13032o3{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}",
  map: null
};
async function load({ session, fetch }) {
  if (session.userId) {
    try {
      let currentUser = await fetch("/api/user").then((r) => r.json());
      if (currentUser) {
        import_spellForm_f8ba31d6.u.set(currentUser);
      } else {
        import_spellForm_f8ba31d6.b.showFatal("User not found");
        return {};
      }
    } catch (err) {
      import_spellForm_f8ba31d6.b.showFatal("Error connecting to database");
      return {};
    }
  }
  return {};
}
const _layout = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $dataError, $$unsubscribe_dataError;
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => value);
  $$unsubscribe_dataError = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.b, (value) => $dataError = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  $$unsubscribe_dataError();
  return `${$$result.head += `${$$result.title = `<title>CasterFire</title>`, ""}<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-ipyj0x"><link href="${"https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Raleway:wght@400;700;900&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-ipyj0x">`, ""}

${(0, import_index_b4d695ef.v)(Modal, "Modal").$$render($$result, {}, {}, {})}
${$dataError.visible ? `${(0, import_index_b4d695ef.v)(ErrorToast, "ErrorToast").$$render($$result, {}, {}, {})}` : ``}
<div class="${"container svelte-13032o3"}"><header class="${"svelte-13032o3"}">${(0, import_index_b4d695ef.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
		
		<div class="${"lockup svelte-13032o3"}"><img${(0, import_index_b4d695ef.a)("src", import_lockuptext_9f3078c3.L, 0)} alt="${"CasterFire Logo"}" class="${"logo svelte-13032o3"}">
			<img${(0, import_index_b4d695ef.a)("src", import_lockuptext_9f3078c3.a, 0)} alt="${"CasterFire Lockup Text"}" class="${"logoText svelte-13032o3"}">
			<h1 class="${"svelte-13032o3"}">CasterFire</h1></div>
		${(0, import_index_b4d695ef.v)(PlayerInfo, "PlayerInfo").$$render($$result, {}, {}, {})}</header>
	${slots.default ? slots.default({}) : ``}
	${``}
</div>`;
});
