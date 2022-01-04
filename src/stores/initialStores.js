const ui = {
	modal: {
		show: false,
		component: '',
		blockClose: false,
		componentProps: {}
	},
	console: {
		expandAll: true,
		show: true
	}
};
const characterForm = {
	errors: {},
	values: {
		characterName: '',
		characterClass: '',
		focus: '',
		level: 1,
		archetype: '',
		ancestry: '',
		alignment: '',
		active: true
	}
};
const selectedCharacter = {
	spellbook: [],
	_id: null,
	active: true,
	alignment: '',
	ancestry: '',
	archetype: '',
	characterClass: '',
	characterName: '',
	focus: '',
	level: 1,
	user: {
		_id: null
	}
};
const characters = [{ characterName: '' }];
const pf_spells = { dbVersion: 0, spells: [{ name: 'no spells yet' }] };

const selectedSpell = {};

const filters = {
	search: '',
	level: 1,
	keyword: '',
	character: false,
	lists: {
		rulebook: true,
		custom: true,
		personal: true
	},
	equality: '<=',
	classes: []
};

export const INIT_STORE = {
	ui,
	characterForm,
	selectedSpell,
	selectedCharacter,
	characters,
	pf_spells,
	filters
};
