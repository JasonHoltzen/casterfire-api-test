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

const createSelectedCharacterStore = () => {
	const { subscribe, set } = writable(selectedCharacterDefaults);
	return {
		subscribe,
		set,
		reset: () => set(selectedCharacterDefaults)
	};
};

const getCharacters = async () => {
	try {
		const res = await fetch('/api/characters', {
			method: 'GET',
			headers: {
				'Content-Type': 'application / json'
			}
		});

		if (res.ok) {
			let data = await res.json();
			console.log(data);
			return data;
		}
	} catch (err) {
		dataError.show(err);
	}
};

const addOrUpdateInDb = async (newChar) => {
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

const createCharactersStore = () => {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		set,
		update,
		populate: async () => {
			let data = await getCharacters();
			let { characters } = data;

			if (characters && characters.length > 0) {
				set(characters);
			} else {
				set([]);
			}
		},
		addOrUpdateCharacter: async (newCharacter) => {
			let data = await addOrUpdateInDb(newCharacter);
			let { character } = data;
			update((charList) => {
				if (character) {
					//new character
					if (!newCharacter._id) {
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
		},
		deleteCharacter: async (idToDelete) => {
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
		}
	};
};

export const characters = createCharactersStore();
export const selectedCharacter = createSelectedCharacterStore();
