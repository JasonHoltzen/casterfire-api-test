import { writable, derived } from 'svelte/store';
import { customSpells } from '$stores/customSpells.js';
import { pf_spells } from '$stores/spells.js';
import { clone } from '$utils/deep.js';
import { filterSpells, filterDefaults, reduceFilters } from './filter_utils.js';

const createFilterStore = () => {
	const { subscribe, set, update } = writable(clone(filterDefaults));
	return {
		subscribe,
		set,
		remove: (key) => {
			update((n) => {
				n[key] = clone(filterDefaults)[key];
				return n;
			});
		},
		clearAll: () => set(clone(filterDefaults))
	};
};

const sortName = (a, b) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};

export const filters = createFilterStore();

export const filteredSpells = derived(
	[pf_spells, customSpells, filters],
	([$pf_spells, $customSpells, $filters]) => {
		return filterSpells($pf_spells, $customSpells, $filters).sort(sortName);
	}
);

export const appliedFilters = derived(filters, ($filters) => {
	return reduceFilters($filters);
});
