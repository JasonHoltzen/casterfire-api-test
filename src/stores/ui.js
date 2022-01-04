import { writable, readable } from 'svelte/store';
import _staticLists from './staticLists.js';
import _staticTraitsSorted from './staticTraits.js';

const modalDefaults = {
	show: false,
	component: '',
	blockClose: false,
	componentProps: {}
};

const spellEditUiDefaults = {
	show: false,
	isSpellNew: false
};

const createModalUi = () => {
	const { subscribe, set } = writable(modalDefaults);
	return {
		subscribe,
		set,
		hide: () => set({ ...modalDefaults })
	};
};

const createCustomSpellUIStore = () => {
	const { subscribe, set, update } = writable(spellEditUiDefaults);

	return {
		subscribe,
		set,
		update,
		showNew: () =>
			update((n) => {
				n.isSpellNew = true;
				n.show = true;
				return n;
			}),
		showCopy: () =>
			update((n) => {
				n.isSpellNew = false;
				n.show = true;
				return n;
			}),
		hide: () => set({ ...spellEditUiDefaults })
	};
};

export const modal = createModalUi();
export const errors = writable({});
export const spellEditUi = createCustomSpellUIStore();
export const staticLists = readable(_staticLists);
export const staticTraits = readable(_staticTraitsSorted);
export const winWidth = writable(0);
