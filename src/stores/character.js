import { writable } from 'svelte/store';

// == AVAILABLE CHARACTER STORES == //
// characters //
// selectedCharacter //
// currentCharacter (derived from Character, but with class info populated) //
// import { selectedSpell } from './spells.js';
const charactersDefaults = [{ characterName: '' }];
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

const deleteCharacter = (characterList, id) => {
	return characterList.filter((char) => {
		return char._id !== id;
	});
};

const createSelectedCharacterStore = () => {
	const { subscribe, set } = writable(selectedCharacterDefaults);
	return {
		subscribe,
		set,
		reset: () => set(selectedCharacterDefaults)
	};
};

const createCharactersStore = () => {
	const { subscribe, set, update } = writable({ ...charactersDefaults });
	return {
		subscribe,
		set,
		update,
		reset: () => set({ ...charactersDefaults }),
		deleteCharacter: (id) => update((list) => deleteCharacter(list, id))
	};
};

export const characters = createCharactersStore();
export const selectedCharacter = createSelectedCharacterStore();