import { writable } from 'svelte/store';
import { characters } from '$stores/character.js';
import { dataError } from '$stores/errors.js';
import { selectedSpell } from '$stores/spells.js';

const getCustomSpellList = async () => {
	try {
		const res = await fetch('/api/spells/custom', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
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
		const res = await fetch('/api/spells/custom', {
			method: 'POST',
			body: JSON.stringify({ customSpell: newSpell }),
			headers: { 'Content-Type': 'application/json' }
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
		const res = await fetch('/api/spells/custom', {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json'
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
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		set,
		reset: () => {
			set([]);
		},
		populate: async () => {
			let data = await getCustomSpellList();
			let { customSpells } = await data;

			if (customSpells && customSpells.length > 0) {
				set(customSpells);
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
					//existing spell
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
						return [...spells, { ...customSpell }];
					}
				} else {
					return spellList;
				}
			});

			if (customSpell) selectedSpell.set(customSpell);
			else selectedSpell.reset();
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

export const customSpells = createCustomSpellStore();
