import {
	filterSpells,
	applyFilters,
	reduceFilters,
	shouldApplyLevel,
	shouldApplyCharSpells
} from '../stores/filter_utils';

import { _spells } from '../__stubs/_spells.js';
import { _filters } from '../__stubs/_filters.js';

test('shouldApplyLevel: All', () => {
	const _default = { number: '', equality: '' };
	expect(shouldApplyLevel(_default, { number: '', equality: '' })).toBe(false);
	expect(shouldApplyLevel(_default, { number: null, equality: '>=' })).toBe(false);
	expect(shouldApplyLevel(_default, { number: '3', equality: '' })).toBe(false);
	expect(shouldApplyLevel(_default, { number: '3', equality: '>3' })).toBe(true);
});

test('shouldApplyCharSpells: All', () => {
	const _default = { isolate: false, spellbook: [] };
	expect(shouldApplyCharSpells(_default, { isolate: false, spellbook: [] })).toBe(false);
	expect(shouldApplyCharSpells(_default, { isolate: true, spellbook: [] })).toBe(false);
	expect(shouldApplyCharSpells(_default, { isolate: false, spellbook: ['bob123'] })).toBe(false);
	expect(shouldApplyCharSpells(_default, { isolate: true, spellbook: ['bob123'] })).toBe(true);
});

test('applyFilters: true - spell matches all filters', () => {
	let appliedFilters = [
		{ key: 'search', value: 'aberrant' },
		{
			key: 'characterSpells',
			value: { isolate: true, spellbook: ['6023a6beb6666307be6f5d8c', 'AABCD', 'EeFGH'] }
		},
		{ key: 'level', value: { equality: '=', number: 3 } },
		{ key: 'actions', value: ['3'] },
		{ key: 'components', value: ['verbal'] },
		{ key: 'traditions', value: ['occult'] },
		{ key: 'traits', value: ['enchantment', 'mental'] },
		{ key: 'type', value: 'Focus' }
	];

	const shouldShow = applyFilters(_spells.one.pfcr_focus, appliedFilters);
	expect(shouldShow).toBe(true);
});

test('applyFilters: false - spell does not match', () => {
	const appliedFilters = reduceFilters(_filters.match.none);
	expect(applyFilters(_spells.one.pfcr_focus, appliedFilters)).toBe(false);
});

test('reduceFilters: none applied', () => {
	expect(reduceFilters(_filters.none)).toMatchObject([]);
	expect(reduceFilters(_filters.mismatch.search)).toMatchObject([]);
	expect(reduceFilters(_filters.mismatch.level)).toMatchObject([]);
	expect(reduceFilters(_filters.mismatch.spellbook)).toMatchObject([]);
});

test('reduceFilters: valid values - all applied', () => {
	const matchResult = reduceFilters(_filters.match.all);

	expect(matchResult).toHaveLength(8);
	expect(matchResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'characterSpells',
				value: expect.objectContaining({
					isolate: true,
					spellbook: expect.arrayContaining([
						'b6c1e6f1499d57eaa86a4fcb',
						'6023a6beb6666307be6f5dc7',
						'6023a6beb6666307be6f5d8c'
					])
				})
			}),
			expect.objectContaining({
				key: 'search',
				value: 'Aberrant'
			}),
			expect.objectContaining({
				key: 'level',
				value: expect.objectContaining({ equality: '=', number: '3' })
			}),
			expect.objectContaining({
				key: 'actions',
				value: expect.arrayContaining(['1'])
			}),
			expect.objectContaining({
				key: 'components',
				value: expect.arrayContaining(['verbal'])
			}),
			expect.objectContaining({
				key: 'traditions',
				value: expect.arrayContaining(['occult'])
			}),
			expect.objectContaining({
				key: 'traits',
				value: expect.arrayContaining(['mental', 'enchantment'])
			}),
			expect.objectContaining({
				key: 'type',
				value: 'Focus'
			})
		])
	);
});

test('reduceFilters: bad values - all applied', () => {
	const noMatchResult = reduceFilters(_filters.match.none);

	expect(noMatchResult).toHaveLength(8);
	expect(noMatchResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'characterSpells',
				value: expect.objectContaining({
					isolate: true,
					spellbook: expect.arrayContaining(['abc123321zyx'])
				})
			}),
			expect.objectContaining({ key: 'search', value: 'Uncle Bob' }),
			expect.objectContaining({
				key: 'level',
				value: expect.objectContaining({ number: '9000', equality: '>=' })
			}),
			expect.objectContaining({
				key: 'actions',
				value: expect.arrayContaining(['8'])
			}),
			expect.objectContaining({
				key: 'components',
				value: expect.arrayContaining(['vorpal'])
			}),
			expect.objectContaining({
				key: 'traditions',
				value: expect.arrayContaining(['christmas', 'thanksgiving'])
			}),
			expect.objectContaining({
				key: 'traits',
				value: expect.arrayContaining(['julius', 'caesar'])
			}),
			expect.objectContaining({
				key: 'type',
				value: 'very slowly'
			})
		])
	);
});

test('reduceFilters: characterSpells only', () => {
	const spellbookResult = reduceFilters(_filters.match.one.characterSpells);

	expect(spellbookResult).toHaveLength(1);
	expect(spellbookResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'characterSpells',
				value: expect.objectContaining({
					isolate: true,
					spellbook: expect.arrayContaining([
						'b6c1e6f1499d57eaa86a4fcb',
						'6023a6beb6666307be6f5dc7'
					])
				})
			})
		])
	);
});

test('reduceFilters: level only', () => {
	const levelResult = reduceFilters(_filters.match.one.level);

	expect(levelResult).toHaveLength(1);
	expect(levelResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'level',
				value: expect.objectContaining({
					number: 3,
					equality: '='
				})
			})
		])
	);
});

test('reduceFilters: level missing a value is not applied', () => {
	const noEquality = reduceFilters({
		showRulebook: true,
		showCustom: true,
		characterSpells: {
			isolate: false,
			spellbook: []
		},
		search: '',
		level: {
			equality: '',
			number: '9'
		},
		actions: [],
		components: [],
		traditions: [],
		traits: [],
		type: ''
	});

	const noNumber = reduceFilters({
		showRulebook: true,
		showCustom: true,
		characterSpells: {
			isolate: false,
			spellbook: []
		},
		search: '',
		level: {
			equality: '<=',
			number: ''
		},
		actions: [],
		components: [],
		traditions: [],
		traits: [],
		type: ''
	});

	expect(noEquality).toHaveLength(0);
	expect(noNumber).toHaveLength(0);
});

test('reduceFilters: search only', () => {
	const searchResult = reduceFilters(_filters.match.one.search);

	expect(searchResult).toHaveLength(1);
	expect(searchResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'search',
				value: 'Aberrant'
			})
		])
	);
});

test('reduceFilters: traits only', () => {
	const traitsResult = reduceFilters(_filters.match.one.traits);

	expect(traitsResult).toHaveLength(1);
	expect(traitsResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'traits',
				value: expect.arrayContaining(['enchantment', 'mental'])
			})
		])
	);
});

test('reduceFilters: Good and bad data mixed', () => {
	const mixedResult = reduceFilters(_filters.match.one.badAndGood);

	expect(mixedResult).toHaveLength(1);
	expect(mixedResult).toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				key: 'search',
				value: 'Aberrant'
			})
		])
	);
});

test('filterSpells: default/none/show all', () => {
	const result = filterSpells(_spells.pfcr.default, _spells.custom.default, _filters.none);

	expect(result.length).toBe(6);
	expect(result).toMatchObject(_spells.all.default);
});

test('filterSpells: show only custom spells', () => {
	const result = filterSpells(_spells.pfcr.default, _spells.custom.default, _filters.customOnly);

	expect(result.length).toBe(3);
	expect(result).toMatchObject(_spells.custom.default);
});

test('filterSpells: show only Pathfinder spells', () => {
	const result = filterSpells(_spells.pfcr.default, _spells.custom.default, _filters.pfOnly);

	expect(result.length).toBe(3);
	expect(result).toMatchObject(_spells.pfcr.default);
});
