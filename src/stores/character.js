import { writable } from 'svelte/store';
import { dataError } from '$stores/errors.js';

// == AVAILABLE CHARACTER STORES == //
// characters //
// selectedCharacter //
// currentCharacter (derived from Character, but with class info populated) //
// import { selectedSpell } from './spells.js';
const selectedCharacterDefaults = {
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

// base selectedCharacter store
const createSelectedCharacterStore = () => {
	const { subscribe, set } = writable(selectedCharacterDefaults);
	return {
		subscribe,
		set,
		reset: () => set(selectedCharacterDefaults)
	};
};

// methods for character
const getCharacterList = async () => {
	try {
		const res = await fetch('/api/characters');

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
		const res = await fetch('/api/characters', {
			method: 'POST',
			body: JSON.stringify({ character: newChar }),
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

const deleteCharacter = async (id) => {
	try {
		const res = await fetch('/api/characters', {
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
		dataError.show('Unable to delete user');
	}
};

const addSpellToCharacter = async (spellId, characterId) => {
	try {
		const res = await fetch('/api/characters/selected/addSpell', {
			method: 'POST',
			body: JSON.stringify({ spellId, characterId }),
			headers: { 'Content-Type': 'application/json' }
		});
		if (res.ok) {
			const data = await res.json();
			return data;
			// find a good place to run this after update (see spellViewer):	updateCharacterList(updatedCharacter);
		}
	} catch (err) {
		console.log(err);
		dataError.show(err);
	}
};

const removeSpellFromCharacter = async (spellId, characterId) => {
	try {
		const res = await fetch('/api/characters/selected/removeSpell', {
			method: 'POST',
			body: JSON.stringify({ spellId, characterId }),
			headers: { 'Content-Type': 'application/json' }
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

// base character store
const createCharactersStore = () => {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		reset: () => {
			set([]);
		},
		populate: async () => {
			let data = await getCharacterList();
			let { characters } = await data;

			if (characters && characters.length > 0) {
				set(characters);
			} else {
				set([]);
			}
		},
		saveOne: async (newCharacter) => {
			let data = await saveCharacter(newCharacter);
			let { character } = data;

			update((charList) => {
				if (character) {
					//new character
					if (!newCharacter?._id) {
						return [...charList, character];
					}
					//existing character
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

			if (character) selectedCharacter.set(character);
			else selectedCharacter.reset();
		},
		deleteOne: async (idToDelete) => {
			let data = await deleteCharacter(idToDelete);
			let { id } = data;
			update((charList) => {
				// remove deleted item from store
				if (id) {
					return charList.filter((char) => {
						return char._id !== id;
					});
				} else {
					if (!charList.length > 0) {
						return [];
					}
					//deleted item wasn't found, just return the store.
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
			// This function is designed to be ran after a custom spell is deleted,
			// to remove the spell from all.
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

export const characters = createCharactersStore();
export const selectedCharacter = createSelectedCharacterStore();
