// == Available stores == //
// pf_spells //
// filters //
// selectedSpell //
// filteredSpells //

import { writable } from 'svelte/store';
import { dataError } from '$stores/errors.js';
import { browser } from '$app/env';

const spellDefaults = [];
const selectedSpellDefaults = {};

const saveSpellsToLocal = (key, value, ttl) => {
	const now = new Date();
	const item = {
		value: value,
		expiry: now.getTime() + ttl
	};
	window.localStorage.setItem(key, JSON.stringify(item));
};

const pullSpellsFromLocal = (key) => {
	const itemStr = window.localStorage.getItem(key);
	if (!itemStr) return undefined;
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		window.localStorage.removeItem(key);
		return null;
	}
	return item.value;
};

const getSpells = async () => {
	let spells = [];
	if (browser) {
		const localStorageSpells = pullSpellsFromLocal('pf_spells');
		if (localStorageSpells) {
			spells = localStorageSpells;
			console.log('spells pulled from localStorage!');
		} else {
			console.log('no spells found in local storage');
		}
	}
	if (!spells.length > 0) {
		console.log('pulling spells from server');
		spells = await fetch('/api/spells')
			.then((r) => r.json().then((r) => r.spells))
			.catch((err) => dataError.showFatal(err));

		if (browser && spells.length > 0) {
			const cacheTime = 86400000; //1 day
			saveSpellsToLocal('pf_spells', spells, cacheTime);
			console.log('spells saved in local storage');
		}
	}
	return spells;
};

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
		set,
		populate: async () => {
			set(await getSpells());
		}
	};
};

// Store exports
export const pf_spells = createPfSpellsStore();
export const selectedSpell = createSelectedSpellStore();
