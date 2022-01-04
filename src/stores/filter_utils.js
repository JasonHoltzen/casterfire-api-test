import {
	searchMatch,
	characterSpellMatch,
	levelMatch,
	twoArraysMatchAll,
	twoArraysMatchAny
} from './filterSpellMatch_utils.js';
import { deepEquals } from '../utils/deep.js';

export const filterDefaults = {
	showRulebook: true,
	showCustom: true,
	characterSpells: {
		isolate: false,
		spellbook: []
	},
	search: '',
	level: {
		equality: '',
		number: ''
	},
	actions: [],
	components: [],
	traditions: [],
	traits: [],
	type: ''
};

export const arrayToTruncatedText = (labelText, arr, characterLimit) => {
	let overflowCount = 0;
	return arr.reduce((previousText, newText, index) => {
		const isLast = index + 1 === arr.length;
		const separator = !isLast ? ', ' : '';
		let tempText = '';
		let overflowText = '';
		const isOver = previousText.length + newText.length > characterLimit;

		if (isOver) {
			overflowCount++;
		} else {
			tempText = newText + separator;
		}

		if (isLast) {
			overflowText = overflowCount > 0 ? `…(${overflowCount})` : '';
		}

		return previousText + tempText + overflowText;
	}, labelText);
};

export const getUiFilterText = (filter) => {
	const { key, value } = filter;
	switch (key) {
		case 'showRulebook':
			return 'No rulebook';
		case 'showCustom':
			return 'No custom';
		case 'characterSpells':
			return 'Only my spellbook';
		case 'search':
			return `Name/Description: ${value}`;
		case 'level':
			return `Spell level ${value.equality} ${value.number}`;
		case 'actions':
			return `Actions: ${value.join(', ')}`;
		case 'components':
			return arrayToTruncatedText('Components: ', value, 60);
		case 'traditions':
			return arrayToTruncatedText('Traditions: ', value, 60);
		case 'traits':
			return arrayToTruncatedText('Traits: ', value, 60);
		case 'type':
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
		characterSpells: s._id || '',
		search: { name: s.name, description: s.description },
		level: s.level || {},
		actions: s.action || [],
		components: s.components || [],
		traditions: s.traditions || [],
		traits: s.traits || [],
		type: s.type || ''
	};
};

export const applyFilters = (spell, filters) => {
	const filterableSpell = mapSpellToValidator(spell);

	return filters.reduce((isMatch, { key, value }) => {
		if (filterDefaults[key] === value) return isMatch;
		if (typeof validatorMap[key] === undefined) return false;
		if (!isMatch) return false;

		let found = validatorMap[key](filterableSpell[key], value);

		return found;
	}, true);
};

export const shouldApplyLevel = (def, val) => {
	if (val.number === null || val.number === def.number) return false;
	if (val.equality === null || val.equality === def.equality) return false;
	return true;
};

export const shouldApplyCharSpells = (def, val) => {
	if (val.isolate === def.isolate) return false;
	if (val.spellbook.length === def.spellbook.length) return false;
	return true;
};

export const reduceFilters = (filters) => {
	return Object.entries(filters).reduce((filterArr, [key, value]) => {
		if (value.length === 0) return filterArr;
		const defaultVal = filterDefaults[key];

		if (deepEquals(value, defaultVal)) return filterArr;
		if (typeof value !== typeof defaultVal) return filterArr;
		if (Array.isArray(value) !== Array.isArray(defaultVal)) return filterArr;

		//Individual validation for fringe cases
		if (key === 'level') {
			const apply = shouldApplyLevel(filterDefaults[key], value);
			return apply ? [...filterArr, { key, value }] : filterArr;
		}
		if (key === 'characterSpells') {
			const apply = shouldApplyCharSpells(filterDefaults[key], value);
			return apply ? [...filterArr, { key, value }] : filterArr;
		}

		return [...filterArr, { key, value }];
	}, []);
};

export const filterSpells = (pfSpells, customSpells, filters) => {
	let spells = [];

	// separate out the two filters which only apply to
	// different data sources
	const { showCustom, showRulebook, ..._filters } = filters;

	if (showRulebook) spells = [...spells, ...pfSpells];
	if (showCustom) spells = [...spells, ...customSpells];

	const appliedFilters = reduceFilters(_filters);
	if (appliedFilters.length === 0) return spells;
	const filteredSpells = spells.filter((_spell) => {
		return applyFilters(_spell, appliedFilters);
	});
	return filteredSpells;
};
