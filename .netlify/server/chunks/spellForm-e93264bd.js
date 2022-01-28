var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
  C: () => Close,
  a: () => selectedCharacter,
  b: () => dataError,
  c: () => characters,
  d: () => derived,
  e: () => appliedFilters,
  f: () => filters,
  g: () => getUiFilterText,
  h: () => selectedSpell,
  i: () => filteredSpells,
  m: () => modal,
  s: () => staticLists,
  u: () => user,
  w: () => writable
});
var import_index_b4d695ef = __toModule(require("./index-b4d695ef.js"));
var import_CustomSpell_d270f8cd = __toModule(require("./CustomSpell-d270f8cd.js"));
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = import_index_b4d695ef.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_b4d695ef.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_b4d695ef.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_b4d695ef.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = import_index_b4d695ef.n;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = (0, import_index_b4d695ef.i)(result) ? result : import_index_b4d695ef.n;
      }
    };
    const unsubscribers = stores_array.map((store, i) => (0, import_index_b4d695ef.b)(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, import_index_b4d695ef.r)(unsubscribers);
      cleanup();
    };
  });
}
const initErrors = {
  visible: false,
  fatal: false,
  message: "",
  code: ""
};
const createDataErrorStore = () => {
  const { subscribe: subscribe2, set, update } = writable(initErrors);
  return {
    set,
    subscribe: subscribe2,
    show: (message) => {
      set(__spreadValues({}, initErrors));
      set({ visible: true, fatal: false, code: void 0, message });
    },
    hide: () => {
      update((n) => {
        n.visible = false;
        return n;
      });
    },
    showFatal: (message) => {
      set(__spreadValues({}, initErrors));
      set({ visible: true, fatal: true, code: void 0, message });
    },
    showFull: (message, code) => {
      set(__spreadValues({}, initErrors));
      set({ visible: true, fatal: true, message, code });
    },
    reset: () => {
      update((n) => {
        let _a = n, { visible } = _a, rest = __objRest(_a, ["visible"]);
        visible = false;
        return __spreadProps(__spreadValues({}, rest), { visible });
      });
    }
  };
};
const dataError = createDataErrorStore();
const user = writable({
  _id: "",
  name: "",
  email: "",
  date: ""
});
const Close = (0, import_index_b4d695ef.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${(0, import_index_b4d695ef.a)("width", width, 0)}${(0, import_index_b4d695ef.a)("height", height, 0)}${(0, import_index_b4d695ef.a)("viewBox", viewBox, 0)}><path d="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"${(0, import_index_b4d695ef.a)("fill", color, 0)}></path></svg>`;
});
var _staticLists = {
  spellTypes: ["Cantrip", "Focus", "Spell"],
  traitCategories: [
    {
      name: "abjuration",
      categories: ["School"]
    },
    {
      name: "conjuration",
      categories: ["School"]
    },
    {
      name: "sorcerer",
      categories: ["Class"]
    },
    {
      name: "detection",
      categories: ["Generic"]
    },
    {
      name: "cantrip",
      categories: ["Generic"]
    },
    {
      name: "positive",
      categories: ["Creature Type", "Energy", "Planar"]
    },
    {
      name: "bard",
      categories: ["Class"]
    },
    {
      name: "sonic",
      categories: ["Energy", "Monster"]
    },
    {
      name: "poison",
      categories: ["Poison"]
    },
    {
      name: "darkness",
      categories: ["Generic"]
    },
    {
      name: "archetype",
      categories: ["Generic"]
    },
    {
      name: "morph",
      categories: ["Generic"]
    },
    {
      name: "death",
      categories: ["Generic"]
    },
    {
      name: "cleric",
      categories: ["Class"]
    },
    {
      name: "healing",
      categories: ["Generic"]
    },
    {
      name: "scrying",
      categories: ["Generic"]
    },
    {
      name: "emotion",
      categories: ["Generic"]
    },
    {
      name: "witch",
      categories: ["Class"]
    },
    {
      name: "composition",
      categories: ["Class-Specific"]
    },
    {
      name: "good",
      categories: ["Alignment"]
    },
    {
      name: "move",
      categories: ["Generic"]
    },
    {
      name: "hex",
      categories: ["Class-Specific"]
    },
    {
      name: "enchantment",
      categories: ["School"]
    },
    {
      name: "air",
      categories: ["Elemental", "Monster", "Planar"]
    },
    {
      name: "uncommon",
      categories: ["Rarity"]
    },
    {
      name: "fire",
      categories: ["Elemental", "Energy", "Monster", "Planar"]
    },
    {
      name: "cold",
      categories: ["Energy", "Monster"]
    },
    {
      name: "illusion",
      categories: ["School"]
    },
    {
      name: "fear",
      categories: ["Generic"]
    },
    {
      name: "fortune",
      categories: ["Generic"]
    },
    {
      name: "arcane",
      categories: ["Tradition"]
    },
    {
      name: "oracle",
      categories: ["Class"]
    },
    {
      name: "evocation",
      categories: ["School"]
    },
    {
      name: "plant",
      categories: ["Creature Type"]
    },
    {
      name: "consecration",
      categories: ["Generic"]
    },
    {
      name: "force",
      categories: ["Energy"]
    },
    {
      name: "extradimensional",
      categories: ["Generic"]
    },
    {
      name: "potion",
      categories: ["Equipment"]
    },
    {
      name: "water",
      categories: ["Elemental", "Monster", "Planar"]
    },
    {
      name: "negative",
      categories: ["Creature Type", "Energy", "Planar"]
    },
    {
      name: "earth",
      categories: ["Elemental", "Monster", "Planar"]
    },
    {
      name: "teleportation",
      categories: ["Generic"]
    },
    {
      name: "disease",
      categories: ["Generic"]
    },
    {
      name: "auditory",
      categories: ["Sense"]
    },
    {
      name: "concentrate",
      categories: ["Generic"]
    },
    {
      name: "misfortune",
      categories: ["Generic"]
    },
    {
      name: "attack",
      categories: ["Generic"]
    },
    {
      name: "metamagic",
      categories: ["Generic"]
    },
    {
      name: "acid",
      categories: ["Energy", "Monster"]
    },
    {
      name: "champion",
      categories: ["Class"]
    },
    {
      name: "litany",
      categories: ["Class-Specific"]
    },
    {
      name: "transmutation",
      categories: ["School"]
    },
    {
      name: "fungus",
      categories: ["Creature Type"]
    },
    {
      name: "humanoid",
      categories: ["Creature Type"]
    },
    {
      name: "electricity",
      categories: ["Energy", "Monster"]
    },
    {
      name: "mindless",
      categories: ["Monster"]
    },
    {
      name: "evil",
      categories: ["Alignment"]
    },
    {
      name: "mental",
      categories: ["Generic"]
    },
    {
      name: "sleep",
      categories: ["Generic"]
    },
    {
      name: "prediction",
      categories: ["Generic"]
    },
    {
      name: "visual",
      categories: ["Sense"]
    },
    {
      name: "ranger",
      categories: ["Class"]
    },
    {
      name: "cursebound",
      categories: ["Class-Specific"]
    },
    {
      name: "shadow",
      categories: ["Planar"]
    },
    {
      name: "rare",
      categories: ["Rarity"]
    },
    {
      name: "curse",
      categories: ["Generic"]
    },
    {
      name: "light",
      categories: ["Generic"]
    },
    {
      name: "wizard",
      categories: ["Class"]
    },
    {
      name: "nonlethal",
      categories: ["Weapon"]
    },
    {
      name: "linguistic",
      categories: ["Generic"]
    },
    {
      name: "monk",
      categories: ["Class", "Weapon"]
    },
    {
      name: "revelation",
      categories: ["Generic"]
    },
    {
      name: "divine",
      categories: ["Tradition"]
    },
    {
      name: "possession",
      categories: ["Generic"]
    },
    {
      name: "aura",
      categories: ["Generic"]
    },
    {
      name: "chaotic",
      categories: ["Alignment"]
    },
    {
      name: "polymorph",
      categories: ["Generic"]
    },
    {
      name: "druid",
      categories: ["Class"]
    },
    {
      name: "divination",
      categories: ["School"]
    },
    {
      name: "stance",
      categories: ["Class-Specific"]
    },
    {
      name: "incapacitation",
      categories: ["Generic"]
    },
    {
      name: "necromancy",
      categories: ["School"]
    }
  ],
  traits: [
    "abjuration",
    "conjuration",
    "sorcerer",
    "detection",
    "cantrip",
    "positive",
    "bard",
    "sonic",
    "poison",
    "darkness",
    "archetype",
    "morph",
    "death",
    "cleric",
    "healing",
    "scrying",
    "emotion",
    "witch",
    "composition",
    "good",
    "move",
    "hex",
    "enchantment",
    "air",
    "uncommon",
    "fire",
    "cold",
    "illusion",
    "fear",
    "fortune",
    "arcane",
    "oracle",
    "evocation",
    "plant",
    "consecration",
    "force",
    "extradimensional",
    "potion",
    "water",
    "negative",
    "earth",
    "teleportation",
    "disease",
    "auditory",
    "concentrate",
    "misfortune",
    "attack",
    "metamagic",
    "acid",
    "champion",
    "litany",
    "transmutation",
    "fungus",
    "humanoid",
    "electricity",
    "mindless",
    "evil",
    "mental",
    "sleep",
    "prediction",
    "visual",
    "ranger",
    "cursebound",
    "shadow",
    "rare",
    "curse",
    "light",
    "wizard",
    "nonlethal",
    "linguistic",
    "monk",
    "revelation",
    "divine",
    "possession",
    "aura",
    "chaotic",
    "polymorph",
    "druid",
    "divination",
    "stance",
    "incapacitation",
    "necromancy"
  ],
  categories: [
    "Generic",
    "Alignment",
    "Class",
    "Class-Specific",
    "Creature Type",
    "Elemental",
    "Energy",
    "Equipment",
    "Monster",
    "Planar",
    "Poison",
    "Rarity",
    "School",
    "Sense",
    "Tradition",
    "Weapon"
  ],
  traditions: ["Arcane", "Divine", "Occult", "Primal"],
  actions: ["free", "1", "2", "3", "reaction"],
  bloodlines: [
    "aberrant",
    "angelic",
    "demonic",
    "diabolic",
    "draconic",
    "elemental",
    "fey",
    "genie",
    "hag",
    "imperial",
    "nymph",
    "psychopomp",
    "shadow",
    "undead"
  ],
  domains: [
    "Air",
    "Ambition",
    "Change",
    "Cold",
    "Cities",
    "Confidence",
    "Creation",
    "Darkness",
    "Decay",
    "Delerium",
    "Death",
    "Destruction",
    "Dreams",
    "Dust",
    "Duty",
    "Earth",
    "Family",
    "Fate",
    "Fire",
    "Freedom",
    "Glyph",
    "Healing",
    "Indulgence",
    "Lightning",
    "Knowledge",
    "Luck",
    "Magic",
    "Might",
    "Moon",
    "Nature",
    "Nightmares",
    "Pain",
    "Passion",
    "Perfection",
    "Plague",
    "Protection",
    "Repose",
    "Secrecy",
    "Sorrow",
    "Soul",
    "Star",
    "Sun",
    "Swarm",
    "Time",
    "Travel",
    "Trickery",
    "Truth",
    "Tyranny",
    "Undeath",
    "Vigil",
    "Void",
    "Water",
    "Wealth",
    "Wyrmkin",
    "Zeal"
  ],
  mysteries: [
    "Ancestors",
    "Battle",
    "Bones",
    "Cosmos",
    "Flames",
    "Life",
    "Lore",
    "Tempest",
    "Shared"
  ],
  lessons: [
    "lesson of mischief",
    "lesson of renewal",
    "lesson of the elements",
    "lesson of the frozen queen",
    "lesson of shadow",
    "lesson of vengeance",
    "lesson of protection",
    "lesson of snow",
    "lesson of dreams",
    "lesson of death",
    "lesson of life"
  ],
  patronThemes: [
    {
      name: "Curse",
      spellListRef: "Occult"
    },
    {
      name: "Fate",
      spellListRef: "Occult"
    },
    {
      name: "Fervor",
      spellListRef: "Divine"
    },
    {
      name: "Night",
      spellListRef: "Occult"
    },
    {
      name: "Rune",
      spellListRef: "Arcane"
    },
    {
      name: "Wild",
      spellListRef: "Primal"
    },
    {
      name: "Winter",
      spellListRef: "Primal"
    }
  ],
  arcaneSchools: [
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illusion",
    "necromancy",
    "transmutation",
    "universalist"
  ],
  muses: ["enigma", "maestro", "polymath"],
  classes: [
    {
      name: "Alchemist"
    },
    {
      name: "Barbarian"
    },
    {
      name: "Bard",
      focusRef: "Bard",
      spellListRef: "Occult",
      isSpontaneous: true,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        }
      ]
    },
    {
      name: "Champion",
      focusRef: "Champion"
    },
    {
      name: "Cleric",
      focusRef: "Domains",
      spellListRef: "Divine",
      additionalSpellList: "Deities",
      isSpontaneous: false,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 1
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 1
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 2
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 2
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 3
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 3
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 4
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
          divineFontLevel: 4
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0],
          divineFontLevel: 5
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
          divineFontLevel: 5
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0],
          divineFontLevel: 6
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
          divineFontLevel: 6
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0],
          divineFontLevel: 7
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
          divineFontLevel: 7
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0],
          divineFontLevel: 8
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
          divineFontLevel: 8
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0],
          divineFontLevel: 9
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
          divineFontLevel: 9
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
          divineFontLevel: 10
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
          divineFontLevel: 10
        }
      ]
    },
    {
      name: "Druid",
      focusRef: "Druid",
      spellListRef: "Primal",
      isSpontaneous: false,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        }
      ]
    },
    {
      name: "Fighter"
    },
    {
      name: "Investigator"
    },
    {
      name: "Monk",
      focusRef: "Monk"
    },
    {
      name: "Oracle",
      focusRef: "Oracle",
      spellListRef: "Divine",
      isSpontaneous: true,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        }
      ]
    },
    {
      name: "Ranger"
    },
    {
      name: "Rogue"
    },
    {
      name: "Sorcerer",
      focusRef: "Bloodlines",
      spellListRef: "Arcane",
      isSpontaneous: true,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1]
        }
      ]
    },
    {
      name: "Swashbuckler"
    },
    {
      name: "Witch",
      focusRef: "Witch",
      additionalSpellListRef: "patronThemes",
      isSpontaneous: false,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        }
      ]
    },
    {
      name: "Wizard",
      focusRef: "Wizard Schools",
      spellListRef: "",
      isSpontaneous: false,
      levels: [
        {
          classLevel: 1,
          spellSlots: [5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 2,
          spellSlots: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 3,
          spellSlots: [5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 4,
          spellSlots: [5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 5,
          spellSlots: [5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 6,
          spellSlots: [5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 7,
          spellSlots: [5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 8,
          spellSlots: [5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 9,
          spellSlots: [5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 10,
          spellSlots: [5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0]
        },
        {
          classLevel: 11,
          spellSlots: [5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0]
        },
        {
          classLevel: 12,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0]
        },
        {
          classLevel: 13,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0]
        },
        {
          classLevel: 14,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0]
        },
        {
          classLevel: 15,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0]
        },
        {
          classLevel: 16,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0]
        },
        {
          classLevel: 17,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0]
        },
        {
          classLevel: 18,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0]
        },
        {
          classLevel: 19,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        },
        {
          classLevel: 20,
          spellSlots: [5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
        }
      ]
    }
  ],
  focuses: [
    {
      name: "Domains",
      options: [
        {
          name: "Air",
          spells: ["6023a6beb6666307be6f5d3a", "6023a6beb6666307be6f5d52"]
        },
        {
          name: "Ambition",
          spells: ["6023a6beb6666307be6f5d2a", "6023a6beb6666307be6f5d4e"]
        },
        {
          name: "Change",
          spells: ["6023a6beb6666307be6f5f3f", "6023a6beb6666307be6f5f87"]
        },
        {
          name: "Cities",
          spells: ["6023a6beb6666307be6f5d30", "6023a6beb6666307be6f5d63"]
        },
        {
          name: "Cold",
          spells: ["6023a6beb6666307be6f5f68", "6023a6beb6666307be6f5f8c"]
        },
        {
          name: "Confidence",
          spells: ["6023a6beb6666307be6f5d46", "6023a6beb6666307be6f5d50"]
        },
        {
          name: "Creation",
          spells: ["6023a6beb6666307be6f5d3f", "6023a6beb6666307be6f5d4b"]
        },
        {
          name: "Darkness",
          spells: ["6023a6beb6666307be6f5d2c", "6023a6beb6666307be6f5d4f"]
        },
        {
          name: "Death",
          spells: ["6023a6beb6666307be6f5d2f", "6023a6beb6666307be6f5d56"]
        },
        {
          name: "Decay",
          spells: ["6023a6beb6666307be6f5f69", "6023a6beb6666307be6f5f93"]
        },
        {
          name: "Delerium",
          spells: ["6023a6beb6666307be6f5f51", "6023a6beb6666307be6f5f92"]
        },
        {
          name: "Destruction",
          spells: ["6023a6beb6666307be6f5d2d", "6023a6beb6666307be6f5d51"]
        },
        {
          name: "Dreams",
          spells: ["6023a6beb6666307be6f5d41", "6023a6beb6666307be6f5d54"]
        },
        {
          name: "Dust",
          spells: ["6023a6beb6666307be6f5f5b", "6023a6beb6666307be6f5f8e"]
        },
        {
          name: "Duty",
          spells: ["6023a6beb6666307be6f5f59", "6023a6beb6666307be6f5f8f"]
        },
        {
          name: "Earth",
          spells: ["6023a6beb6666307be6f5d34", "6023a6beb6666307be6f5d5a"]
        },
        {
          name: "Family",
          spells: ["6023a6beb6666307be6f5d3e", "6023a6beb6666307be6f5d6d"]
        },
        {
          name: "Fate",
          spells: ["6023a6beb6666307be6f5d3b", "6023a6beb6666307be6f5d69"]
        },
        {
          name: "Fire",
          spells: ["6023a6beb6666307be6f5d31", "6023a6beb6666307be6f5d57"]
        },
        {
          name: "Freedom",
          spells: ["6023a6beb6666307be6f5d45", "6023a6beb6666307be6f5d6e"]
        },
        {
          name: "Glyph",
          spells: ["6023a6beb6666307be6f5f5e", "6023a6beb6666307be6f5f96"]
        },
        {
          name: "Healing",
          spells: ["6023a6beb6666307be6f5d33", "6023a6beb6666307be6f5d64"]
        },
        {
          name: "Indulgence",
          spells: ["6023a6beb6666307be6f5d37", "6023a6beb6666307be6f5d68"]
        },
        {
          name: "Knowledge",
          spells: ["6023a6beb6666307be6f5d3d", "6023a6beb6666307be6f5d59"]
        },
        {
          name: "Lightning",
          spells: ["6023a6beb6666307be6f5f45", "6023a6beb6666307be6f5f89"]
        },
        {
          name: "Luck",
          spells: ["6023a6beb6666307be6f5d29", "6023a6beb6666307be6f5d5b"]
        },
        {
          name: "Magic",
          spells: ["6023a6beb6666307be6f5d35", "6023a6beb6666307be6f5d5d"]
        },
        {
          name: "Might",
          spells: ["6023a6beb6666307be6f5d28", "6023a6beb6666307be6f5d55"]
        },
        {
          name: "Moon",
          spells: ["6023a6beb6666307be6f5d36", "6023a6beb6666307be6f5d6a"]
        },
        {
          name: "Nature",
          spells: ["6023a6beb6666307be6f5d47", "6023a6beb6666307be6f5d5e"]
        },
        {
          name: "Nightmares",
          spells: ["6023a6beb6666307be6f5d48", "6023a6beb6666307be6f5d67"]
        },
        {
          name: "Pain",
          spells: ["6023a6beb6666307be6f5d3c", "6023a6beb6666307be6f5d65"]
        },
        {
          name: "Passion",
          spells: ["6023a6beb6666307be6f5d2b", "6023a6beb6666307be6f5d4c"]
        },
        {
          name: "Perfection",
          spells: ["6023a6beb6666307be6f5d38", "6023a6beb6666307be6f5d5f"]
        },
        {
          name: "Plague",
          spells: ["6023a6beb6666307be6f5f48", "6023a6beb6666307be6f5f95"]
        },
        {
          name: "Protection",
          spells: ["6023a6beb6666307be6f5d39", "6023a6beb6666307be6f5d62"]
        },
        {
          name: "Repose",
          spells: ["6023a6beb6666307be6f5f60", "6023a6beb6666307be6f5f94"]
        },
        {
          name: "Secrecy",
          spells: ["6023a6beb6666307be6f5d32", "6023a6beb6666307be6f5d66"]
        },
        {
          name: "Sorrow",
          spells: ["6023a6beb6666307be6f5f53", "6023a6beb6666307be6f5f97"]
        },
        {
          name: "Soul",
          spells: ["6023a6beb6666307be6f5f4a", "6023a6beb6666307be6f5f90"]
        },
        {
          name: "Star",
          spells: ["6023a6beb6666307be6f5f6a", "6023a6beb6666307be6f5f88"]
        },
        {
          name: "Sun",
          spells: ["6023a6beb6666307be6f5d2e", "6023a6beb6666307be6f5d60"]
        },
        {
          name: "Swarm",
          spells: ["6023a6beb6666307be6f5f64", "6023a6beb6666307be6f5f9b"]
        },
        {
          name: "Time",
          spells: ["6023a6beb6666307be6f5f46", "6023a6beb6666307be6f5f9a"]
        },
        {
          name: "Travel",
          spells: ["6023a6beb6666307be6f5d26", "6023a6beb6666307be6f5d6b"]
        },
        {
          name: "Trickery",
          spells: ["6023a6beb6666307be6f5d40", "6023a6beb6666307be6f5d6c"]
        },
        {
          name: "Truth",
          spells: ["6023a6beb6666307be6f5d4a", "6023a6beb6666307be6f5d58"]
        },
        {
          name: "Tyranny",
          spells: ["6023a6beb6666307be6f5d43", "6023a6beb6666307be6f5d4d"]
        },
        {
          name: "Undeath",
          spells: ["6023a6beb6666307be6f5d44", "6023a6beb6666307be6f5d5c"]
        },
        {
          name: "Vigil",
          spells: ["6023a6beb6666307be6f5f5a", "6023a6beb6666307be6f5f98"]
        },
        {
          name: "Void",
          spells: ["6023a6beb6666307be6f5f4c", "6023a6beb6666307be6f5f8d"]
        },
        {
          name: "Water",
          spells: ["6023a6beb6666307be6f5d42", "6023a6beb6666307be6f5d53"]
        },
        {
          name: "Wealth",
          spells: ["6023a6beb6666307be6f5d27", "6023a6beb6666307be6f5d61"]
        },
        {
          name: "Wyrmkin",
          spells: ["6023a6beb6666307be6f5f49", "6023a6beb6666307be6f5f99"]
        },
        {
          name: "Zeal",
          spells: ["6023a6beb6666307be6f5d49", "6023a6beb6666307be6f5d6f"]
        }
      ]
    },
    {
      name: "Bloodlines",
      options: [
        {
          name: "Aberrant",
          spells: [
            "6023a6beb6666307be6f5d8a",
            "6023a6beb6666307be6f5d8c",
            "6023a6beb6666307be6f5d9e"
          ]
        },
        {
          name: "Angelic",
          spells: [
            "6023a6beb6666307be6f5d83",
            "6023a6beb6666307be6f5d8d",
            "6023a6beb6666307be6f5d98"
          ]
        },
        {
          name: "Demonic",
          spells: [
            "6023a6beb6666307be6f5d88",
            "6023a6beb6666307be6f5d95",
            "6023a6beb6666307be6f5d96"
          ]
        },
        {
          name: "Diabolic",
          spells: [
            "6023a6beb6666307be6f5d84",
            "6023a6beb6666307be6f5d91",
            "6023a6beb6666307be6f5d9d"
          ]
        },
        {
          name: "Draconic",
          spells: [
            "6023a6beb6666307be6f5d85",
            "6023a6beb6666307be6f5d8e",
            "6023a6beb6666307be6f5d99"
          ]
        },
        {
          name: "Elemental",
          spells: [
            "6023a6beb6666307be6f5d86",
            "6023a6beb6666307be6f5d90",
            "6023a6beb6666307be6f5d9a"
          ]
        },
        {
          name: "Fey",
          spells: [
            "6023a6beb6666307be6f5d87",
            "6023a6beb6666307be6f5d93",
            "6023a6beb6666307be6f5d9b"
          ]
        },
        {
          name: "Genie",
          spells: [
            "6023a6beb6666307be6f5f4d",
            "6023a6beb6666307be6f5f7c",
            "6023a6beb6666307be6f5fac"
          ]
        },
        {
          name: "Hag",
          spells: [
            "6023a6beb6666307be6f5d89",
            "6023a6beb6666307be6f5d94",
            "6023a6beb6666307be6f5d9f"
          ]
        },
        {
          name: "Imperial",
          spells: [
            "6023a6beb6666307be6f5d82",
            "6023a6beb6666307be6f5d92",
            "6023a6beb6666307be6f5d97"
          ]
        },
        {
          name: "Nymph",
          spells: [
            "6023a6beb6666307be6f5f58",
            "6023a6beb6666307be6f5f77",
            "6023a6beb6666307be6f5fa0"
          ]
        },
        {
          name: "Psychopomp",
          spells: [
            "6023a6beb6666307be6f5f5f",
            "6023a6beb6666307be6f5f81",
            "6023a6beb6666307be6f5fa9"
          ]
        },
        {
          name: "Shadow",
          spells: [
            "6023a6beb6666307be6f5f47",
            "6023a6beb6666307be6f5f82",
            "6023a6beb6666307be6f5f9d"
          ]
        },
        {
          name: "Undead",
          spells: [
            "6023a6beb6666307be6f5d8b",
            "6023a6beb6666307be6f5d8f",
            "6023a6beb6666307be6f5d9c"
          ]
        }
      ]
    },
    {
      name: "Druid",
      options: [
        {
          name: "Druid",
          spells: [
            "6023a6beb6666307be6f5fb9",
            "6023a6beb6666307be6f5d70",
            "6023a6beb6666307be6f5d71",
            "6023a6beb6666307be6f5d77",
            "6023a6beb6666307be6f5d76",
            "6023a6beb6666307be6f5d78",
            "6023a6beb6666307be6f5d75",
            "6023a6beb6666307be6f5d72",
            "6023a6beb6666307be6f5d73",
            "6023a6beb6666307be6f5d74"
          ]
        }
      ]
    },
    {
      name: "Champion",
      options: [
        {
          name: "Champion",
          spells: [
            "6023a6beb6666307be6f5d23",
            "6023a6beb6666307be6f5d25",
            "6023a6beb6666307be6f5d20",
            "6023a6beb6666307be6f5d22",
            "6023a6beb6666307be6f5d21",
            "6023a6beb6666307be6f5fb5",
            "6023a6beb6666307be6f5d24",
            "6023a6beb6666307be6f5fa3",
            "6023a6beb6666307be6f5f66"
          ]
        }
      ]
    },
    {
      name: "Monk",
      options: [
        {
          name: "Monk",
          spells: [
            "6023a6beb6666307be6f5d7d",
            "6023a6beb6666307be6f5f8a",
            "6023a6beb6666307be6f5d81",
            "6023a6beb6666307be6f5d7c",
            "6023a6beb6666307be6f5fb8",
            "6023a6beb6666307be6f5d79",
            "6023a6beb6666307be6f5d7a",
            "6023a6beb6666307be6f5fb7",
            "6023a6beb6666307be6f5d80",
            "6023a6beb6666307be6f5fb6",
            "6023a6beb6666307be6f5d7b",
            "6023a6beb6666307be6f5d7e",
            "6023a6beb6666307be6f5d7f"
          ]
        }
      ]
    },
    {
      name: "Oracle",
      options: [
        {
          name: "Shared",
          spells: ["6023a6beb6666307be6f5f71", "6023a6beb6666307be6f5f8b"]
        },
        {
          name: "Ancestors",
          spells: [
            "6023a6beb6666307be6f5f40",
            "6023a6beb6666307be6f5f73",
            "6023a6beb6666307be6f5fad"
          ]
        },
        {
          name: "Battle",
          spells: [
            "6023a6beb6666307be6f5f44",
            "6023a6beb6666307be6f5f75",
            "6023a6beb6666307be6f5fb1"
          ]
        },
        {
          name: "Bones",
          spells: [
            "6023a6beb6666307be6f5f62",
            "6023a6beb6666307be6f5f74",
            "6023a6beb6666307be6f5fae"
          ]
        },
        {
          name: "Cosmos",
          spells: [
            "6023a6beb6666307be6f5f63",
            "6023a6beb6666307be6f5f7d",
            "6023a6beb6666307be6f5fb3"
          ]
        },
        {
          name: "Flames",
          spells: [
            "6023a6beb6666307be6f5f52",
            "6023a6beb6666307be6f5f85",
            "6023a6beb6666307be6f5fb0"
          ]
        },
        {
          name: "Life",
          spells: [
            "6023a6beb6666307be6f5f55",
            "6023a6beb6666307be6f5f79",
            "6023a6beb6666307be6f5fb2"
          ]
        },
        {
          name: "Lore",
          spells: [
            "6023a6beb6666307be6f5f42",
            "6023a6beb6666307be6f5f72",
            "6023a6beb6666307be6f5faf"
          ]
        },
        {
          name: "Tempest",
          spells: [
            "6023a6beb6666307be6f5f65",
            "6023a6beb6666307be6f5f84",
            "6023a6beb6666307be6f5fb4"
          ]
        }
      ]
    },
    {
      name: "Witch",
      options: [
        {
          name: "Witch",
          spells: [
            "6023a6beb6666307be6f5f41",
            "6023a6beb6666307be6f5f43",
            "6023a6beb6666307be6f5f9e",
            "6023a6beb6666307be6f5f78",
            "6023a6beb6666307be6f5f4b",
            "6023a6beb6666307be6f5fa1",
            "6023a6beb6666307be6f5f54",
            "6023a6beb6666307be6f5f7e",
            "6023a6beb6666307be6f5f57",
            "6023a6beb6666307be6f5f7f",
            "6023a6beb6666307be6f5f5c",
            "6023a6beb6666307be6f5fa5",
            "6023a6beb6666307be6f5f67"
          ]
        }
      ]
    },
    {
      name: "Bard",
      options: [
        {
          name: "Bard",
          spells: [
            "6023a6beb6666307be6f5d13",
            "6023a6beb6666307be6f5d1f",
            "6023a6beb6666307be6f5f50",
            "6023a6beb6666307be6f5d1b",
            "6023a6beb6666307be6f5d16",
            "6023a6beb6666307be6f5d17",
            "6023a6beb6666307be6f5fa4",
            "6023a6beb6666307be6f5fba",
            "6023a6beb6666307be6f5fbb",
            "6023a6beb6666307be6f5d1e",
            "6023a6beb6666307be6f5faa"
          ]
        }
      ]
    },
    {
      name: "Wizard Schools",
      options: [
        {
          name: "Conjuration",
          spells: ["6023a6beb6666307be6f5da0", "6023a6beb6666307be6f5da9"]
        },
        {
          name: "Necromancy",
          spells: ["6023a6beb6666307be6f5da1", "6023a6beb6666307be6f5dae"]
        },
        {
          name: "Enchantment",
          spells: ["6023a6beb6666307be6f5da2", "6023a6beb6666307be6f5daa"]
        },
        {
          name: "Divination",
          spells: ["6023a6beb6666307be6f5da3", "6023a6beb6666307be6f5db0"]
        },
        {
          name: "Evocation",
          spells: ["6023a6beb6666307be6f5da4", "6023a6beb6666307be6f5dab"]
        },
        {
          name: "Universalist",
          spells: ["6023a6beb6666307be6f5da5"]
        },
        {
          name: "Transmutation",
          spells: ["6023a6beb6666307be6f5da6", "6023a6beb6666307be6f5daf"]
        },
        {
          name: "Abjuration",
          spells: ["6023a6beb6666307be6f5da7", "6023a6beb6666307be6f5dac"]
        },
        {
          name: "Illusion",
          spells: ["6023a6beb6666307be6f5da8", "6023a6beb6666307be6f5dad"]
        }
      ]
    }
  ],
  ancestries: [
    "Catfolk",
    "Dwarf",
    "Elf",
    "Gnome",
    "Goblin",
    "Halfling",
    "Human",
    "Kobold",
    "Orc",
    "Ratfolk",
    "Tengu"
  ],
  alignments: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
  deities: [
    {
      name: "Abadar",
      alignment: "LN",
      followerAlignments: ["LG", "LN", "LE"],
      domains: ["cities", "earth", "travel", "wealth"],
      clericSpells: [
        {
          level: 1,
          spell: "Illusory Object"
        },
        {
          level: 4,
          spell: "Creation"
        },
        {
          level: 7,
          spell: "Magnificent Mansion"
        }
      ],
      favoredWeapon: "crossbow",
      divineSkill: "Society",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Asmodeus",
      alignment: "LE",
      followerAlignments: ["LE"],
      domains: ["confidence", "fire", "trickery", "tyranny"],
      clericSpells: [
        {
          level: 1,
          spell: "Charm"
        },
        {
          level: 4,
          spell: "Suggestion"
        },
        {
          level: 6,
          spell: "Mislead"
        }
      ],
      favoredWeapon: "mace",
      divineSkill: "Deception",
      divineFont: "harm",
      source: "core"
    },
    {
      name: "Calistria",
      alignment: "CN",
      followerAlignments: ["CG", "CN", "CE"],
      domains: ["pain", "passion", "secrecy", "trickery"],
      clericSpells: [
        {
          level: 1,
          spell: "Charm"
        },
        {
          level: 3,
          spell: "Enthrall"
        },
        {
          level: 6,
          spell: "Mislead"
        }
      ],
      favoredWeapon: "whip",
      divineSkill: "Deception",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Cayden Cailean",
      alignment: "CG",
      followerAlignments: ["NG", "CG", "CN"],
      domains: ["cities", "freedom", "indulgence", "might"],
      clericSpells: [
        {
          level: 1,
          spell: "Fleet Step"
        },
        {
          level: 2,
          spell: "Touch of Idiocy"
        },
        {
          level: 5,
          spell: "Hallucination"
        }
      ],
      favoredWeapon: "rapier",
      divineSkill: "Athletics",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Desna",
      alignment: "CG",
      followerAlignments: ["NG", "CG", "CN"],
      domains: ["dreams", "luck", "moon", "travel"],
      clericSpells: [
        {
          level: 1,
          spell: "Sleep"
        },
        {
          level: 4,
          spell: "Fly"
        },
        {
          level: 5,
          spell: "Dreaming Potential"
        }
      ],
      favoredWeapon: "starknife",
      divineSkill: "Acrobatics",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Erastil",
      alignment: "LG",
      followerAlignments: ["LG", "NG", "LN"],
      domains: ["earth", "family", "nature", "wealth"],
      clericSpells: [
        {
          level: 1,
          spell: "True Strike"
        },
        {
          level: 3,
          spell: "Wall of Thorns"
        },
        {
          level: 5,
          spell: "Tree Stride"
        }
      ],
      favoredWeapon: "longbow",
      divineSkill: "Survival",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Gorum",
      alignment: "CN",
      followerAlignments: ["CN", "CE"],
      domains: ["confidence", "destruction", "might", "zeal"],
      clericSpells: [
        {
          level: 1,
          spell: "True Strike"
        },
        {
          level: 2,
          spell: "Enlarge"
        },
        {
          level: 4,
          spell: "Weapon Storm"
        }
      ],
      favoredWeapon: "greatsword",
      divineSkill: "Athletics",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Gozreh",
      alignment: "N",
      followerAlignments: ["NG", "LN", "N", "CN", "NE"],
      domains: ["air", "nature", "travel", "water"],
      clericSpells: [
        {
          level: 1,
          spell: "Gust of Wind"
        },
        {
          level: 3,
          spell: "Lightning Bolt"
        },
        {
          level: 5,
          spell: "Control Water"
        }
      ],
      favoredWeapon: "trident",
      divineSkill: "Survival",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Iomedae",
      alignment: "LG",
      followerAlignments: ["LG", "NG"],
      domains: ["confidence", "might", "truth", "zeal"],
      clericSpells: [
        {
          level: 1,
          spell: "True Strike"
        },
        {
          level: 2,
          spell: "Enlarge"
        },
        {
          level: 4,
          spell: "Fire Shield"
        }
      ],
      favoredWeapon: "longsword",
      divineSkill: "Intimidation",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Irori",
      alignment: "LN",
      followerAlignments: ["LG", "LN", "LE"],
      domains: ["knowledge", "might", "perfection", "truth"],
      clericSpells: [
        {
          level: 1,
          spell: "Jump"
        },
        {
          level: 3,
          spell: "Haste"
        },
        {
          level: 4,
          spell: "Stoneskin"
        }
      ],
      favoredWeapon: "fist",
      divineSkill: "Athletics",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Lamashtu",
      alignment: "CE",
      followerAlignments: ["CE"],
      domains: ["family", "might", "nightmares", "trickery"],
      clericSpells: [
        {
          level: 1,
          spell: "Magic Fang"
        },
        {
          level: 2,
          spell: "Animal Form"
        },
        {
          level: 4,
          spell: "Nightmare"
        }
      ],
      favoredWeapon: "falchion",
      divineSkill: "Survival",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Nethys",
      alignment: "N",
      followerAlignments: ["NG", "LN", "N", "CN", "NE"],
      domains: ["destruction", "knowledge", "magic", "protection"],
      clericSpells: [
        {
          level: 1,
          spell: "Magic Missile"
        },
        {
          level: 2,
          spell: "Magic Mouth"
        },
        {
          level: 3,
          spell: "Levitate"
        },
        {
          level: 4,
          spell: "Blink"
        },
        {
          level: 5,
          spell: "Prying Eye"
        },
        {
          level: 6,
          spell: "Wall of Force"
        },
        {
          level: 7,
          spell: "Warp Mind"
        },
        {
          level: 8,
          spell: "Maze"
        },
        {
          level: 9,
          spell: "Disjunction"
        }
      ],
      favoredWeapon: "staff",
      divineSkill: "Arcana",
      divineFont: "either",
      source: "core"
    },
    {
      name: "Norgorber",
      alignment: "NE",
      followerAlignments: ["LE", "NE", "CE", "N"],
      domains: ["death", "secrecy", "trickery", "wealth"],
      clericSpells: [
        {
          level: 1,
          spell: "Illusory Disguise"
        },
        {
          level: 2,
          spell: "Invisibility"
        },
        {
          level: 4,
          spell: "Phantasmal Killer"
        }
      ],
      favoredWeapon: "shortsword",
      divineSkill: "Stealth",
      divineFont: "harm",
      source: "core"
    },
    {
      name: "Pharasma",
      alignment: "N",
      followerAlignments: ["NG", "LN", "N"],
      domains: ["death", "fate", "healing", "knowledge"],
      clericSpells: [
        {
          level: 1,
          spell: "Mindlink"
        },
        {
          level: 3,
          spell: "Ghostly Weapon"
        },
        {
          level: 4,
          spell: "Phantasmal Killer"
        }
      ],
      favoredWeapon: "dagger",
      divineSkill: "Medicine",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Rovagug",
      alignment: "CE",
      followerAlignments: ["NE", "CE"],
      domains: ["air", "destruction", "earth", "zeal"],
      clericSpells: [
        {
          level: 1,
          spell: "Burning Hands"
        },
        {
          level: 2,
          spell: "Enlarge"
        },
        {
          level: 6,
          spell: "Disintegrate"
        }
      ],
      favoredWeapon: "greataxe",
      divineSkill: "Athletics",
      divineFont: "harm",
      source: "core"
    },
    {
      name: "Sarenrae",
      alignment: "NG",
      followerAlignments: ["LG", "NG", "CG"],
      domains: ["fire", "healing", "sun", "truth"],
      clericSpells: [
        {
          level: 1,
          spell: "Burning Hands"
        },
        {
          level: 3,
          spell: "Fireball"
        },
        {
          level: 4,
          spell: "Wall of Fire"
        }
      ],
      favoredWeapon: "scimitar",
      divineSkill: "Medicine",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Shelyn",
      alignment: "NG",
      followerAlignments: ["LG", "NG", "CG"],
      domains: ["creation", "family", "passion", "protection"],
      clericSpells: [
        {
          level: 1,
          spell: "Color Spray"
        },
        {
          level: 3,
          spell: "Enthrall"
        },
        {
          level: 4,
          spell: "Creation"
        }
      ],
      favoredWeapon: "glaive",
      divineSkill: "Crafting or Performance",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Torag",
      alignment: "LG",
      followerAlignments: ["LG", "LN"],
      domains: ["creation", "earth", "family", "protection"],
      clericSpells: [
        {
          level: 1,
          spell: "Mindlink"
        },
        {
          level: 3,
          spell: "Earthbind"
        },
        {
          level: 4,
          spell: "Creation"
        }
      ],
      favoredWeapon: "warhammer",
      divineSkill: "Crafting",
      divineFont: "heal",
      source: "core"
    },
    {
      name: "Urgathoa",
      alignment: "NE",
      followerAlignments: ["LE", "NE", "CE"],
      domains: ["indulgence", "magic", "might", "undeath"],
      clericSpells: [
        {
          level: 1,
          spell: "Goblin Pox"
        },
        {
          level: 2,
          spell: "False Life"
        },
        {
          level: 7,
          spell: "Mask of Terror"
        }
      ],
      favoredWeapon: "scythe",
      divineSkill: "Intimidation",
      divineFont: "harm",
      source: "core"
    },
    {
      name: "Zon-Kuthon",
      alignment: "LE",
      followerAlignments: ["LN", "LE", "NE"],
      domains: ["ambition", "darkness", "destruction", "pain"],
      clericSpells: [
        {
          level: 1,
          spell: "Phantom Pain"
        },
        {
          level: 3,
          spell: "Wall of Thorns"
        },
        {
          level: 5,
          spell: "Shadow Walk"
        }
      ],
      favoredWeapon: "spiked chain",
      divineSkill: "Intimidation",
      divineFont: "harm",
      source: "core"
    }
  ],
  archetypes: [
    {
      name: "Beastmaster",
      spells: ["6023a6beb6666307be6f5d71", "6023a6beb6666307be6f5f76"]
    },
    {
      name: "Blessed One",
      spells: ["6023a6beb6666307be6f5d20", "6023a6beb6666307be6f5d39"]
    },
    {
      name: "Magic Warrior",
      spells: ["6023a6beb6666307be6f5f32", "6023a6beb6666307be6f5f33"]
    },
    {
      name: "Red Mantis",
      spells: ["6023a6beb6666307be6f5f2c"]
    },
    {
      name: "Shadowdancer",
      spells: ["6023a6beb6666307be6f5f9f", "6023a6beb6666307be6f5fa7", "6023a6beb6666307be6f5fa6"]
    },
    {
      name: "Student of Perfection",
      spells: [
        "6023a6beb6666307be6f5f2d",
        "6023a6beb6666307be6f5f2e",
        "6023a6beb6666307be6f5f2f",
        "6023a6beb6666307be6f5f30",
        "6023a6beb6666307be6f5f31"
      ]
    }
  ],
  components: ["1 minute", "5 minutes", "10 minutes", "1 hour", "focus", "material", "somatic", "verbal"]
};
var _staticTraitsSorted = [
  { category: "alignment", traits: [
    "good",
    "evil",
    "chaotic"
  ] },
  { category: "classes", traits: [
    "sorcerer",
    "bard",
    "cleric",
    "witch",
    "oracle",
    "ranger",
    "champion",
    "wizard",
    "druid",
    "monk"
  ] },
  { category: "effect", traits: [
    "arcane",
    "positive",
    "sonic",
    "poison",
    "air",
    "fire",
    "cold",
    "fear",
    "fortune",
    "detection",
    "darkness",
    "morph",
    "death",
    "healing",
    "scrying",
    "emotion",
    "move",
    "plant",
    "consecration",
    "force",
    "extradimensional",
    "potion",
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
const modalDefaults = {
  show: false,
  component: "",
  blockClose: false,
  componentProps: {}
};
const createModalUi = () => {
  const { subscribe: subscribe2, set } = writable(modalDefaults);
  return {
    subscribe: subscribe2,
    set,
    hide: () => set(__spreadValues({}, modalDefaults))
  };
};
const modal = createModalUi();
const staticLists = readable(_staticLists);
readable(_staticTraitsSorted);
const selectedCharacterDefaults = {
  spellbook: [],
  _id: null,
  active: true,
  alignment: "",
  ancestry: "",
  archetype: "",
  characterClass: "",
  characterName: "",
  focus: "",
  level: 1,
  user: {
    _id: null
  }
};
const createSelectedCharacterStore = () => {
  const { subscribe: subscribe2, set } = writable(selectedCharacterDefaults);
  return {
    subscribe: subscribe2,
    set,
    reset: () => set(selectedCharacterDefaults)
  };
};
const getCharacterList = async () => {
  try {
    const res = await fetch("/api/characters", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show(err);
  }
};
const saveCharacter = async (newChar) => {
  try {
    const res = await fetch("/api/characters", {
      method: "POST",
      body: JSON.stringify({ character: newChar }),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show(err);
  }
};
const deleteCharacter = async (id) => {
  try {
    const res = await fetch("/api/characters", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show("Unable to delete user");
  }
};
const addSpellToCharacter = async (spellId, characterId) => {
  try {
    const res = await fetch("/api/characters/selected/addSpell", {
      method: "POST",
      body: JSON.stringify({ spellId, characterId }),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    dataError.show(err);
  }
};
const removeSpellFromCharacter = async (spellId, characterId) => {
  try {
    const res = await fetch("/api/characters/selected/removeSpell", {
      method: "POST",
      body: JSON.stringify({ spellId, characterId }),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    dataError.show(err);
  }
};
const createCharactersStore = () => {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    reset: () => {
      set([]);
    },
    populate: async () => {
      let data = await getCharacterList();
      let { characters: characters2 } = await data;
      if (characters2 && characters2.length > 0) {
        set(characters2);
      } else {
        set([]);
      }
    },
    saveOne: async (newCharacter) => {
      let data = await saveCharacter(newCharacter);
      let { character } = data;
      update((charList) => {
        if (character) {
          if (!(newCharacter == null ? void 0 : newCharacter._id)) {
            return [...charList, character];
          }
          return charList.map((c) => {
            if (c._id === character._id) {
              return character;
            }
            return c;
          });
        } else {
          return charList;
        }
      });
      if (character)
        selectedCharacter.set(character);
      else
        selectedCharacter.reset();
    },
    deleteOne: async (idToDelete) => {
      let data = await deleteCharacter(idToDelete);
      let { id } = data;
      update((charList) => {
        if (id) {
          return charList.filter((char) => {
            return char._id !== id;
          });
        } else {
          if (!charList.length > 0) {
            return [];
          }
          return charList;
        }
      });
      selectedCharacter.reset();
    },
    updateCharacterSpells: (characterId, newSpellList) => {
      update((charList) => {
        return charList.map((c) => {
          if (c._id === characterId) {
            c.spellbook = [...newSpellList];
            selectedCharacter.set(c);
          }
          return c;
        });
      });
    },
    addSpellToOne: async (spellId, characterId) => {
      let data = await addSpellToCharacter(spellId, characterId);
      let { character } = data;
      characters.updateCharacterSpells(characterId, character.spellbook);
    },
    removeSpellFromOne: async (spellId, characterId) => {
      let data = await removeSpellFromCharacter(spellId, characterId);
      let { character } = data;
      characters.updateCharacterSpells(character._id, character.spellbook);
    },
    removeDeletedSpellFromAll: (spellId) => {
      update((charList) => {
        return charList.map((c) => {
          c.spellbook.filter((s) => {
            return s._id !== spellId;
          });
          return c;
        });
      });
    }
  };
};
const characters = createCharactersStore();
const selectedCharacter = createSelectedCharacterStore();
var confirmation_svelte_svelte_type_style_lang = "";
const spellDefaults = [];
const selectedSpellDefaults = {};
const getSpells = async () => {
  let spells = [];
  if (!spells.length > 0) {
    spells = await fetch("/api/spells").then((r) => r.json().then((r2) => r2.spells)).catch((err) => dataError.showFatal(err));
  }
  return spells;
};
const createSelectedSpellStore = () => {
  const { subscribe: subscribe2, set } = writable(selectedSpellDefaults);
  return {
    subscribe: subscribe2,
    set,
    reset: () => set(selectedSpellDefaults)
  };
};
const createPfSpellsStore = () => {
  const { subscribe: subscribe2, set } = writable(spellDefaults);
  return {
    subscribe: subscribe2,
    set,
    populate: async () => {
      set(await getSpells());
    }
  };
};
const pf_spells = createPfSpellsStore();
const selectedSpell = createSelectedSpellStore();
const getCustomSpellList = async () => {
  try {
    const res = await fetch("/api/spells/custom", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show(err);
  }
};
const saveSpell = async (newSpell) => {
  try {
    const res = await fetch("/api/spells/custom", {
      method: "POST",
      body: JSON.stringify({ customSpell: newSpell }),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show(err);
  }
};
const deleteCustomSpell = async (id) => {
  try {
    const res = await fetch("/api/spells/custom", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    dataError.show(err);
  }
};
const createCustomSpellStore = () => {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    reset: () => {
      set([]);
    },
    populate: async () => {
      let data = await getCustomSpellList();
      let { customSpells: customSpells2 } = await data;
      if (customSpells2 && customSpells2.length > 0) {
        set(customSpells2);
      } else {
        set([]);
      }
    },
    saveOne: async (newSpell) => {
      let data = await saveSpell(newSpell);
      let { customSpell } = data;
      console.log(customSpell);
      update((spellList) => {
        if (customSpell) {
          let alreadyExists = false;
          let spells = spellList.map((s) => {
            if (s._id === customSpell._id) {
              alreadyExists = true;
              return customSpell;
            }
            return s;
          });
          if (alreadyExists) {
            return spells;
          } else {
            return [...spells, __spreadValues({}, customSpell)];
          }
        } else {
          return spellList;
        }
      });
      if (customSpell)
        selectedSpell.set(customSpell);
      else
        selectedSpell.reset();
    },
    deleteOne: async (idToDelete) => {
      let data = await deleteCustomSpell(idToDelete);
      let { spellId, removedFromCount } = data;
      console.log(data);
      update((spellList) => {
        if (spellId) {
          return spellList.filter((s) => {
            return s._id !== spellId;
          });
        } else {
          if (!spellList.length > 0) {
            return [];
          }
          return spellList;
        }
      });
      selectedSpell.reset();
      if (spellId && removedFromCount && removedFromCount > 0) {
        characters.removeDeletedSpellFromAll(spellId);
      }
    }
  };
};
const customSpells = createCustomSpellStore();
const deepEquals = (x, y) => {
  if (x === null || x === void 0 || y === null || y === void 0) {
    return x === y;
  }
  if (x.constructor !== y.constructor) {
    return false;
  }
  if (x instanceof Function) {
    return x === y;
  }
  if (x instanceof RegExp) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }
  if (x instanceof Date) {
    return false;
  }
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }
  var p = Object.keys(x);
  return Object.keys(y).every((i) => {
    return p.indexOf(i) !== -1;
  }) && p.every((i) => {
    return deepEquals(x[i], y[i]);
  });
};
const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const searchMatch = (spellFields, query) => {
  if (!query)
    return true;
  const _searchText = query.toLowerCase().replace("-", " ");
  const spellName = spellFields.name.toLowerCase().replace("-", " ");
  const spellDescription = spellFields.description.toLowerCase().replace("-", " ");
  if (spellName.includes(_searchText))
    return true;
  if (spellDescription.includes(_searchText))
    return true;
  return false;
};
const characterSpellMatch = (spellId, query) => {
  const { isolate, spellbook } = query;
  if (!isolate)
    return true;
  return spellbook.includes(spellId);
};
const levelMatch = (spellLevel, query) => {
  const spellLvl = parseInt(spellLevel);
  const queryLvl = parseInt(query.number);
  switch (query.equality) {
    case "<=":
      return spellLvl <= queryLvl;
    case ">=":
      return spellLvl >= queryLvl;
    case "=":
      return spellLvl === queryLvl;
  }
};
const twoArraysMatchAll = (spellField, query) => {
  if (query.length === 0)
    return true;
  if (spellField.length === 0)
    return false;
  const found = query.filter((p) => {
    return spellField.includes(p);
  });
  if (found.length === void 0)
    return false;
  if (found.length === 0)
    return false;
  if (found.length !== query.length)
    return false;
  return true;
};
const twoArraysMatchAny = (spellField, query) => {
  if (query.length === 0)
    return true;
  if (spellField.length === 0)
    return false;
  return query.reduce((matchFound, entry) => {
    if (matchFound)
      return matchFound;
    if (spellField.includes(entry))
      return true;
    return matchFound;
  }, false);
};
const filterDefaults = {
  showRulebook: true,
  showCustom: true,
  characterSpells: {
    isolate: false,
    spellbook: []
  },
  search: "",
  level: {
    equality: "",
    number: ""
  },
  actions: [],
  components: [],
  traditions: [],
  traits: [],
  type: ""
};
const arrayToTruncatedText = (labelText, arr, characterLimit) => {
  let overflowCount = 0;
  return arr.reduce((previousText, newText, index) => {
    const isLast = index + 1 === arr.length;
    const separator = !isLast ? ", " : "";
    let tempText = "";
    let overflowText = "";
    const isOver = previousText.length + newText.length > characterLimit;
    if (isOver) {
      overflowCount++;
    } else {
      tempText = newText + separator;
    }
    if (isLast) {
      overflowText = overflowCount > 0 ? `\u2026(${overflowCount})` : "";
    }
    return previousText + tempText + overflowText;
  }, labelText);
};
const getUiFilterText = (filter) => {
  const { key, value } = filter;
  switch (key) {
    case "showRulebook":
      return "No rulebook";
    case "showCustom":
      return "No custom";
    case "characterSpells":
      return "Only my spellbook";
    case "search":
      return `Name/Description: ${value}`;
    case "level":
      return `Spell level ${value.equality} ${value.number}`;
    case "actions":
      return `Actions: ${value.join(", ")}`;
    case "components":
      return arrayToTruncatedText("Components: ", value, 60);
    case "traditions":
      return arrayToTruncatedText("Traditions: ", value, 60);
    case "traits":
      return arrayToTruncatedText("Traits: ", value, 60);
    case "type":
      return `Type: ${value}`;
    default:
      `${key}: ${JSON.stringify(value)}`;
  }
};
const validatorMap = {
  characterSpells: (spell, query) => characterSpellMatch(spell, query),
  search: (spell, query) => searchMatch(spell, query),
  level: (spellLevel, query) => levelMatch(spellLevel, query),
  actions: (spell, query) => twoArraysMatchAny(spell, query),
  components: (spell, query) => twoArraysMatchAll(spell, query),
  traditions: (spell, query) => twoArraysMatchAll(spell, query),
  traits: (spell, query) => twoArraysMatchAll(spell, query),
  type: (spellType, query) => {
    return spellType === query;
  }
};
const mapSpellToValidator = (s) => {
  return {
    characterSpells: s._id || "",
    search: { name: s.name, description: s.description },
    level: s.level || {},
    actions: s.action || [],
    components: s.components || [],
    traditions: s.traditions || [],
    traits: s.traits || [],
    type: s.type || ""
  };
};
const applyFilters = (spell, filters2) => {
  const filterableSpell = mapSpellToValidator(spell);
  return filters2.reduce((isMatch, { key, value }) => {
    if (filterDefaults[key] === value)
      return isMatch;
    if (typeof validatorMap[key] === void 0)
      return false;
    if (!isMatch)
      return false;
    let found = validatorMap[key](filterableSpell[key], value);
    return found;
  }, true);
};
const shouldApplyLevel = (def, val) => {
  if (val.number === null || val.number === def.number)
    return false;
  if (val.equality === null || val.equality === def.equality)
    return false;
  return true;
};
const shouldApplyCharSpells = (def, val) => {
  if (val.isolate === def.isolate)
    return false;
  if (val.spellbook.length === def.spellbook.length)
    return false;
  return true;
};
const reduceFilters = (filters2) => {
  return Object.entries(filters2).reduce((filterArr, [key, value]) => {
    if (value.length === 0)
      return filterArr;
    const defaultVal = filterDefaults[key];
    if (deepEquals(value, defaultVal))
      return filterArr;
    if (typeof value !== typeof defaultVal)
      return filterArr;
    if (Array.isArray(value) !== Array.isArray(defaultVal))
      return filterArr;
    if (key === "level") {
      const apply = shouldApplyLevel(filterDefaults[key], value);
      return apply ? [...filterArr, { key, value }] : filterArr;
    }
    if (key === "characterSpells") {
      const apply = shouldApplyCharSpells(filterDefaults[key], value);
      return apply ? [...filterArr, { key, value }] : filterArr;
    }
    return [...filterArr, { key, value }];
  }, []);
};
const filterSpells = (pfSpells, customSpells2, filters2) => {
  let spells = [];
  const _a = filters2, { showCustom, showRulebook } = _a, _filters = __objRest(_a, ["showCustom", "showRulebook"]);
  if (showRulebook)
    spells = [...spells, ...pfSpells];
  if (showCustom)
    spells = [...spells, ...customSpells2];
  const appliedFilters2 = reduceFilters(_filters);
  if (appliedFilters2.length === 0)
    return spells;
  const filteredSpells2 = spells.filter((_spell) => {
    return applyFilters(_spell, appliedFilters2);
  });
  return filteredSpells2.sort();
};
const createFilterStore = () => {
  const { subscribe: subscribe2, set, update } = writable(clone(filterDefaults));
  return {
    subscribe: subscribe2,
    set,
    remove: (key) => {
      update((n) => {
        n[key] = clone(filterDefaults)[key];
        return n;
      });
    },
    clearAll: () => set(clone(filterDefaults))
  };
};
const sortName = (a, b) => {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
};
const filters = createFilterStore();
const filteredSpells = derived([pf_spells, customSpells, filters], ([$pf_spells, $customSpells, $filters]) => {
  return filterSpells($pf_spells, $customSpells, $filters).sort(sortName);
});
const appliedFilters = derived(filters, ($filters) => {
  return reduceFilters($filters);
});
const initialFormStore = {
  _id: "",
  name: "",
  type: "",
  level: "",
  traits: [],
  cast: "",
  action: [],
  range: "",
  area: "",
  duration: "",
  targets: "",
  description: "",
  source: "",
  mystery: "",
  savingThrow: "",
  patronTheme: "",
  components: [],
  traditions: [],
  custom: true
};
const createSpellFormStore = () => {
  const { subscribe: subscribe2, set, update } = writable(__spreadValues({}, initialFormStore));
  return {
    subscribe: subscribe2,
    set,
    update,
    reset: () => set(clone(initialFormStore)),
    editSpell: (spell) => set(clone(spell)),
    copySpell: (spell) => {
      let newSpell = clone(spell);
      delete newSpell._id;
      newSpell.custom = true;
      set(newSpell);
    },
    newSpell: () => {
      set(clone(initialFormStore));
    }
  };
};
const spellFormValues = createSpellFormStore();
derived([spellFormValues], ([$spellFormValues]) => {
  let tempFormVals = __spreadValues({}, $spellFormValues);
  delete tempFormVals.__v;
  delete tempFormVals._id;
  delete tempFormVals.nethysUrl;
  let messages = [];
  const validation = import_CustomSpell_d270f8cd.c.validate(tempFormVals, { abortEarly: false });
  if (!!validation && !!validation.error && !!validation.error.details) {
    validation.error.details.forEach((e) => messages.push(e.message.toString()));
  }
  return messages;
});
