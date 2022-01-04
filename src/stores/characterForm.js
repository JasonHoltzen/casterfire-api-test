import { writable, derived } from 'svelte/store';
import { staticLists } from '$stores/ui.js';
import characterSchema from '$schemas/Character.js';

const initFormStore = {
	spellbook: [],
	_id: '',
	active: true,
	alignment: '',
	ancestry: '',
	archetype: '',
	focus: '',
	characterClass: '',
	characterName: '',
	level: 1,
	user: ''
};

const createCharacterFormStore = () => {
	const { subscribe, set } = writable(initFormStore);

	return {
		subscribe,
		set,
		reset: () => set({ ...initFormStore }),
		save: (n) => {
			set(n);
		}
	};
};

const calculateDropdowns = (characterFormValues, staticLists) => {
	const classes = staticLists.classes.map((_class) => {
		return _class.name;
	});

	let selectedClass = staticLists.classes.find((_class) => {
		return _class.name === characterFormValues.characterClass;
	});

	let focuses;

	if (!!selectedClass && selectedClass.focusRef !== undefined) {
		let classFullFocus = staticLists.focuses.find((_focus) => {
			return _focus.name === selectedClass.focusRef;
		});
		focuses = [...classFullFocus.options].map((_opt) => {
			return _opt.name;
		});
	} else {
		focuses = [];
	}

	let archetypes = staticLists.archetypes.map((arch) => {
		return arch.name;
	});

	return {
		classes,
		focuses,
		ancestries: [...staticLists.ancestries],
		archetypes,
		alignments: [...staticLists.alignments]
	};
};

export const characterFormValues = createCharacterFormStore();

export const dropdownValues = derived(
	[characterFormValues, staticLists],
	([$characterFormValues, $staticLists]) => {
		return calculateDropdowns($characterFormValues, $staticLists);
	}
);

export const characterFormErrors = derived([characterFormValues], ([$characterFormValues]) => {
	const tempFormVals = { ...$characterFormValues };
	let messages = [];
	delete tempFormVals.__v;

	const validation = characterSchema.validate(tempFormVals, { abortEarly: false });

	if (!!validation && !!validation.error && !!validation.error.details) {
		validation.error.details.forEach((e) => messages.push(e.message.toString()));
	}
	return messages;
});
