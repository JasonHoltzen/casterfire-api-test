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
  default: () => Routes
});
var import_index_b4d695ef = __toModule(require("../../chunks/index-b4d695ef.js"));
var import_spellForm_f8ba31d6 = __toModule(require("../../chunks/spellForm-f8ba31d6.js"));
var import_marked = __toModule(require("marked"));
var import_CustomSpell_d270f8cd = __toModule(require("../../chunks/CustomSpell-d270f8cd.js"));
var import_joi = __toModule(require("joi"));
const DeleteForeverOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const ChevronDown = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var dropdownRevealContent_svelte_svelte_type_style_lang = "";
var dropdownReveal_svelte_svelte_type_style_lang = "";
const css$l = {
  code: ".dropdown.svelte-w7ygob.svelte-w7ygob{cursor:pointer;position:relative}@media(max-width:767px){.dropdown.svelte-w7ygob.svelte-w7ygob{width:100%}}.dropdown.svelte-w7ygob input[type=checkbox].svelte-w7ygob{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.dropdown.svelte-w7ygob label.svelte-w7ygob{align-items:center;background:var(--btnBgClr);border:.5rem;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border-top-left-radius:.5rem;border-top-right-radius:.5rem;box-sizing:border-box;display:flex;flex:0 0 auto;flex-flow:row nowrap;gap:.25rem;justify-content:center;padding:.2rem .1rem .2rem .5rem;position:relative}@media(max-width:767px){.dropdown.svelte-w7ygob label.svelte-w7ygob{min-height:44px;width:100%}}.dropdown.svelte-w7ygob label.checked.svelte-w7ygob{border-bottom-left-radius:0;border-bottom-right-radius:0}.dropdown.svelte-w7ygob label .text.svelte-w7ygob{color:var(--btnTxtClr);transition:color .2s ease-in-out;z-index:10}.dropdown.svelte-w7ygob label .icon.svelte-w7ygob{display:grid;place-items:center center;transition:transform .2s ease-in-out}.dropdown.svelte-w7ygob label.checked .icon.svelte-w7ygob{transform:rotate(90deg)}",
  map: null
};
let viewBox = "0 0 24 24";
const DropdownReveal = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let iconProps;
  let { id = "" } = $$props;
  let { labelText } = $$props;
  let { Icon = ChevronDown } = $$props;
  let { btnIconColor = "var(--c-gray-lighter)" } = $$props;
  let { btnIconColorTog = "var(--c-gray)" } = $$props;
  let { btnTextColor = "var(--c-gray-lighter)" } = $$props;
  let { btnTextColorTog = "var(--c-gray)" } = $$props;
  let { btnBgColor = "transparent" } = $$props;
  let { btnBgColorTog = "transparent" } = $$props;
  let { btnBorderColor = "transparent" } = $$props;
  let { btnBorderColorTog = "transparent" } = $$props;
  let { ddBorderColor = "transparent" } = $$props;
  let { ddBgColor = "var(--c-gray-darkest)" } = $$props;
  let { buttonSize = "24px" } = $$props;
  let { iconSize = "24px" } = $$props;
  const defaultVars = `--btnBgClr: ${btnBgColor};--btnBdrClr: ${btnBorderColor};--size: ${buttonSize};--btnTxtClr: ${btnTextColor};--ddBdrClr: ${ddBorderColor};--ddBgClr: ${ddBgColor};`;
  let checked = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.Icon === void 0 && $$bindings.Icon && Icon !== void 0)
    $$bindings.Icon(Icon);
  if ($$props.btnIconColor === void 0 && $$bindings.btnIconColor && btnIconColor !== void 0)
    $$bindings.btnIconColor(btnIconColor);
  if ($$props.btnIconColorTog === void 0 && $$bindings.btnIconColorTog && btnIconColorTog !== void 0)
    $$bindings.btnIconColorTog(btnIconColorTog);
  if ($$props.btnTextColor === void 0 && $$bindings.btnTextColor && btnTextColor !== void 0)
    $$bindings.btnTextColor(btnTextColor);
  if ($$props.btnTextColorTog === void 0 && $$bindings.btnTextColorTog && btnTextColorTog !== void 0)
    $$bindings.btnTextColorTog(btnTextColorTog);
  if ($$props.btnBgColor === void 0 && $$bindings.btnBgColor && btnBgColor !== void 0)
    $$bindings.btnBgColor(btnBgColor);
  if ($$props.btnBgColorTog === void 0 && $$bindings.btnBgColorTog && btnBgColorTog !== void 0)
    $$bindings.btnBgColorTog(btnBgColorTog);
  if ($$props.btnBorderColor === void 0 && $$bindings.btnBorderColor && btnBorderColor !== void 0)
    $$bindings.btnBorderColor(btnBorderColor);
  if ($$props.btnBorderColorTog === void 0 && $$bindings.btnBorderColorTog && btnBorderColorTog !== void 0)
    $$bindings.btnBorderColorTog(btnBorderColorTog);
  if ($$props.ddBorderColor === void 0 && $$bindings.ddBorderColor && ddBorderColor !== void 0)
    $$bindings.ddBorderColor(ddBorderColor);
  if ($$props.ddBgColor === void 0 && $$bindings.ddBgColor && ddBgColor !== void 0)
    $$bindings.ddBgColor(ddBgColor);
  if ($$props.buttonSize === void 0 && $$bindings.buttonSize && buttonSize !== void 0)
    $$bindings.buttonSize(buttonSize);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  $$result.css.add(css$l);
  iconProps = {
    width: iconSize,
    height: iconSize,
    size: iconSize,
    viewBox
  };
  return `<div class="${"dropdown svelte-w7ygob"}"${(0, import_index_b4d695ef.a)("style", defaultVars, 0)}><label class="${["svelte-w7ygob", ""].join(" ").trim()}"><input type="${"checkbox"}"${(0, import_index_b4d695ef.a)("id", id, 0)} class="${"svelte-w7ygob"}"${(0, import_index_b4d695ef.a)("checked", checked, 1)}>
		${labelText ? `<span class="${"text svelte-w7ygob"}">${(0, import_index_b4d695ef.e)(labelText)}</span>` : ``}
		<span class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)("icon")) + " svelte-w7ygob"}">${(0, import_index_b4d695ef.v)(Icon || import_index_b4d695ef.m, "svelte:component").$$render($$result, Object.assign(iconProps, {
    color: btnIconColor
  }), {}, {})}</span></label>
	${``}
</div>`;
});
const FilterDropdown = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { labelText = "No LabelText" } = $$props;
  let { id = "" } = $$props;
  let { ddBgColor = "var(--c-s-dark)" } = $$props;
  let staticProps = {
    btnIconColor: "var(--c-gray-lighter)",
    btnIconColorTog: "var(--c-gray)",
    btnTextColor: "var(--gray-lighter)",
    btnTextColorTog: "var(--c-s-dark)",
    btnBgColor: "var(--c-s-dark)",
    btnBgColorTog: "var(--c-s-lighter)",
    btnBorderColor: "var(--c-s-lighter)",
    btnBorderColorTog: "var(--c-s-lighter)",
    ddBorderColor: "var(--c-s-lighter)"
  };
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ddBgColor === void 0 && $$bindings.ddBgColor && ddBgColor !== void 0)
    $$bindings.ddBgColor(ddBgColor);
  return `${(0, import_index_b4d695ef.v)(DropdownReveal, "Dropdown").$$render($$result, Object.assign(staticProps, { labelText }, { id }, { ddBgColor }), {}, {
    content: () => `${slots.content ? slots.content({ slot: "content" }) : `
		<ul><li>No</li>
			<li>Content</li>
			<li>Provided</li>
			<li><br></li>
			<li>Hey there!</li>
			<li>Oof, our dev must have messed something up somewhere</li>
			<li>Please let him know:</li>
			<li><a href="${"mailto:jason@holtzen.rocks"}">Jason@Holtzen.Rocks</a></li></ul>
	`}`
  })}`;
});
const Eye = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var buttonShowAll_svelte_svelte_type_style_lang = "";
const css$k = {
  code: "button.svelte-33jqb6.svelte-33jqb6{align-items:center;background:var(--c-p-light);border:2px solid transparent;border-radius:5px;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-flow:row nowrap;font-size:15px;gap:.35rem;justify-content:center;letter-spacing:1.05;transition:background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out}@media(max-width:767px){button.svelte-33jqb6.svelte-33jqb6{justify-content:center;min-height:44px;min-width:44px}}button.svelte-33jqb6 .text.svelte-33jqb6{align-items:center;color:var(--c-gray-darkest);display:inline-flex;font-size:15px;letter-spacing:1.05}button.svelte-33jqb6 span.icon.svelte-33jqb6{display:inline-grid}button.svelte-33jqb6.svelte-33jqb6:hover{border-color:var(--c-p-lighter)}button.svelte-33jqb6.svelte-33jqb6:disabled{background:var(--c-gray-light);color:var(--c-gray-darker)}button.svelte-33jqb6.svelte-33jqb6:disabled:hover{border-color:transparent;cursor:not-allowed}",
  map: null
};
const ButtonShowAll = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { btnDisabled = true } = $$props;
  const iconProps = {
    width: "24px",
    height: "24px",
    size: "24px",
    viewBox: "0 0 24 24"
  };
  if ($$props.btnDisabled === void 0 && $$bindings.btnDisabled && btnDisabled !== void 0)
    $$bindings.btnDisabled(btnDisabled);
  $$result.css.add(css$k);
  return `<button ${btnDisabled ? "disabled" : ""} class="${"svelte-33jqb6"}"><span class="${"icon svelte-33jqb6"}">${(0, import_index_b4d695ef.v)(Eye, "BtnIcon").$$render($$result, Object.assign(iconProps, { color: "var(--c-gray-lighter)" }), {}, {})}</span>
	<span class="${"text svelte-33jqb6"}">${slots.default ? slots.default({}) : ``}</span>
</button>`;
});
var action1_svelte_svelte_type_style_lang = "";
const css$j = {
  code: "svg.svelte-15c05ou.svelte-15c05ou{height:24px;width:24px}svg.svelte-15c05ou path.svelte-15c05ou,svg.svelte-15c05ou rect.svelte-15c05ou{fill:var(--c-gray-lighter);stop-color:#000}",
  map: null
};
const Action1 = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$j);
  return `<svg width="${"48"}" height="${"48"}" version="${"1.1"}" viewBox="${"0 0 12.7 12.7"}" class="${"svelte-15c05ou"}"><path transform="${"scale(.26458)"}" d="${"m24 4-10 10 10 10-10 10 10 10 20-20z"}" class="${"svelte-15c05ou"}"></path><rect transform="${"rotate(45)"}" x="${"5.2385"}" y="${".37418"}" width="${"3.3676"}" height="${"3.3676"}" class="${"svelte-15c05ou"}"></rect></svg>`;
});
var action2_svelte_svelte_type_style_lang = "";
const css$i = {
  code: "svg.svelte-1335sd.svelte-1335sd{height:24px;width:33px}svg.svelte-1335sd path.svelte-1335sd,svg.svelte-1335sd rect.svelte-1335sd{fill:var(--c-gray-lighter);stop-color:transparent}",
  map: null
};
const Action2 = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$i);
  return `<svg width="${"66"}" height="${"48"}" version="${"1.1"}" viewBox="${"0 0 17.463 12.7"}" class="${"svelte-1335sd"}"><path d="${"m6.35 1.0583-2.6458 2.6458 2.6458 2.6458-2.6458 2.6458 2.6458 2.6458 5.2917-5.2917z"}" class="${"svelte-1335sd"}"></path><rect transform="${"rotate(45)"}" x="${"5.2385"}" y="${".37418"}" width="${"3.3676"}" height="${"3.3676"}" class="${"svelte-1335sd"}"></rect><path d="${"m12.171 2.1167-2.1167 2.1167 2.1167 2.1167-2.1167 2.1167 2.1167 2.1167 4.2333-4.2333z"}" class="${"svelte-1335sd"}"></path></svg>`;
});
var action3_svelte_svelte_type_style_lang = "";
const css$h = {
  code: "svg.svelte-dtv657.svelte-dtv657{height:24px;width:40px}svg.svelte-dtv657 path.svelte-dtv657,svg.svelte-dtv657 rect.svelte-dtv657{fill:var(--c-gray-lighter);stop-color:transparent}",
  map: null
};
const Action3 = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<svg width="${"80"}" height="${"48"}" version="${"1.1"}" viewBox="${"0 0 21.167 12.7"}" class="${"svelte-dtv657"}"><path d="${"m6.35 1.0583-2.6458 2.6458 2.6458 2.6458-2.6458 2.6458 2.6458 2.6458 5.2917-5.2917z"}" class="${"svelte-dtv657"}"></path><rect transform="${"rotate(45)"}" x="${"5.2385"}" y="${".37418"}" width="${"3.3676"}" height="${"3.3676"}" class="${"svelte-dtv657"}"></rect><path d="${"m12.171 2.1167-2.1167 2.1167 2.1167 2.1167-2.1167 2.1167 2.1167 2.1167 4.2333-4.2333z"}" class="${"svelte-dtv657"}"></path><path d="${"m16.933 3.175-1.5875 1.5875 1.5875 1.5875-1.5875 1.5875 1.5875 1.5875 3.175-3.175z"}" class="${"svelte-dtv657"}"></path></svg>`;
});
var reaction_svelte_svelte_type_style_lang = "";
const css$g = {
  code: "svg.svelte-1r17vel.svelte-1r17vel{height:24px;width:24px}svg.svelte-1r17vel path.svelte-1r17vel{fill:var(--c-gray-lighter);stop-color:transparent}",
  map: null
};
const Reaction = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$g);
  return `<svg width="${"48"}" height="${"48"}" version="${"1.1"}" viewBox="${"0 0 12.7 12.7"}" class="${"svelte-1r17vel"}"><path d="${"m6.7615 6.7569-4.5493 2.708 5.1595 1.0337c-1.2556-1.4439-1.0066-1.9733-0.6102-3.7418zm-0.8854-4.6707a5.0899 3.5462 0 0 0-4.9997 2.9073 4.026 2.7089 0 0 1 3.6504-1.5668 4.026 2.7089 0 0 1 4.0256 2.7089 4.026 2.7089 0 0 1-4.0256 2.7089 4.026 2.7089 0 0 1-1.0847-0.10025 5.0899 3.5462 0 0 0 2.4402 0.43408 5.0899 3.5462 0 0 0 5.0901-3.546 5.0899 3.5462 0 0 0-5.0901-3.546 5.0899 3.5462 0 0 0-0.0062 0z"}" class="${"svelte-1r17vel"}"></path></svg>`;
});
var free_svelte_svelte_type_style_lang = "";
const css$f = {
  code: "svg.svelte-5su14z.svelte-5su14z{fill:inherit;height:24px;width:24px}svg.svelte-5su14z #iconBackground.svelte-5su14z{fill:#fff}svg.svelte-5su14z #iconBigArea.svelte-5su14z,svg.svelte-5su14z #iconSmallArea.svelte-5su14z{fill:inherit}",
  map: null
};
const Free = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$f);
  return `<svg width="${"48"}" height="${"48"}" version="${"1.1"}" viewBox="${"0 0 12.7 12.7"}" class="${"svelte-5su14z"}"><rect transform="${"rotate(-45)"}" x="${"-3.7438"}" y="${"5.2385"}" width="${"7.4835"}" height="${"7.4835"}" id="${"iconBackground"}" style="${"paint-order:fill markers stroke;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.40898"}" class="${"svelte-5su14z"}"></rect><rect transform="${"rotate(-45)"}" id="${"iconSmallArea"}" x="${"-3.3689"}" y="${"5.6119"}" width="${"2.9934"}" height="${"2.9934"}" style="${"paint-order:fill markers stroke;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.16359"}" class="${"svelte-5su14z"}"></rect><path transform="${"scale(.26458)"}" d="${"m23.998 6-8.998 9.002 9 8.998-8.998 9.002 9.002 8.998 17.996-18.004-9-8.998h-0.001953l-9-8.998z"}" id="${"iconBigArea"}" style="${"paint-order:fill markers stroke;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.6956"}" class="${"svelte-5su14z"}"></path></svg>`;
});
const SpellAction = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  return `${action === "1" ? `${(0, import_index_b4d695ef.v)(Action1, "Action1").$$render($$result, {}, {}, {})}` : `${action === "2" ? `${(0, import_index_b4d695ef.v)(Action2, "Action2").$$render($$result, {}, {}, {})}` : `${action === "3" ? `${(0, import_index_b4d695ef.v)(Action3, "Action3").$$render($$result, {}, {}, {})}` : `${action === "reaction" ? `${(0, import_index_b4d695ef.v)(Reaction, "Reaction").$$render($$result, {}, {}, {})}` : `${(0, import_index_b4d695ef.v)(Free, "Free").$$render($$result, {}, {}, {})}`}`}`}`}`;
});
const const_actions = ["free", "1", "2", "3", "reaction"];
const const_traditions = ["arcane", "divine", "occult", "primal"];
const const_components = {
  full: [
    "10 minutes",
    "1 minute",
    "1 hour",
    "or",
    "material",
    "somatic",
    "verbal",
    "focus",
    "5 minutes"
  ],
  times: [
    "1 minute",
    "5 minutes",
    "10 minutes",
    "1 hour"
  ],
  requirements: [
    "verbal",
    "somatic",
    "material",
    "focus"
  ],
  separator: "or"
};
const const_traits = [
  { category: "alignment", traits: [
    "good",
    "evil",
    "chaotic"
  ] },
  { category: "classes", traits: [
    "bard",
    "champion",
    "cleric",
    "druid",
    "monk",
    "oracle",
    "ranger",
    "sorcerer",
    "witch",
    "wizard"
  ] },
  { category: "effect", traits: [
    "arcane",
    "cold",
    "consecration",
    "darkness",
    "death",
    "detection",
    "emotion",
    "extradimensional",
    "fear",
    "fire",
    "force",
    "fortune",
    "healing",
    "morph",
    "move",
    "poison",
    "air",
    "plant",
    "positive",
    "potion",
    "scrying",
    "sonic",
    "water",
    "earth",
    "negative",
    "teleportation",
    "disease",
    "misfortune",
    "acid",
    "divine",
    "possession",
    "polymorph",
    "incapacitation",
    "electricity",
    "mindless",
    "sleep",
    "prediction",
    "shadow",
    "curse",
    "light"
  ] },
  { category: "misc.", traits: [
    "archetype",
    "composition",
    "hex",
    "cantrip",
    "attack",
    "metamagic",
    "concentrate",
    "auditory",
    "visual",
    "humanoid",
    "mental",
    "stance",
    "litany",
    "nonlethal",
    "aura",
    "linguistic",
    "cursebound",
    "revelation",
    "fungus"
  ] },
  { category: "rarity", traits: [
    "uncommon",
    "rare"
  ] },
  { category: "school", traits: [
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illusion",
    "necromancy",
    "transmutation"
  ] }
];
var ddActions_svelte_svelte_type_style_lang = "";
const css$e = {
  code: "fieldset.svelte-48som7.svelte-48som7{display:flex;flex-flow:column nowrap;min-width:150px}@media(max-width:767px){fieldset.svelte-48som7.svelte-48som7{min-width:100%}}ul.svelte-48som7.svelte-48som7{align-items:flex-start;display:flex;flex-flow:row wrap;gap:.5rem;justify-content:flex-start}li.showAll.svelte-48som7.svelte-48som7{display:flex;justify-content:center;width:100%}@media(max-width:767px){li.showAll.svelte-48som7.svelte-48som7{justify-self:right;margin-left:auto;width:auto}}.text.svelte-48som7.svelte-48som7{align-items:center;color:var(--c-gray-darkest);display:inline-flex;font-size:15px;letter-spacing:1.05}input.svelte-48som7.svelte-48som7{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}input.svelte-48som7:checked+label.svelte-48som7{fill:var(--c-p);background-color:var(--c-p)}label.svelte-48som7.svelte-48som7{fill:var(--c-gray);background-color:var(--c-gray);border:2px solid transparent;border-radius:.25rem;display:grid;padding:.25rem;place-items:center center;transition:background-color .3s ease-in-out,border-color .3s ease-in-out,fill .3s ease-in-out}@media(max-width:767px){label.svelte-48som7.svelte-48som7{justify-content:center;min-height:44px;min-width:44px}}label.svelte-48som7.svelte-48som7:hover{border-color:var(--c-p-light)}",
  map: null
};
const DdActions = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let btnDisabled;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  let { labelText = "No label text" } = $$props;
  let { id = "actions" } = $$props;
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$e);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    btnDisabled = $filters.actions.length === 0;
    $$rendered = `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, { labelText, id }, {}, {
      content: () => `<fieldset slot="${"content"}" class="${"svelte-48som7"}"><legend>Show with any of</legend>
		<ul class="${"options svelte-48som7"}">${(0, import_index_b4d695ef.g)(const_actions, (act) => `<li class="${"action"}"><input type="${"checkbox"}" id="${"action" + (0, import_index_b4d695ef.e)(act)}"${(0, import_index_b4d695ef.a)("name", act, 0)}${(0, import_index_b4d695ef.a)("value", act, 0)} class="${"svelte-48som7"}"${~$filters.actions.indexOf(act) ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
					<label for="${"action" + (0, import_index_b4d695ef.e)(act)}" class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(act)) + " svelte-48som7"}">${(0, import_index_b4d695ef.v)(SpellAction, "SpellAction").$$render($$result, { action: act }, {}, {})}</label>
				</li>`)}
			<li class="${"showAll svelte-48som7"}">${(0, import_index_b4d695ef.v)(ButtonShowAll, "ButtonShowAll").$$render($$result, { btnDisabled }, {
        btnDisabled: ($$value) => {
          btnDisabled = $$value;
          $$settled = false;
        }
      }, { default: () => `Show All` })}</li></ul></fieldset>`
    })}`;
  } while (!$$settled);
  $$unsubscribe_filters();
  return $$rendered;
});
var ddComponents_svelte_svelte_type_style_lang = "";
const css$d = {
  code: "fieldset.svelte-1big96g.svelte-1big96g{display:flex;flex-flow:column nowrap;max-height:50vh;max-width:50vw;min-width:200px;position:relative;width:auto}@media(max-width:767px){fieldset.svelte-1big96g.svelte-1big96g{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;min-width:100%}}.header.svelte-1big96g.svelte-1big96g{align-items:center;background-color:var(--c-gray-darkest);display:flex;flex-flow:row nowrap;justify-content:space-between;padding-bottom:.5rem;position:-webkit-sticky;position:sticky;top:0}ul.categories.svelte-1big96g.svelte-1big96g{display:flex;flex-flow:column nowrap;gap:.5rem;justify-content:flex-start}h4.svelte-1big96g.svelte-1big96g{align-items:center;background-color:var(--c-s);border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:inline-flex;font-size:1rem;letter-spacing:.1rem;margin:0;max-width:unset;min-width:100%;padding:0 0 0 .5rem;text-transform:uppercase;width:100%}h4.svelte-1big96g.svelte-1big96g,ul.options.svelte-1big96g.svelte-1big96g{flex-flow:row nowrap;justify-content:flex-start}ul.options.svelte-1big96g.svelte-1big96g{align-items:flex-start;background-color:var(--c-s-lighter);border:2px solid var(--c-s);border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;display:flex;gap:.5rem;padding:.5rem}input.svelte-1big96g.svelte-1big96g{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}input.svelte-1big96g:checked+label.svelte-1big96g{fill:var(--c-p);background-color:var(--c-p)}label.svelte-1big96g.svelte-1big96g{fill:var(--c-gray);background-color:var(--c-gray);border:2px solid transparent;border-radius:.25rem;display:flex;flex-flow:row nowrap;font-size:.9rem;padding:0 .1rem;place-items:center center;transition:background-color .3s ease-in-out,border-color .3s ease-in-out,fill .3s ease-in-out;white-space:nowrap}label.svelte-1big96g.svelte-1big96g:hover{border-color:var(--c-p-light)}@media(max-width:767px){label.svelte-1big96g.svelte-1big96g{justify-content:center;min-height:44px;min-width:44px}}.showAll.svelte-1big96g.svelte-1big96g{display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.showAll.svelte-1big96g.svelte-1big96g,button.svelte-1big96g.svelte-1big96g{justify-content:center}button.svelte-1big96g.svelte-1big96g{align-items:center;background:var(--c-p-light);border:2px solid transparent;border-radius:5px;box-sizing:border-box;cursor:pointer;display:inline-flex;flex-flow:row nowrap;font-size:16px;gap:.35rem;letter-spacing:1.05;transition:background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out}@media(max-width:767px){button.svelte-1big96g.svelte-1big96g{justify-content:center;min-height:44px;min-width:44px}}button.svelte-1big96g .text.svelte-1big96g{align-items:center;color:var(--c-gray-darkest);display:inline-flex;font-size:15px;letter-spacing:1.05}button.svelte-1big96g span.icon.svelte-1big96g{display:inline-grid}button.svelte-1big96g.svelte-1big96g:hover{border-color:var(--c-p-lighter)}button.svelte-1big96g.svelte-1big96g:disabled{background:var(--c-gray-light);color:var(--c-gray-darker)}button.svelte-1big96g.svelte-1big96g:disabled:hover{border-color:transparent;cursor:not-allowed}",
  map: null
};
const DdComponents = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let btnDisabled;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  let { labelText = "Components" } = $$props;
  let { id = "Components" } = $$props;
  const iconProps = {
    width: "24px",
    height: "24px",
    size: "24px",
    viewBox: "0 0 24 24"
  };
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$d);
  btnDisabled = $filters.components.length === 0;
  $$unsubscribe_filters();
  return `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, {
    labelText,
    id,
    ddBgColor: "var(--c-s-dark)"
  }, {}, {
    content: () => `<fieldset slot="${"content"}" class="${"svelte-1big96g"}"><div class="${"header svelte-1big96g"}"><legend>Show spells matching all</legend>
			<div class="${"showAll svelte-1big96g"}"><button ${btnDisabled ? "disabled" : ""} class="${"svelte-1big96g"}"><span class="${"icon svelte-1big96g"}">${(0, import_index_b4d695ef.v)(Eye, "BtnIcon").$$render($$result, Object.assign(iconProps, { color: "var(--c-gray-lighter)" }), {}, {})}</span>
					<span class="${"text svelte-1big96g"}">Show All</span></button></div></div>
		<ul class="${"categories svelte-1big96g"}"><li><h4 class="${"svelte-1big96g"}">Cast times</h4>
				<ul class="${"options svelte-1big96g"}">${(0, import_index_b4d695ef.g)(const_components.times, (t) => `<li class="${"trait"}"><input type="${"checkbox"}" id="${"trait" + (0, import_index_b4d695ef.e)(t)}"${(0, import_index_b4d695ef.a)("name", t, 0)}${(0, import_index_b4d695ef.a)("value", t, 0)} class="${"svelte-1big96g"}"${~$filters.components.indexOf(t) ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
							<label for="${"trait" + (0, import_index_b4d695ef.e)(t)}" class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(t)) + " svelte-1big96g"}">${(0, import_index_b4d695ef.e)(t)}</label>
						</li>`)}</ul></li>
			<li><h4 class="${"svelte-1big96g"}">Cast requirements</h4>
				<ul class="${"options svelte-1big96g"}">${(0, import_index_b4d695ef.g)(const_components.requirements, (r) => `<li class="${"trait"}"><input type="${"checkbox"}" id="${"trait" + (0, import_index_b4d695ef.e)(r.replace(/\s+/g, ""))}"${(0, import_index_b4d695ef.a)("name", r.replace(/\s+/g, ""), 0)}${(0, import_index_b4d695ef.a)("value", r.replace(/\s+/g, ""), 0)} class="${"svelte-1big96g"}"${~$filters.components.indexOf(r.replace(/\s+/g, "")) ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
							<label for="${"trait" + (0, import_index_b4d695ef.e)(r.replace(/\s+/g, ""))}" class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(r)) + " svelte-1big96g"}">${(0, import_index_b4d695ef.e)(r)}</label>
						</li>`)}</ul></li></ul></fieldset>`
  })}`;
});
var removeFilterButton_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "button.svelte-1vqd2m2.svelte-1vqd2m2{align-items:center;background:var(--c-gray-lighter);border:2px solid var(--c-gray-darker);border-radius:.3rem;box-sizing:border-box;cursor:pointer;display:inline-flex;flex:0 1 auto;flex-flow:row nowrap;gap:5px;justify-content:space-between;outline:none;padding:.1rem .5rem;transition:background .2s ease-in-out,border-color .2s ease-in-out}button.svelte-1vqd2m2.svelte-1vqd2m2:hover{border-color:var(--c-p-light)}.text.svelte-1vqd2m2.svelte-1vqd2m2{color:var(--c-gray-darkest);display:inline;flex:1 1 auto;font-family:var(--font-normal);font-size:15px;letter-spacing:1.05;padding-left:.1em;text-align:left}.icon.svelte-1vqd2m2.svelte-1vqd2m2{align-self:flex-start;border-radius:50%;display:inline-grid;flex:0 0 20px;height:20px;place-items:center center;position:relative;width:20px}.icon.svelte-1vqd2m2 span.svelte-1vqd2m2{left:0;position:absolute;top:0}",
  map: null
};
const RemoveFilterButton = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_b4d695ef.h)();
  $$result.css.add(css$c);
  return `<button class="${"svelte-1vqd2m2"}"><span class="${"text svelte-1vqd2m2"}">${slots.buttonText ? slots.buttonText({}) : ``}</span>
	<span class="${"icon svelte-1vqd2m2"}">${`<span class="${"svelte-1vqd2m2"}">${slots.defaultIcon ? slots.defaultIcon({}) : `\xD7`}</span>`}</span>
</button>`;
});
const CloseCircle = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const CloseCircleOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const FilterRemove = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const FilterRemoveOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M14.73,20.83L17.58,18L14.73,15.17L16.15,13.76L19,16.57L21.8,13.76L23.22,15.17L20.41,18L23.22,20.83L21.8,22.24L19,19.4L16.15,22.24L14.73,20.83M13,19.88C13.04,20.18 12.94,20.5 12.71,20.71C12.32,21.1 11.69,21.1 11.3,20.71L7.29,16.7C7.06,16.47 6.96,16.16 7,15.87V10.75L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L13,10.75V19.88M5.04,5L9,10.06V15.58L11,17.58V10.05L14.96,5H5.04Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var filtersApplied_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "ul.svelte-1a77gl0.svelte-1a77gl0{align-items:flex-start;display:flex;flex-flow:row wrap;gap:5px;justify-content:flex-start;width:100%}@media(max-width:767px){ul.svelte-1a77gl0.svelte-1a77gl0{flex:1 1 auto;flex-flow:column nowrap}}ul.svelte-1a77gl0 li.svelte-1a77gl0{display:inline-flex;flex:0 0 auto;max-width:40%}@media(max-width:767px){ul.svelte-1a77gl0 li.svelte-1a77gl0{flex:1 0 100%;max-width:100%;width:100%}}",
  map: null
};
const FiltersApplied = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $appliedFilters, $$unsubscribe_appliedFilters;
  $$unsubscribe_appliedFilters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.e, (value) => $appliedFilters = value);
  const RemoveIconProps = {
    color: "var(--c-gray-dark)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  const removeIconHoverProps = {
    color: "var(--c-gray-dark)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  const clearIconProps = {
    color: "var(--c-p-dark)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  const clearIconHoverProps = {
    color: "var(--c-gray-dark)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  $$result.css.add(css$b);
  $$unsubscribe_appliedFilters();
  return `${$appliedFilters.length > 0 ? `<ul class="${"svelte-1a77gl0"}"><li class="${"svelte-1a77gl0"}">${(0, import_index_b4d695ef.v)(RemoveFilterButton, "RemoveFilterButton").$$render($$result, {}, {}, {
    hoveredIcon: () => `${(0, import_index_b4d695ef.v)(FilterRemove, "ClearAllHoverIcon").$$render($$result, Object.assign(clearIconHoverProps, { slot: "hoveredIcon" }), {}, {})}`,
    defaultIcon: () => `${(0, import_index_b4d695ef.v)(FilterRemoveOutline, "ClearAllIcon").$$render($$result, Object.assign(clearIconProps, { slot: "defaultIcon" }), {}, {})}`,
    buttonText: () => `Clear All`
  })}</li>
		${(0, import_index_b4d695ef.g)($appliedFilters, (_filter) => `<li class="${"svelte-1a77gl0"}">${(0, import_index_b4d695ef.v)(RemoveFilterButton, "RemoveFilterButton").$$render($$result, {}, {}, {
    hoveredIcon: () => `${(0, import_index_b4d695ef.v)(CloseCircle, "RemoveIconHover").$$render($$result, Object.assign(removeIconHoverProps, { slot: "hoveredIcon" }), {}, {})}`,
    defaultIcon: () => `${(0, import_index_b4d695ef.v)(CloseCircleOutline, "RemoveIcon").$$render($$result, Object.assign(RemoveIconProps, { slot: "defaultIcon" }), {}, {})}`,
    buttonText: () => `${(0, import_index_b4d695ef.e)((0, import_spellForm_f8ba31d6.g)(_filter))}
					`
  })}
			</li>`)}</ul>` : ``}`;
});
const ArrowDownThick = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var incrementer_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".wrapper.svelte-ru1cxg.svelte-ru1cxg{align-items:center;display:flex;flex-flow:row wrap;height:88px;justify-content:center;margin:0 auto;width:88px}.wrapper.svelte-ru1cxg input.svelte-ru1cxg{border:2px solid var(--c-p-light);border-bottom:1px;border-top-left-radius:44px;border-top-right-radius:44px;box-sizing:border-box;flex:1 1 100%;font-family:var(--font-normal);font-size:1.2rem;height:44px;text-align:center;transition:background-color .3s ease-in-out,border-color .3s ease-in-out,color .3s ease-in-out}.wrapper.svelte-ru1cxg input.svelte-ru1cxg:active,.wrapper.svelte-ru1cxg input.svelte-ru1cxg:focus{outline:none}.wrapper.svelte-ru1cxg input.svelte-ru1cxg:disabled{border-color:var(--c-gray);color:var(--c-s);cursor:not-allowed}.wrapper.svelte-ru1cxg button.svelte-ru1cxg{background:var(--c-p);border:2px solid var(--c-p-light);box-sizing:border-box;cursor:pointer;display:grid;flex:1 1 50%;height:44px;outline:none;place-items:center center;position:relative;transition:background-color .3s ease-in-out,border-color .3s ease-in-out,color .3s ease-in-out}.wrapper.svelte-ru1cxg button.svelte-ru1cxg:disabled{background:var(--c-gray-light);border-color:var(--c-gray);cursor:not-allowed}.wrapper.svelte-ru1cxg button.svelte-ru1cxg:first-of-type{border-bottom-left-radius:44px;border-right-width:1px}.wrapper.svelte-ru1cxg button.svelte-ru1cxg:first-of-type:disabled{border-right-color:var(--c-gray)}.wrapper.svelte-ru1cxg button:first-of-type span.icon.svelte-ru1cxg{right:0;top:0}.wrapper.svelte-ru1cxg button.svelte-ru1cxg:last-of-type{border-bottom-right-radius:44px;border-left-width:1px}.wrapper.svelte-ru1cxg button.svelte-ru1cxg:last-of-type:disabled{border-left-color:var(--c-gray)}.wrapper.svelte-ru1cxg button:last-of-type span.icon.svelte-ru1cxg{left:0;top:0}.wrapper.svelte-ru1cxg button span.icon.svelte-ru1cxg{display:grid;place-items:center center;position:absolute;z-index:1}.wrapper.svelte-ru1cxg button span.icon.blink.svelte-ru1cxg{z-index:100}.wrapper.svelte-ru1cxg button.plus span.icon.svelte-ru1cxg{transform:rotate(180deg)}input[type=number].svelte-ru1cxg.svelte-ru1cxg::-webkit-inner-spin-button{-webkit-appearance:none}",
  map: null
};
const Incrementer = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { placeholder } = $$props;
  let { number } = $$props;
  let { min } = $$props;
  let { max } = $$props;
  let { disabled = false } = $$props;
  const iconProps = {
    width: "36px",
    height: "70%",
    viewBox: "0 0 24 24"
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$a);
  return `<div class="${"wrapper svelte-ru1cxg"}"><input type="${"number"}"${(0, import_index_b4d695ef.a)("min", min, 0)}${(0, import_index_b4d695ef.a)("max", max, 0)} ${disabled ? "disabled" : ""}${(0, import_index_b4d695ef.a)("placeholder", placeholder, 0)}${(0, import_index_b4d695ef.a)("id", id, 0)}${(0, import_index_b4d695ef.a)("name", id, 0)} class="${"svelte-ru1cxg"}"${(0, import_index_b4d695ef.a)("value", number, 0)}>
	<button aria-label="${"decrement " + (0, import_index_b4d695ef.e)(placeholder)}" class="${"minus svelte-ru1cxg"}" ${disabled || number === min ? "disabled" : ""}><span class="${"icon svelte-ru1cxg"}">${(0, import_index_b4d695ef.v)(ArrowDownThick, "Arrow").$$render($$result, Object.assign(iconProps, { color: "var(--c-gray-lighter" }), {}, {})}</span>
		${``}</button>

	<button aria-label="${"increment " + (0, import_index_b4d695ef.e)(placeholder)}" class="${"plus svelte-ru1cxg"}" ${disabled ? "disabled" : ""}><span class="${"icon svelte-ru1cxg"}">${(0, import_index_b4d695ef.v)(ArrowDownThick, "Arrow").$$render($$result, Object.assign(iconProps, { color: "var(--c-gray-lighter)" }), {}, {})}</span>
		${``}</button>
</div>`;
});
const LessThanOrEqual = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const GreaterThanOrEqual = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M6.5,2.27L20,10.14L6.5,18L5.5,16.27L16.03,10.14L5.5,4L6.5,2.27M20,20V22H5V20H20Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const Equal = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M19,10H5V8H19V10M19,16H5V14H19V16Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const Cancel = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var ddLevel_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "ul.svelte-1x0h6lp.svelte-1x0h6lp{display:flex;flex-flow:column nowrap;gap:10px}ul.svelte-1x0h6lp li.svelte-1x0h6lp{width:100%}fieldset.svelte-1x0h6lp.svelte-1x0h6lp{display:grid;gap:3px;grid-template-columns:repeat(2,minmax(44px,1fr));grid-template-rows:repeat(2,minmax(44px,1fr))}legend.svelte-1x0h6lp.svelte-1x0h6lp{font-weight:700;padding-bottom:.25em;white-space:nowrap}input[type=radio].svelte-1x0h6lp.svelte-1x0h6lp{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}input[type=radio].svelte-1x0h6lp+label.svelte-1x0h6lp{background-color:var(--c-gray-dark);border:2px solid transparent;border-radius:.5rem;cursor:pointer;display:grid;place-items:center center;transition:border-color .3s ease-in-out,background .3s ease-in-out}input[type=radio].svelte-1x0h6lp+label.cancel.svelte-1x0h6lp{background:var(--c-gray)}input[type=radio]+label.svelte-1x0h6lp .icon.svelte-1x0h6lp{display:grid;place-items:center center}input[type=radio].svelte-1x0h6lp:checked+label.svelte-1x0h6lp{background:var(--c-p);border-color:var(--c-p-light)}input[type=radio].svelte-1x0h6lp:checked+label.cancel.svelte-1x0h6lp{background:var(--c-gray-darker);border-color:var(--c-p-lighter)}.hidden.svelte-1x0h6lp.svelte-1x0h6lp{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}",
  map: null
};
const DdLevel = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  let { labelText = "No Label Text" } = $$props;
  let { id = "level" } = $$props;
  const iconButtonProps = {
    width: "24px",
    height: "24px",
    size: "24px",
    viewBox: "0 0 24 24"
  };
  const levelOptions = [
    { value: "<=", icon: LessThanOrEqual },
    { value: "=", icon: Equal },
    { value: ">=", icon: GreaterThanOrEqual }
  ];
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$9);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, { labelText, id }, {}, {
      content: () => `<ul class="${"svelte-1x0h6lp"}"><li class="${"svelte-1x0h6lp"}"><fieldset class="${"svelte-1x0h6lp"}"><legend class="${"svelte-1x0h6lp"}">Spell level is</legend>
					<input type="${"radio"}" name="${"notFiltered"}" id="${"notFiltered"}" ${!$filters.level.equality ? "checked" : ""} value="${""}" class="${"svelte-1x0h6lp"}"${$filters.level.equality === "" ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
					<label for="${"notFiltered"}" class="${"cancel svelte-1x0h6lp"}"><span class="${"icon svelte-1x0h6lp"}">${(0, import_index_b4d695ef.v)(Cancel || import_index_b4d695ef.m, "svelte:component").$$render($$result, Object.assign(iconButtonProps, { color: "var(--c-gray-light)" }), {}, {})}</span></label>

					${(0, import_index_b4d695ef.g)(levelOptions, (_opt) => `<input type="${"radio"}"${(0, import_index_b4d695ef.a)("value", _opt.value, 0)}${(0, import_index_b4d695ef.a)("id", _opt.value, 0)}${(0, import_index_b4d695ef.a)("name", _opt.value, 0)} ${$filters.level.equality === _opt.value ? "checked" : ""} class="${"svelte-1x0h6lp"}"${_opt.value === $filters.level.equality ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
						<label${(0, import_index_b4d695ef.a)("for", _opt.value, 0)} class="${"svelte-1x0h6lp"}"><span class="${"icon svelte-1x0h6lp"}">${(0, import_index_b4d695ef.v)(_opt.icon || import_index_b4d695ef.m, "svelte:component").$$render($$result, Object.assign(iconButtonProps, { color: "var(--c-gray-lighter)" }), {}, {})}</span>
						</label>`)}</fieldset></li>
			<li class="${"svelte-1x0h6lp"}"><label class="${"hidden svelte-1x0h6lp"}" for="${"levelNumber"}">Level number: </label>
				${(0, import_index_b4d695ef.v)(Incrementer, "Incrementer").$$render($$result, {
        id: "levelNumber",
        name: "levelNumber",
        min: "1",
        max: "10",
        placeholder: "level",
        disabled: !$filters.level.equality,
        number: $filters.level.number
      }, {
        number: ($$value) => {
          $filters.level.number = $$value;
          $$settled = false;
        }
      }, {})}</li></ul>`
    })}`;
  } while (!$$settled);
  $$unsubscribe_filters();
  return $$rendered;
});
var searchBar_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "label.svelte-obccrn{align-items:center;display:flex;flex-flow:row nowrap;font-weight:700;justify-content:stretch;letter-spacing:.5px}input.svelte-obccrn{background:var(--c-gray-lighter);border-radius:100px;color:var(--c-gray-darkest);font-size:16px;height:2.3rem;line-height:16px;margin-left:10px;min-height:30px;min-width:auto;padding:10px}@media(max-width:992px){input.svelte-obccrn{min-height:44px;min-width:44px}}input.svelte-obccrn::-moz-placeholder{color:var(--c-gray-light)}input.svelte-obccrn:-ms-input-placeholder{color:var(--c-gray-light)}input.svelte-obccrn::placeholder{color:var(--c-gray-light)}",
  map: null
};
const SearchBar = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  $$result.css.add(css$8);
  $$unsubscribe_filters();
  return `<label class="${"svelte-obccrn"}">Search
	<input type="${"text"}" placeholder="${"name or description"}" class="${"svelte-obccrn"}"${(0, import_index_b4d695ef.a)("value", $filters.search, 0)}>
</label>`;
});
const EyeOff = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var filterCheckButton_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "input.svelte-12gds7p.svelte-12gds7p{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}input.svelte-12gds7p+label.svelte-12gds7p{align-items:center;background:var(--c-p-light);border-radius:5px;cursor:pointer;display:inline-flex;flex-flow:row nowrap;gap:5px;justify-content:center;padding:.1rem .5rem;transition:background-color .3s ease-in-out,color .3s ease-in-out}@media(max-width:767px){input.svelte-12gds7p+label.svelte-12gds7p{justify-content:center;min-height:44px}}input.svelte-12gds7p+label.off.svelte-12gds7p{background:var(--c-gray-light);color:var(--c-gray-darker)}input+label.svelte-12gds7p .text.svelte-12gds7p{align-items:center;color:var(--c-gray-darkest);display:inline-flex;font-size:15px;letter-spacing:1.05}input+label.svelte-12gds7p .icon.svelte-12gds7p{display:inline-grid;height:20px;place-items:center center;position:relative;width:20px}input+label.svelte-12gds7p .icon span.svelte-12gds7p{left:0;position:absolute;top:0}",
  map: null
};
const FilterCheckButton = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let id;
  let { toggled = true } = $$props;
  let { text = "no text received" } = $$props;
  let hovered = false;
  const iconVisibleProps = {
    color: "var(--c-gray-lighter",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  const iconHiddenProps = {
    color: "var(--c-gray)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.iconVisibleProps === void 0 && $$bindings.iconVisibleProps && iconVisibleProps !== void 0)
    $$bindings.iconVisibleProps(iconVisibleProps);
  if ($$props.iconHiddenProps === void 0 && $$bindings.iconHiddenProps && iconHiddenProps !== void 0)
    $$bindings.iconHiddenProps(iconHiddenProps);
  $$result.css.add(css$7);
  id = text.replaceAll(" ", "");
  return `<input${(0, import_index_b4d695ef.a)("name", id, 0)}${(0, import_index_b4d695ef.a)("id", id, 0)} type="${"checkbox"}" class="${"svelte-12gds7p"}"${(0, import_index_b4d695ef.a)("checked", toggled, 1)}>
<label${(0, import_index_b4d695ef.a)("for", id, 0)} class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(toggled ? "on" : "off")) + " svelte-12gds7p"}"><span class="${"icon svelte-12gds7p"}">${toggled && hovered || !toggled && !hovered ? `<span class="${"svelte-12gds7p"}">${(0, import_index_b4d695ef.v)(EyeOff, "InactiveIcon").$$render($$result, Object.assign(iconHiddenProps), {}, {})}</span>` : `<span class="${"svelte-12gds7p"}">${(0, import_index_b4d695ef.v)(Eye, "ActiveIcon").$$render($$result, Object.assign(iconVisibleProps), {}, {})}</span>`}</span>
	<span class="${"text svelte-12gds7p"}">${(0, import_index_b4d695ef.e)(text)}</span>
</label>`;
});
var ddSources_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "ul.svelte-t5nnfi{align-items:flex-start;display:flex;flex-flow:row wrap;gap:.5rem;justify-content:flex-start}",
  map: null
};
const DdSources = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $filters, $$unsubscribe_filters;
  let $selectedCharacter, $$unsubscribe_selectedCharacter;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  $$unsubscribe_selectedCharacter = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.a, (value) => $selectedCharacter = value);
  let { labelText = "No Label Text" } = $$props;
  let { id = "sources" } = $$props;
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, { labelText, id }, {}, {
      content: () => `<ul slot="${"content"}" class="${"svelte-t5nnfi"}">${(0, import_index_b4d695ef.v)(FilterCheckButton, "FilterCheckbox").$$render($$result, {
        text: "Rulebook",
        toggled: $filters.showRulebook
      }, {
        toggled: ($$value) => {
          $filters.showRulebook = $$value;
          $$settled = false;
        }
      }, {})}
		${(0, import_index_b4d695ef.v)(FilterCheckButton, "FilterCheckbox").$$render($$result, {
        text: "Custom",
        toggled: $filters.showCustom
      }, {
        toggled: ($$value) => {
          $filters.showCustom = $$value;
          $$settled = false;
        }
      }, {})}
		${$selectedCharacter._id ? `${(0, import_index_b4d695ef.v)(FilterCheckButton, "FilterCheckbox").$$render($$result, {
        text: "Only " + $selectedCharacter.characterName + "'s",
        toggled: $filters.characterSpells.isolate
      }, {
        toggled: ($$value) => {
          $filters.characterSpells.isolate = $$value;
          $$settled = false;
        }
      }, {})}` : ``}</ul>`
    })}`;
  } while (!$$settled);
  $$unsubscribe_filters();
  $$unsubscribe_selectedCharacter();
  return $$rendered;
});
var ddTraits_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'fieldset.svelte-16le761.svelte-16le761.svelte-16le761{display:flex;flex-flow:column nowrap;max-height:50vh;max-width:50vw;min-width:200px;position:relative;width:50vw}@media(max-width:767px){fieldset.svelte-16le761.svelte-16le761.svelte-16le761{max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;min-width:100%}}.header.svelte-16le761.svelte-16le761.svelte-16le761{align-items:center;background-color:var(--c-gray-darkest);display:flex;flex-flow:row nowrap;justify-content:space-between;padding-bottom:.5rem;position:-webkit-sticky;position:sticky;top:0}.header.svelte-16le761.svelte-16le761.svelte-16le761:before{background:var(--c-gray-darkest);bottom:100%;content:"";height:.7rem;position:absolute;width:100%}ul.categories.svelte-16le761.svelte-16le761.svelte-16le761{display:flex;flex-flow:column nowrap;gap:.5rem}h4.svelte-16le761.svelte-16le761.svelte-16le761,ul.categories.svelte-16le761.svelte-16le761.svelte-16le761{justify-content:flex-start}h4.svelte-16le761.svelte-16le761.svelte-16le761{align-items:center;background-color:var(--c-s);border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:inline-flex;flex-flow:row nowrap;font-size:1rem;letter-spacing:.1rem;margin:0;padding:0 0 0 .5rem;text-transform:uppercase;width:100%}ul.options.svelte-16le761.svelte-16le761.svelte-16le761{align-items:flex-start;background-color:var(--c-s-lighter);border:2px solid var(--c-s);border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;display:flex;flex-flow:row wrap;gap:.5rem;justify-content:flex-start;padding:.5rem}ul.options.svelte-16le761 input.svelte-16le761.svelte-16le761{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}ul.options.svelte-16le761 input.svelte-16le761:checked+label.svelte-16le761{fill:var(--c-p);background-color:var(--c-p)}ul.options.svelte-16le761 label.svelte-16le761.svelte-16le761{fill:var(--c-gray);background-color:var(--c-gray);border:2px solid transparent;border-radius:.25rem;display:grid;font-size:.9rem;padding:0 .1rem;place-items:center center;transition:background-color .3s ease-in-out,border-color .3s ease-in-out,fill .3s ease-in-out}@media(max-width:767px){ul.options.svelte-16le761 label.svelte-16le761.svelte-16le761{justify-content:center;min-height:44px;min-width:44px;padding:0 .3rem}}ul.options.svelte-16le761 label.svelte-16le761.svelte-16le761:hover{border-color:var(--c-p-light)}',
  map: null
};
const DdTraits = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let btnDisabled;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  let { labelText = "Traits" } = $$props;
  let { id = "traits" } = $$props;
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    btnDisabled = $filters.traits.length === 0;
    $$rendered = `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, {
      labelText,
      id,
      ddBgColor: "var(--c-s-dark)"
    }, {}, {
      content: () => `<fieldset slot="${"content"}" class="${"svelte-16le761"}"><div class="${"header svelte-16le761"}"><legend>Show spells matching all</legend>
			${(0, import_index_b4d695ef.v)(ButtonShowAll, "ButtonShowAll").$$render($$result, { btnDisabled }, {
        btnDisabled: ($$value) => {
          btnDisabled = $$value;
          $$settled = false;
        }
      }, { default: () => `Show All` })}</div>
		<ul class="${"categories svelte-16le761"}">${(0, import_index_b4d695ef.g)(const_traits, (t) => `<li><h4 class="${"svelte-16le761"}">${(0, import_index_b4d695ef.e)(t.category)}</h4>
					<ul class="${"options svelte-16le761"}">${(0, import_index_b4d695ef.g)(t.traits.sort(), (t2) => `<li class="${"trait"}"><input type="${"checkbox"}" id="${"trait" + (0, import_index_b4d695ef.e)(t2)}"${(0, import_index_b4d695ef.a)("name", t2, 0)}${(0, import_index_b4d695ef.a)("value", t2, 0)} class="${"svelte-16le761"}"${~$filters.traits.indexOf(t2) ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
								<label for="${"trait" + (0, import_index_b4d695ef.e)(t2)}" class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(t2)) + " svelte-16le761"}">${(0, import_index_b4d695ef.e)(t2)}</label>
							</li>`)}</ul>
				</li>`)}</ul></fieldset>`
    })}`;
  } while (!$$settled);
  $$unsubscribe_filters();
  return $$rendered;
});
var ddTraditions_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "fieldset.svelte-rbogao.svelte-rbogao{display:flex;flex-flow:row wrap;gap:.5rem;justify-content:center}legend.svelte-rbogao.svelte-rbogao{white-space:nowrap}div.buttonContainer.svelte-rbogao.svelte-rbogao{display:flex;flex-flow:row nowrap;justify-content:center;width:100%}label.svelte-rbogao.svelte-rbogao{background-color:var(--c-gray-darker);border:2px solid var(--tColor);border-radius:.3rem;box-sizing:border-box;color:var(--tColor);padding:.1rem .2rem;transition:color .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;transition:text-decoration .2s ease-in-out,color .2s ease-in-out,background-color .2s ease-in-out;transition:text-decoration .2s ease-in-out,color .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out}label.svelte-rbogao.svelte-rbogao:hover{text-decoration:underline}@media(max-width:992px){label.svelte-rbogao.svelte-rbogao{height:44px;min-height:44px;min-width:44px;padding:.2rem .4rem}}input.svelte-rbogao.svelte-rbogao{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}input.svelte-rbogao:checked+label.svelte-rbogao{background-color:var(--tColor);color:var(--c-gray-darker)}",
  map: null
};
const DdTraditions = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let btnDisabled;
  let $filters, $$unsubscribe_filters;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  let { labelText = "Traditions" } = $$props;
  let { id = "traditions" } = $$props;
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    btnDisabled = $filters.traditions.length === 0;
    $$rendered = `${(0, import_index_b4d695ef.v)(FilterDropdown, "FilterDropdown").$$render($$result, {
      labelText,
      id,
      ddBgColor: "var(--c-s-dark)"
    }, {}, {
      content: () => `<fieldset slot="${"content"}" class="${"svelte-rbogao"}"><legend class="${"svelte-rbogao"}">Show matching all</legend>
		<div class="${"buttonContainer svelte-rbogao"}">${(0, import_index_b4d695ef.v)(ButtonShowAll, "ButtonShowAll").$$render($$result, { btnDisabled }, {
        btnDisabled: ($$value) => {
          btnDisabled = $$value;
          $$settled = false;
        }
      }, { default: () => `Show All` })}</div>
		${(0, import_index_b4d695ef.g)(const_traditions, (t) => `<div><input${(0, import_index_b4d695ef.a)("id", t, 0)} type="${"checkbox"}"${(0, import_index_b4d695ef.a)("value", t, 0)} class="${"svelte-rbogao"}"${~$filters.traditions.indexOf(t) ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
				<label style="${"--tColor: var(--" + (0, import_index_b4d695ef.e)(t) + ")"}"${(0, import_index_b4d695ef.a)("for", t, 0)} class="${"svelte-rbogao"}">${(0, import_index_b4d695ef.e)(t)}</label>
			</div>`)}</fieldset>`
    })}`;
  } while (!$$settled);
  $$unsubscribe_filters();
  return $$rendered;
});
const FilterMenu = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var filterBar2_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "menu.svelte-lifcd6.svelte-lifcd6{align-items:flex-start;background:var(--c-gray-darker);border-radius:var(--bdrs);color:var(--c-gray-lighter);display:flex;flex:0 0 auto;flex-flow:row wrap;grid-column:1/-1;grid-row:2/2;justify-content:flex-start;padding:.5rem .75rem;z-index:10}@media(max-width:992px){menu.svelte-lifcd6.svelte-lifcd6{flex-flow:column nowrap}}@media(max-width:767px){menu.svelte-lifcd6.svelte-lifcd6{flex-flow:column nowrap;overflow:auto}}.filterHeader.svelte-lifcd6.svelte-lifcd6{align-items:center;display:flex;flex-flow:row nowrap;gap:1rem;justify-content:flex-start;width:100%}@media(max-width:992px){.filterHeader.svelte-lifcd6.svelte-lifcd6{align-items:flex-start;flex-flow:row wrap;gap:1rem;justify-content:space-between}}.appliedfilters.svelte-lifcd6.svelte-lifcd6{align-self:center;display:flex;flex:1 1 auto;flex-flow:row nowrap;gap:.5rem}@media(max-width:992px){.appliedfilters.svelte-lifcd6.svelte-lifcd6{align-self:flex-start;flex-flow:column nowrap;justify-self:center}}@media(max-width:650px){.appliedfilters.svelte-lifcd6.svelte-lifcd6{border-top:2px solid var(--c-gray-light);flex:1 1 100%;order:3;padding-top:.5rem}}h2.svelte-lifcd6.svelte-lifcd6{align-self:center;display:inline-flex;flex:0 0 auto;gap:5px;margin:0;padding:0;text-align:center}@media(max-width:992px){h2.svelte-lifcd6.svelte-lifcd6{align-self:flex-start;width:100%}}.search.svelte-lifcd6.svelte-lifcd6{align-self:top;display:flex;flex:0 0 auto;flex-flow:row nowrap;justify-content:flex-end;justify-self:flex-end}@media(max-width:767px){.search.svelte-lifcd6.svelte-lifcd6{justify-content:flex-start;width:auto}}@media(max-width:650px){.search.svelte-lifcd6.svelte-lifcd6{order:2}}button.iconButton.svelte-lifcd6.svelte-lifcd6{border:none;border-radius:100px;box-sizing:border-box;cursor:pointer;display:grid;font-size:1rem;outline:none;place-items:center center;position:relative;transition:border-color .3s ease-in-out}button.iconButton.filter.svelte-lifcd6.svelte-lifcd6{align-self:center;background-color:var(--c-s-light);border:2px solid transparent;border-radius:36px;color:#fff;flex:0 0 36px;height:36px;width:36px}button.iconButton.filter.svelte-lifcd6.svelte-lifcd6:hover{border-color:var(--c-s-lighter)}@media(max-width:992px){button.iconButton.filter.svelte-lifcd6.svelte-lifcd6{align-self:flex-start}}button.iconButton.chevron.svelte-lifcd6.svelte-lifcd6{align-self:center;background:var(--c-gray);border:2px solid var(--c-p);display:grid;flex:0 0 26px;height:26px;opacity:1;place-items:center center;transition:transform .2s ease-in-out,opacity .2s ease-in-out;width:26px}button.iconButton.chevron.svelte-lifcd6.svelte-lifcd6:disabled{border:2px solid transparent;opacity:0}button.iconButton.chevron.rotate.svelte-lifcd6.svelte-lifcd6{border:2px solid transparent;transform:rotate(-90deg)}button.iconButton.svelte-lifcd6 span.svelte-lifcd6{display:grid;height:100%;left:0;place-items:center center;position:absolute;top:0;width:100%}button.iconButton.svelte-lifcd6.svelte-lifcd6:only-child{align-self:center}hr.svelte-lifcd6.svelte-lifcd6{border:1px solid var(--c-s-light);display:block;margin:.6rem 0;width:100%}.filterBox.svelte-lifcd6.svelte-lifcd6{align-items:flex-start;display:flex;flex:1 1 auto;flex-flow:row wrap;gap:10px;justify-content:flex-start}@media(max-width:767px){.filterBox.svelte-lifcd6.svelte-lifcd6{flex-flow:column nowrap;width:100%}}.separator.svelte-lifcd6.svelte-lifcd6{border:1px solid var(--c-gray-light);display:block;height:20px;margin:auto 0}@media(max-width:767px){.separator.svelte-lifcd6.svelte-lifcd6{height:auto;margin:0 auto;width:90%}}",
  map: null
};
const FilterBar2 = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let filtersActive;
  let $filters, $$unsubscribe_filters;
  let $selectedCharacter, $$unsubscribe_selectedCharacter;
  let $appliedFilters, $$unsubscribe_appliedFilters;
  let $user, $$unsubscribe_user;
  $$unsubscribe_filters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.f, (value) => $filters = value);
  $$unsubscribe_selectedCharacter = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.a, (value) => $selectedCharacter = value);
  $$unsubscribe_appliedFilters = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.e, (value) => $appliedFilters = value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => $user = value);
  const iconButtonProps = {
    color: "#fff",
    width: "22px",
    height: "22px",
    size: "22px",
    viewBox: "0 0 24 24"
  };
  let appliedOpen = true;
  let previousFilterLength = 0;
  $$result.css.add(css$3);
  filtersActive = $appliedFilters.length > 0;
  {
    {
      if (previousFilterLength === 0 && filtersActive) {
        appliedOpen = true;
      }
      previousFilterLength = $appliedFilters.length;
    }
  }
  {
    {
      if ($filters.characterSpells.isolate && ($selectedCharacter == null ? void 0 : $selectedCharacter._id)) {
        (0, import_index_b4d695ef.j)(import_spellForm_f8ba31d6.f, $filters.characterSpells.spellbook = [...$selectedCharacter.spellbook], $filters);
      } else {
        (0, import_index_b4d695ef.j)(import_spellForm_f8ba31d6.f, $filters.characterSpells.spellbook = [], $filters);
      }
    }
  }
  $$unsubscribe_filters();
  $$unsubscribe_selectedCharacter();
  $$unsubscribe_appliedFilters();
  $$unsubscribe_user();
  return `<menu class="${"svelte-lifcd6"}"><div class="${"filterHeader svelte-lifcd6"}"><button class="${"iconButton filter svelte-lifcd6"}">${`<span class="${"svelte-lifcd6"}">${(0, import_index_b4d695ef.v)(FilterMenu, "FilterMenuIcon").$$render($$result, Object.assign(iconButtonProps), {}, {})}</span>`}</button>
		<div class="${"appliedfilters svelte-lifcd6"}"><h2 class="${"svelte-lifcd6"}">Spell Filters
				<button class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(appliedOpen ? "iconButton chevron rotate" : "iconButton chevron")) + " svelte-lifcd6"}" ${!filtersActive ? "disabled" : ""}><span class="${"svelte-lifcd6"}">${(0, import_index_b4d695ef.v)(ChevronDown, "ExpandIcon").$$render($$result, Object.assign(iconButtonProps), {}, {})}</span></button></h2>
			${appliedOpen ? `${(0, import_index_b4d695ef.v)(FiltersApplied, "FiltersApplied").$$render($$result, {}, {}, {})}` : ``}</div>
		<div class="${"search svelte-lifcd6"}">${(0, import_index_b4d695ef.v)(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}</div></div>
	${`<hr class="${"svelte-lifcd6"}">
		<div class="${"filterBox svelte-lifcd6"}">${($user == null ? void 0 : $user._id) !== "" ? `${(0, import_index_b4d695ef.v)(DdSources, "SourcesDD").$$render($$result, { labelText: "Sources" }, {}, {})}
				<span class="${"separator svelte-lifcd6"}"></span>` : ``}
			${(0, import_index_b4d695ef.v)(DdActions, "ActionsDD").$$render($$result, { labelText: "Actions" }, {}, {})}
			${(0, import_index_b4d695ef.v)(DdComponents, "ComponentsDD").$$render($$result, { labelText: "Components" }, {}, {})}
			${(0, import_index_b4d695ef.v)(DdLevel, "LevelDD").$$render($$result, { labelText: "Spell Level" }, {}, {})}
			${(0, import_index_b4d695ef.v)(DdTraditions, "TraditionsDD").$$render($$result, { labelText: "Traditions" }, {}, {})}
			${(0, import_index_b4d695ef.v)(DdTraits, "TraitsDD").$$render($$result, { labelText: "Traits" }, {}, {})}</div>`}
</menu>`;
});
var flexSlider_svelte_svelte_type_style_lang = "";
var spellEditModal_svelte_svelte_type_style_lang = "";
var spellSelector_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "aside.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{align-items:flex-start;background:var(--c-gray-dark);border-radius:var(--bdrs);display:flex;flex-flow:column nowrap;grid-column:1/1;grid-row:3/-1;height:auto;justify-content:flex-start;max-height:100%;overflow-x:hidden;overflow-y:auto;padding:10px;z-index:0}aside.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3::-webkit-scrollbar{padding-bottom:1rem;padding-top:1rem;scroll-behavior:smooth!important;width:1rem}aside.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--c-p-light);border:3px solid transparent;border-radius:.5rem!important;box-sizing:border-box;min-height:44px}aside.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3::-webkit-scrollbar-track{background-color:var(--c-gray-dark)!important;border-radius:.5rem;box-shadow:inset 0 0 .4rem var(--c-gray-lighter)!important}@media(max-width:992px){aside.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{overflow:unset}aside.hideMobile.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}ul.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{position:relative;width:100%}li.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{font-family:inherit;font-size:inherit;margin-bottom:5px}li.svelte-i3ruo3 sup.svelte-i3ruo3.svelte-i3ruo3{color:var(--c-p-lighter);font-size:small;text-transform:lowercase;vertical-align:super}li.stickyButtonContainer.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{font-weight:900;position:-webkit-sticky;position:sticky;top:0;z-index:3}button.newSpellButton.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{align-items:center;background:var(--c-s-lighter);border:2px solid transparent;border-radius:var(--bdrs);color:var(--c-s-dark);cursor:pointer;display:flex;flex-flow:row nowrap;font-family:inherit;font-size:inherit;justify-content:flex-start;min-height:40px;padding:10px 5px;width:100%}button.newSpellButton.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3:hover{border-color:var(--c-gray-lighter)}label.svelte-i3ruo3.svelte-i3ruo3.svelte-i3ruo3{cursor:pointer;padding-bottom:3px;position:relative;width:100%}label.svelte-i3ruo3 input[type=radio].svelte-i3ruo3.svelte-i3ruo3{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}label.svelte-i3ruo3 input[type=radio].svelte-i3ruo3:checked+div.svelte-i3ruo3{background:var(--c-s-dark)}label.svelte-i3ruo3 div.svelte-i3ruo3.svelte-i3ruo3{background:rgba(0,0,0,.1);border:2px solid transparent;border-radius:var(--bdrs);box-sizing:border-box;color:var(--c-gray-lighter);display:flex;flex-flow:row nowrap;justify-content:space-between;min-height:40px;padding:10px 5px;transition:border-color .3s ease-in-out}label.svelte-i3ruo3 div.svelte-i3ruo3.svelte-i3ruo3:hover{border-color:var(--c-s-lighter)}label.svelte-i3ruo3 div span.svelte-i3ruo3.svelte-i3ruo3:last-of-type{flex:0 0 35px;margin-right:5px;text-align:right}",
  map: null
};
const SpellSelector = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let hideMobile;
  let $selectedSpell, $$unsubscribe_selectedSpell;
  let $$unsubscribe_modal;
  let $user, $$unsubscribe_user;
  let $filteredSpells, $$unsubscribe_filteredSpells;
  $$unsubscribe_selectedSpell = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.h, (value) => $selectedSpell = value);
  $$unsubscribe_modal = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.m, (value) => value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => $user = value);
  $$unsubscribe_filteredSpells = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.i, (value) => $filteredSpells = value);
  $$result.css.add(css$2);
  hideMobile = Object.keys($selectedSpell).length > 0;
  $$unsubscribe_selectedSpell();
  $$unsubscribe_modal();
  $$unsubscribe_user();
  $$unsubscribe_filteredSpells();
  return `<aside class="${["svelte-i3ruo3", hideMobile ? "hideMobile" : ""].join(" ").trim()}"><ul class="${"svelte-i3ruo3"}">${($user == null ? void 0 : $user.name) ? `<li class="${"stickyButtonContainer svelte-i3ruo3"}"><button class="${"newSpellButton svelte-i3ruo3"}">New Custom Spell
				</button></li>
			<li aria-hidden class="${"svelte-i3ruo3"}"></li>` : ``}
		${!$filteredSpells ? `<li class="${"svelte-i3ruo3"}"><label for="${"noop"}" class="${"svelte-i3ruo3"}"><input type="${"radio"}" name="${"noop"}" value="${"null"}" class="${"svelte-i3ruo3"}">
					<div class="${"svelte-i3ruo3"}"><span class="${"svelte-i3ruo3"}">No spell data</span>
						<span class="${"svelte-i3ruo3"}">...waiting</span></div></label></li>` : `${(0, import_index_b4d695ef.g)($filteredSpells, (_spell) => `<li class="${"svelte-i3ruo3"}"><label${(0, import_index_b4d695ef.a)("for", _spell.id, 0)} class="${"svelte-i3ruo3"}"><input type="${"radio"}"${(0, import_index_b4d695ef.a)("name", _spell.id, 0)}${(0, import_index_b4d695ef.a)("value", _spell, 0)} class="${"svelte-i3ruo3"}"${_spell === $selectedSpell ? (0, import_index_b4d695ef.a)("checked", true, 1) : ""}>
						<div class="${"svelte-i3ruo3"}"><span class="${"svelte-i3ruo3"}">${(0, import_index_b4d695ef.e)(_spell.name)}
								${_spell.custom ? `<sup class="${"svelte-i3ruo3"}">custom</sup>` : ``}</span>
							<span class="${"typeInfo svelte-i3ruo3"}">${(0, import_index_b4d695ef.e)(_spell.type ? _spell.type.charAt(0).toLowerCase() : "")}-${(0, import_index_b4d695ef.e)(_spell.level)}</span>
						</div></label>
				</li>`)}`}</ul>
</aside>`;
});
const ApplicationImport = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M1,12H10.76L8.26,9.5L9.67,8.08L14.59,13L9.67,17.92L8.26,16.5L10.76,14H1V12M19,3C20.11,3 21,3.9 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V16H5V19H19V7H5V10H3V5A2,2 0 0,1 5,3H19Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const SquareEditOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var spellDetails_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "strong.svelte-1xnbngb.svelte-1xnbngb{font-weight:700}hr.svelte-1xnbngb.svelte-1xnbngb{background-color:var(--c-p);border:none;height:1px}.closeButton.svelte-1xnbngb.svelte-1xnbngb{background:var(--c-gray-darkest);border:2px solid var(--c-gray-light);border-radius:50%;color:#fff;display:grid;height:44px;outline:none;place-items:center;position:absolute;right:10px;top:10px;transition:all .2s ease-in-out;width:44px;z-index:9999}.closeButton.svelte-1xnbngb.svelte-1xnbngb:hover{box-shadow:0 5px 3px var(--c-s-light);transform:translateY(-3px)}.headerRow.svelte-1xnbngb.svelte-1xnbngb{align-items:center;display:flex;flex-flow:row wrap;gap:15px;justify-content:flex-start;margin:0;text-transform:uppercase}.headerRow.svelte-1xnbngb h2.svelte-1xnbngb{flex:0 1 auto;margin:0;order:2}.headerRow.svelte-1xnbngb h2 sup.svelte-1xnbngb{color:var(--c-p-lighter)}.headerRow.svelte-1xnbngb .typeLevel.svelte-1xnbngb{flex:1 1 auto;font-size:18px;font-weight:700;order:2;text-transform:uppercase}.headerRow.svelte-1xnbngb .buttonGroup.svelte-1xnbngb{align-self:flex-end;display:flex;flex:1 1 auto;flex-flow:row wrap;gap:10px;justify-content:flex-end;justify-self:flex-end;order:2}@media(max-width:992px){.headerRow.svelte-1xnbngb .buttonGroup.svelte-1xnbngb{flex:0 0 100%;gap:20px;justify-content:center;order:1}}.headerRow.svelte-1xnbngb .buttonGroup button.svelte-1xnbngb{align-items:center;background:var(--c-s-light);border:none;border-radius:100px;box-sizing:border-box;color:var(--c-gray-lighter);display:flex;font-size:16px;justify-content:center;padding:5px 10px;text-align:center;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.headerRow.svelte-1xnbngb .buttonGroup button.svelte-1xnbngb:hover{box-shadow:0 5px 3px var(--c-gray-light);transform:translateY(-3px)}.headerRow.svelte-1xnbngb .buttonGroup button .text.svelte-1xnbngb{margin-left:5px}.headerRow.svelte-1xnbngb .buttonGroup button.edit.svelte-1xnbngb{align-self:flex-end;background:var(--c-s-lighter);color:var(--c-s-dark)}.headerRow.svelte-1xnbngb .buttonGroup button.delete.svelte-1xnbngb{background:var(--c-danger);color:var(--c-gray-lighter)}.spellProperty.svelte-1xnbngb.svelte-1xnbngb{fill:var(--c-gray-dark);align-items:center;flex-flow:row nowrap;margin-bottom:.2rem}.spellProperty.svelte-1xnbngb.svelte-1xnbngb,.traits.svelte-1xnbngb.svelte-1xnbngb{display:flex;justify-content:flex-start}.traits.svelte-1xnbngb.svelte-1xnbngb{flex-flow:row wrap;list-style-type:none;margin:0 0 .5em;max-width:500px;padding:0;width:100%}.traits.svelte-1xnbngb li.svelte-1xnbngb{background-color:darkred;border:2px solid var(--c-p-lighter);border-radius:4px;color:#fff;font-size:12px;font-weight:700;margin-right:1px;padding:0 5px;text-transform:uppercase}ul.traditions.svelte-1xnbngb.svelte-1xnbngb{display:flex;flex-flow:row wrap;width:100%}ul.traditions.svelte-1xnbngb li.svelte-1xnbngb{border-radius:4px;color:#fff;font-size:14px;margin-right:.2rem;padding:0 5px;text-transform:lowercase}p.svelte-1xnbngb.svelte-1xnbngb{white-space:pre-line}footer.svelte-1xnbngb.svelte-1xnbngb{display:flex;flex-flow:row nowrap;font-size:13px;justify-content:space-between;text-transform:lowercase}footer.svelte-1xnbngb .custom.svelte-1xnbngb{color:var(--c-p-lighter)}",
  map: null
};
const SpellDetails = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let md_description;
  let c_times;
  let c_reqs;
  let hasOr;
  let $$unsubscribe_selectedSpell;
  let $$unsubscribe_modal;
  let $user, $$unsubscribe_user;
  $$unsubscribe_selectedSpell = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.h, (value) => value);
  $$unsubscribe_modal = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.m, (value) => value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => $user = value);
  let { name = "" } = $$props;
  let { type = "" } = $$props;
  let { level = "" } = $$props;
  let { traits = [] } = $$props;
  let { action = [] } = $$props;
  let { range = "" } = $$props;
  let { area = "" } = $$props;
  let { duration = "" } = $$props;
  let { targets = "" } = $$props;
  let { description = "" } = $$props;
  let { source = "" } = $$props;
  let { savingThrow = "" } = $$props;
  let { components = [] } = $$props;
  let { traditions = [] } = $$props;
  let { custom = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.traits === void 0 && $$bindings.traits && traits !== void 0)
    $$bindings.traits(traits);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.area === void 0 && $$bindings.area && area !== void 0)
    $$bindings.area(area);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.targets === void 0 && $$bindings.targets && targets !== void 0)
    $$bindings.targets(targets);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.savingThrow === void 0 && $$bindings.savingThrow && savingThrow !== void 0)
    $$bindings.savingThrow(savingThrow);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.traditions === void 0 && $$bindings.traditions && traditions !== void 0)
    $$bindings.traditions(traditions);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    md_description = (0, import_marked.marked)(description);
    c_times = components.filter((c) => const_components.times.includes(c));
    c_reqs = components.filter((c) => const_components.requirements.includes(c));
    hasOr = components.includes("or") && c_reqs.length > 1;
    $$rendered = `



${``}
<div class="${"headerRow svelte-1xnbngb"}"><h2 class="${"svelte-1xnbngb"}">${(0, import_index_b4d695ef.e)(name)}${custom ? `<sup class="${"svelte-1xnbngb"}">**</sup>` : ``}</h2>
	<span class="${"typeLevel svelte-1xnbngb"}">${(0, import_index_b4d695ef.e)(type)}\xA0${(0, import_index_b4d695ef.e)(level)}</span>
	${!!$user.name ? `<div class="${"buttonGroup svelte-1xnbngb"}">${custom ? `<button class="${"edit svelte-1xnbngb"}">${(0, import_index_b4d695ef.v)(SquareEditOutline, "SpellEditExistingIcon").$$render($$result, {}, {}, {})}
					<span class="${"text svelte-1xnbngb"}">Edit</span></button>` : ``}
			<button class="${"copy svelte-1xnbngb"}">${(0, import_index_b4d695ef.v)(ApplicationImport, "SpellCopyEditIcon").$$render($$result, {}, {}, {})}
				<span class="${"text svelte-1xnbngb"}">Copy to Custom </span></button>
			${custom ? `<button class="${"delete svelte-1xnbngb"}">${(0, import_index_b4d695ef.v)(DeleteForeverOutline, "SpellDeleteIcon").$$render($$result, {}, {}, {})}
					<span class="${"text svelte-1xnbngb"}">Delete spell</span></button>` : ``}</div>` : ``}</div>
<hr class="${"svelte-1xnbngb"}">
${traits ? `<ul class="${"traits svelte-1xnbngb"}">${traits ? `${(0, import_index_b4d695ef.g)(traits, (_trait) => `<li${(0, import_index_b4d695ef.a)("name", _trait.toLowerCase(), 0)} class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(_trait.toLowerCase())) + " svelte-1xnbngb"}">${(0, import_index_b4d695ef.e)(_trait)}
				</li>`)}` : ``}</ul>` : ``}
${!!traditions && traditions.length > 0 ? `<span class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Traditions:\xA0</strong>
		<ul class="${"traditions svelte-1xnbngb"}">${(0, import_index_b4d695ef.g)(traditions, (_tradition) => `<li${(0, import_index_b4d695ef.a)("name", _tradition.toLowerCase(), 0)} class="${(0, import_index_b4d695ef.e)((0, import_index_b4d695ef.f)(_tradition.toLowerCase())) + " svelte-1xnbngb"}">${(0, import_index_b4d695ef.e)(_tradition)}
				</li>`)}</ul></span>` : ``}

${components || action || range || area || duration || targets || savingThrow ? `${!!components && components.length > 0 || !!action && action.length > 0 ? `<span class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Cast:\xA0</strong>
			${!!action && action.length > 0 ? `${(0, import_index_b4d695ef.g)(action, (item, index) => `${(0, import_index_b4d695ef.v)(SpellAction, "SpellAction").$$render($$result, { action: item }, {}, {})}
					${action.length === 2 && index !== action.length - 1 ? `\xA0to` : ``}
					\xA0`)}
				${action.length > 0 && c_times.length > 0 ? `to` : ``}` : ``}
			${c_times.length > 0 ? `${(0, import_index_b4d695ef.g)(c_times, (item) => `${(0, import_index_b4d695ef.e)(item)}`)}` : ``}
			${c_reqs.length > 0 ? `(
				${(0, import_index_b4d695ef.g)(c_reqs, (item, index) => `${(0, import_index_b4d695ef.e)(item)}${index < c_reqs.length - 1 ? `,` : ``}
					${index === c_reqs.length - 2 && hasOr ? `or\xA0` : ``}`)}
				)` : ``}</span>` : ``}
	${range || area || duration || targets || savingThrow ? `<ul>${range ? `<li class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Range:\xA0</strong>
					${(0, import_index_b4d695ef.e)(range)}</li>` : ``}
			${area ? `<li class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Area:\xA0</strong>
					${(0, import_index_b4d695ef.e)(area)}</li>` : ``}
			${duration ? `<li class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Duration:\xA0</strong>
					${(0, import_index_b4d695ef.e)(duration)}</li>` : ``}
			${targets ? `<li class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Targets:\xA0</strong>
					${(0, import_index_b4d695ef.e)(targets)}</li>` : ``}
			${savingThrow ? `<li class="${"spellProperty svelte-1xnbngb"}"><strong class="${"svelte-1xnbngb"}">Saving Throw:\xA0</strong>
					${(0, import_index_b4d695ef.e)(savingThrow)}</li>` : ``}</ul>` : ``}` : ``}
<hr class="${"svelte-1xnbngb"}">
<p class="${"svelte-1xnbngb"}"><!-- HTML_TAG_START -->${md_description}<!-- HTML_TAG_END --></p>
<footer class="${"svelte-1xnbngb"}">${custom ? `<span class="${"custom svelte-1xnbngb"}">** denotes a custom spell</span>` : ``}
	${source ? `<span class="${"source"}">${(0, import_index_b4d695ef.e)(source)}</span>` : ``}</footer>




`;
  } while (!$$settled);
  $$unsubscribe_selectedSpell();
  $$unsubscribe_modal();
  $$unsubscribe_user();
  return $$rendered;
});
const ArrowLeftThick = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const BookmarkPlusOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
const BookmarkMinusOutline = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox: viewBox2 = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox2 !== void 0)
    $$bindings.viewBox(viewBox2);
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox2, 0)}><path d="${"M9,11V9H15V11H9M19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17C18.11,3 19,3.9 19,5M17,5H7V18L12,15.82L17,18V5Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var spellViewer_svelte_svelte_type_style_lang = "";
const { Object: Object_1 } = import_index_b4d695ef.k;
const css = {
  code: "main.svelte-14a4wty.svelte-14a4wty{background:var(--c-gray-dark);border-radius:10px;color:var(--c-gray-lighter);grid-column:2/2;grid-row:3/-1;overflow-x:hidden;overflow-y:auto;padding:10px;position:relative}main.svelte-14a4wty.svelte-14a4wty::-webkit-scrollbar{padding-bottom:1rem;padding-top:1rem;scroll-behavior:smooth!important;width:1rem}main.svelte-14a4wty.svelte-14a4wty::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:var(--c-p-light);border:3px solid transparent;border-radius:.5rem!important;box-sizing:border-box;min-height:44px}main.svelte-14a4wty.svelte-14a4wty::-webkit-scrollbar-track{background-color:var(--c-gray-dark)!important;border-radius:.5rem;box-shadow:inset 0 0 .4rem var(--c-gray-lighter)!important}main.nospell.svelte-14a4wty.svelte-14a4wty{background:hsla(0,0%,96%,.1);display:grid;place-items:center}@media(max-width:767px){main.svelte-14a4wty.svelte-14a4wty{grid-column:1/-1;grid-row:3/-1;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow:auto}main.nospell.svelte-14a4wty.svelte-14a4wty{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}.controls.svelte-14a4wty.svelte-14a4wty{align-items:center;background:var(--c-s-lighter);border-radius:5px;color:var(--c-gray-darkest);display:flex;flex-flow:row nowrap;justify-content:space-between;margin-bottom:10px;padding:10px;position:relative}.message.svelte-14a4wty.svelte-14a4wty{color:var(--c-gray-lighter);font-size:20px;max-width:50%;text-align:center;width:300px}@media(max-width:767px){.message.svelte-14a4wty.svelte-14a4wty{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}}button.spellAddDelButton.svelte-14a4wty.svelte-14a4wty{background:var(--c-p-dark);background-image:linear-gradient(45deg,var(--c-s) 25%,var(--c-s-dark) 75%);border:none;border-radius:100px;box-sizing:content-box;color:#fff;display:flex;font-size:16px;justify-content:center;padding:7px 12px;text-align:center;text-transform:uppercase;transition:all .2s ease-in-out}button.spellAddDelButton.svelte-14a4wty.svelte-14a4wty:hover{box-shadow:0 5px 3px var(--c-s-light);transform:translateY(-2px)}button.spellAddDelButton.svelte-14a4wty .text.svelte-14a4wty{padding:2px 0 0 5px}.closeButton.svelte-14a4wty.svelte-14a4wty{background:var(--c-s-light);border:2px solid var(--c-gray-dark);border-radius:50%;color:#fff;display:grid;height:36px;margin-left:auto;outline:none;padding:0;place-items:center;transition:all .2s ease-in-out;width:36px}.closeButton.svelte-14a4wty.svelte-14a4wty:hover{box-shadow:0 5px 2px var(--c-gray-lighter);transform:translateY(-2px)}",
  map: null
};
const SpellViewer = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  let $selectedCharacter, $$unsubscribe_selectedCharacter;
  let $selectedSpell, $$unsubscribe_selectedSpell;
  let $user, $$unsubscribe_user;
  $$unsubscribe_selectedCharacter = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.a, (value) => $selectedCharacter = value);
  $$unsubscribe_selectedSpell = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.h, (value) => $selectedSpell = value);
  $$unsubscribe_user = (0, import_index_b4d695ef.b)(import_spellForm_f8ba31d6.u, (value) => $user = value);
  const arrowIconProps = {
    color: "var(--c-s-lighter)",
    width: "24px",
    height: "24px",
    size: "24px",
    viewBox: "0 0 24 24"
  };
  const addRemoveIconProps = {
    color: "var(--c-gray-lighter)",
    width: "20px",
    height: "20px",
    size: "20px",
    viewBox: "0 0 24 24"
  };
  $$result.css.add(css);
  $$unsubscribe_selectedCharacter();
  $$unsubscribe_selectedSpell();
  $$unsubscribe_user();
  return `${Object.keys($selectedSpell).length > 0 ? `<main class="${"svelte-14a4wty"}"><div class="${"controls svelte-14a4wty"}">${($selectedCharacter == null ? void 0 : $selectedCharacter.characterName) && ($selectedCharacter == null ? void 0 : $selectedCharacter._id) ? `${$selectedCharacter.spellbook.includes($selectedSpell._id) ? `<button aria-label="${"Remove spell from character"}" class="${"spellAddDelButton svelte-14a4wty"}">${(0, import_index_b4d695ef.v)(BookmarkMinusOutline, "RemoveSpellIcon").$$render($$result, Object_1.assign(addRemoveIconProps), {}, {})}
						<span class="${"text svelte-14a4wty"}">Remove from spellbook </span></button>` : `<button aria-label="${"Add spell to character"}" class="${"spellAddDelButton svelte-14a4wty"}">${(0, import_index_b4d695ef.v)(BookmarkPlusOutline, "AddSpellIcon").$$render($$result, Object_1.assign(addRemoveIconProps), {}, {})}
						<span class="${"text svelte-14a4wty"}">Add to spellbook </span></button>`}` : `<span>${!($user == null ? void 0 : $user.name) ? `Log in to save spells and create characters` : ``}</span>
				<span>${!!($user == null ? void 0 : $user.name) && !$selectedCharacter._id ? `Select a character to add spells to a spellbook.` : ``}</span>`}
			<button aria-label="${"close spell"}" class="${"closeButton svelte-14a4wty"}">${(0, import_index_b4d695ef.v)(import_spellForm_f8ba31d6.C, "CloseIcon").$$render($$result, Object_1.assign(addRemoveIconProps), {}, {})}</button></div>
		${(0, import_index_b4d695ef.v)(SpellDetails, "SpellDetails").$$render($$result, Object_1.assign($selectedSpell), {}, {})}</main>` : `<main class="${"nospell svelte-14a4wty"}"><div class="${"message svelte-14a4wty"}"><p class="${"xl"}">Well, that&#39;s bold, trying to cast a spell before you pick one.</p>
			<p class="${"xl"}">Try over there</p>
			${(0, import_index_b4d695ef.v)(ArrowLeftThick, "ArrowLeftThick").$$render($$result, Object_1.assign(arrowIconProps), {}, {})}</div></main>`}`;
});
const Routes = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_b4d695ef.v)(FilterBar2, "FilterBar2").$$render($$result, {}, {}, {})}
${(0, import_index_b4d695ef.v)(SpellSelector, "SpellSelector").$$render($$result, {}, {}, {})}
${(0, import_index_b4d695ef.v)(SpellViewer, "SpellViewer").$$render($$result, {}, {}, {})}`;
});
