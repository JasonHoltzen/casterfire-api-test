// == Available stores == //
// pf_spells //
// filters //
// selectedSpell //
// filteredSpells //

import { writable } from 'svelte/store';

const spellDefaults = [];
const selectedSpellDefaults = {};

const createSelectedSpellStore = () => {
	const { subscribe, set } = writable(selectedSpellDefaults);
	return {
		subscribe,
		set,
		reset: () => set(selectedSpellDefaults)
	};
};

const createPfSpellsStore = () => {
	const { subscribe, set } = writable(spellDefaults);
	return {
		subscribe,
		set
	};
};

// Store exports
export const pf_spells = createPfSpellsStore();
export const selectedSpell = createSelectedSpellStore();
