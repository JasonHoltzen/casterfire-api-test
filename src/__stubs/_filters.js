import { filterDefaults } from '../stores/filter_utils.js';

const clone = (obj) => JSON.parse(JSON.stringify(obj));

const customOnly = () => {
	let filters = clone(filterDefaults);
	filters.showRulebook = false;
	return filters;
};

const pfOnly = () => {
	let filters = clone(filterDefaults);
	filters.showCustom = false;
	return filters;
};

const spellbookOnly = () => {
	let filters = clone(filterDefaults);
	filters.characterSpells.isolate = true;
	filters.characterSpells.spellbook = ['b6c1e6f1499d57eaa86a4fcb', '6023a6beb6666307be6f5dc7'];
	return filters;
};

const matchAllFilters = () => {
	let filters = clone(filterDefaults);
	filters.search = 'Aberrant';
	filters.level = {
		equality: '=',
		number: '3'
	};
	filters.actions = ['1'];
	filters.characterSpells.isolate = true;
	filters.characterSpells.spellbook = [
		'b6c1e6f1499d57eaa86a4fcb',
		'6023a6beb6666307be6f5dc7',
		'6023a6beb6666307be6f5d8c'
	];
	filters.components = ['verbal'];
	filters.traditions = ['occult'];
	filters.traits = ['enchantment', 'mental'];
	filters.type = 'Focus';
	return filters;
};

const matchLevel = () => {
	let filters = clone(filterDefaults);
	filters.level.number = 3;
	filters.level.equality = '=';
	return filters;
};

const matchSearch = () => {
	let filters = clone(filterDefaults);
	filters.search = 'Aberrant';
	return filters;
};

const matchTraits = () => {
	let filters = clone(filterDefaults);
	filters.traits = ['enchantment', 'mental'];
	return filters;
};

const matchNoFilters = () => {
	let filters = clone(filterDefaults);
	filters.search = 'Uncle Bob';
	filters.level.number = '9000';
	filters.level.equality = '>=';
	filters.actions = ['8'];
	filters.characterSpells.isolate = true;
	filters.characterSpells.spellbook = ['abc123321zyx'];
	filters.components = ['vorpal'];
	filters.traditions = ['thanksgiving', 'christmas'];
	filters.traits = ['julius', 'caesar'];
	filters.type = 'very slowly';
	return filters;
};

const mismatchSearch = () => {
	let filters = clone(filterDefaults);
	filters.search = ['Aberrant'];
	return filters;
};

const mismatchSpellbook = () => {
	let filters = clone(filterDefaults);
	filters.characterSpells = [false, '6023a6beb6666307be6f5d8c'];
	return filters;
};

const mismatchLevel = () => {
	let filters = clone(filterDefaults);
	filters.level = [3, '>='];
	return filters;
};

const matchGoodAndBadData = () => {
	let filters = clone(filterDefaults);
	filters.search = 'Aberrant';
	filters.level = [3, '>='];
	return filters;
};

export const _filters = {
	none: clone(filterDefaults),
	customOnly: customOnly(),
	pfOnly: pfOnly(),
	characterSpellsOnly: spellbookOnly(),
	match: {
		all: matchAllFilters(),
		none: matchNoFilters(),
		one: {
			characterSpells: spellbookOnly(),
			level: matchLevel(),
			search: matchSearch(),
			traits: matchTraits(),
			badAndGood: matchGoodAndBadData()
		}
	},
	mismatch: {
		search: mismatchSearch(),
		level: mismatchLevel(),
		spellbook: mismatchSpellbook()
	}
};
