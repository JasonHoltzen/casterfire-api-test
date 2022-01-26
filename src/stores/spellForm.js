import { writable, derived } from 'svelte/store';
import customSpellSchema from '$schemas/CustomSpell.js';
import { clone } from '$utils/deep.js';

const initialFormStore = {
	_id: '',
	name: '',
	type: '',
	level: '',
	traits: [],
	cast: '',
	action: [],
	range: '',
	area: '',
	duration: '',
	targets: '',
	description: '',
	source: '',
	mystery: '',
	savingThrow: '',
	patronTheme: '',
	components: [],
	traditions: [],
	custom: true
};

const createSpellFormStore = () => {
	const { subscribe, set, update } = writable({ ...initialFormStore });

	return {
		subscribe,
		set,
		update,
		reset: () => set(clone(initialFormStore)),
		editSpell: (spell) => set(clone(spell)),
		copySpell: (spell) => {
			let newSpell = clone(spell);
			delete newSpell._id;
			newSpell.custom = true;
			set(newSpell);
		},
		newSpell: () => {
			set(clone(initialFormStore));
		}
	};
};

export const spellFormValues = createSpellFormStore();
export const spellFormErrors = derived([spellFormValues], ([$spellFormValues]) => {
	let tempFormVals = { ...$spellFormValues };
	delete tempFormVals.__v;
	delete tempFormVals._id;
	delete tempFormVals.nethysUrl;
	let messages = [];

	const validation = customSpellSchema.validate(tempFormVals, { abortEarly: false });

	if (!!validation && !!validation.error && !!validation.error.details) {
		validation.error.details.forEach((e) => messages.push(e.message.toString()));
	}
	return messages;
});
