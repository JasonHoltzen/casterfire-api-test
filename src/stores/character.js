import { writable } from 'svelte/store';
import { dataError } from '$stores/errors.js';

// == AVAILABLE CHARACTER STORES == //
// characters //
// selectedCharacter //
// currentCharacter (derived from Character, but with class info populated) //
// import { selectedSpell } from './spells.js';
const charactersDefaults = [];
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

const getCharacters = async () => {
	let characters = [];
	characters = await fetch('/api/characters')
		.then((r) => r.json().then((r) => r.characters))
		.catch((err) => {
			dataError.showFatal(`CHARACTER ERROR: ${err}`);
		});

	return characters;
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
	const { subscribe, set, update } = writable([...charactersDefaults]);
	return {
		subscribe,
		set,
		update,
		populate: async () => {
			set(await getCharacters());
		},
		reset: () => set({ ...charactersDefaults }),
		deleteCharacter: (id) => update((characterList) => deleteCharacter(characterList, id))
	};
};

export const characters = createCharactersStore();
export const selectedCharacter = createSelectedCharacterStore();
