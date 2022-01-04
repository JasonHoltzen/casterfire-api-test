import { writable } from 'svelte/store';
const initErrors = {
	visible: false,
	fatal: false,
	message: '',
	code: ''
};

const createDataErrorStore = () => {
	const { subscribe, set, update } = writable(initErrors);
	return {
		set,
		subscribe,
		show: (message) => {
			set({ ...initErrors });
			set({ visible: true, fatal: false, code: undefined, message });
		},
		hide: () => {
			update((n) => {
				n.visible = false;
				return n;
			});
		},
		showFatal: (message) => {
			set({ ...initErrors });
			set({ visible: true, fatal: true, code: undefined, message });
		},
		showFull: (message, code) => {
			set({ ...initErrors });
			set({ visible: true, fatal: true, message, code });
		},
		reset: () => {
			update((n) => {
				let { visible, ...rest } = n;
				visible = false;
				return { ...rest, visible };
			});
		}
	};
};
export const dataError = createDataErrorStore();
