import { writable } from 'svelte/store';

const addOrUpdateCustomSpell = (customSpells, spellToUpdate) => {
	let isFound = false;
	if (customSpells.length > 0) {
		customSpells = customSpells.map((s) => {
			if (s._id === spellToUpdate._id) {
				isFound = true;
				return spellToUpdate;
			} else {
				return s;
			}
		});
	}
	return isFound ? [...customSpells] : [...customSpells, spellToUpdate];
};

const deleteCustomSpell = (customSpells, spellToDelete) => {
	return customSpells.filter((s) => s._id !== spellToDelete._id);
};

const createCustomSpellStore = () => {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		set,
		addOrUpdate: (spell) => update((n) => addOrUpdateCustomSpell(n, spell)),
		deleteSpell: (spell) => update((n) => deleteCustomSpell(n, spell))
	};
};

export const customSpells = createCustomSpellStore();
