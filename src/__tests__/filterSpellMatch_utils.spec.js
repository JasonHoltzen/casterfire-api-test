import {
	searchMatch,
	characterSpellMatch,
	levelMatch,
	twoArraysMatchAll,
	twoArraysMatchAny
} from '../stores/filterSpellMatch_utils';

/* === searchText Tests === */
test('searchText: found spell', () => {
	const name = 'Charm Bacon';
	const description =
		'Veniam capicola sint biltong bacon aliqua dolore officia pork belly magna ground round.';

	expect(searchMatch({ name, description }, 'arm')).toBe(true);
	expect(searchMatch({ name, description }, 'BACON')).toBe(true);
	expect(searchMatch({ name, description }, 'biltong')).toBe(true);
});

test('searchText: List has no spell matching search text', () => {
	const name = 'Charm Bacon';
	const description =
		'Veniam capicola sint biltong bacon aliqua dolore officia pork belly magna ground round.';

	expect(searchMatch({ name, description }, 'turkey')).toBe(false);
});

/* === characterSpellMatch Tests === */
test('characterSpellMatch: spell found', () => {
	const validId = '6023a6beb6666307be6f5dc7';
	const invalidId = 'abc123321zyx';
	const withTwoSpells = {
		isolate: true,
		spellbook: ['6023a6beb6666307be6f5d1c', '6023a6beb6666307be6f5dc7']
	};
	const withAllSpells = {
		isolate: true,
		spellbook: [
			'6023a6beb6666307be6f5d1c',
			'6023a6beb6666307be6f5dc7',
			'6023a6beb6666307be6f5d8c',
			'6023a6beb6666307be6f5d1c',
			'42045cad99213fadcf13ffa7',
			'b6c1e6f1499d57eaa86a4fcb'
		]
	};
	const notIsolated = {
		isolate: false,
		spellbook: [
			'6023a6beb6666307be6f5d1c',
			'6023a6beb6666307be6f5dc7',
			'6023a6beb6666307be6f5d8c',
			'6023a6beb6666307be6f5d1c',
			'42045cad99213fadcf13ffa7',
			'b6c1e6f1499d57eaa86a4fcb'
		]
	};

	expect(characterSpellMatch(validId, notIsolated)).toBe(true);
	expect(characterSpellMatch(invalidId, notIsolated)).toBe(true);
	expect(characterSpellMatch(validId, withAllSpells)).toBe(true);
	expect(characterSpellMatch(validId, withTwoSpells)).toBe(true);
});
test('characterSpellMatch: spell not found', () => {
	const invalidId = 'abc123321zyx';
	const validIdNotInList = '6023a6beb6666307be6f5d8c';
	const withTwoSpells = {
		isolate: true,
		spellbook: ['6023a6beb6666307be6f5d1c', '6023a6beb6666307be6f5dc7']
	};
	const withAllSpells = {
		isolate: true,
		spellbook: [
			'6023a6beb6666307be6f5d1c',
			'6023a6beb6666307be6f5dc7',
			'6023a6beb6666307be6f5d8c',
			'6023a6beb6666307be6f5d1c',
			'42045cad99213fadcf13ffa7',
			'b6c1e6f1499d57eaa86a4fcb'
		]
	};
	const withNoSpells = {
		isolate: true,
		spellbook: []
	};

	expect(characterSpellMatch(validIdNotInList, withNoSpells)).toBe(false);
	expect(characterSpellMatch(invalidId, withAllSpells)).toBe(false);
	expect(characterSpellMatch(validIdNotInList, withTwoSpells)).toBe(false);
});

/* === levelMatch Tests === */
test('levelMatch: level equal value', () => {
	expect(levelMatch(3, { number: 3, equality: '=' })).toBe(true);
});
test('levelMatch: level not equal value', () => {
	expect(levelMatch(5, { number: 3, equality: '=' })).toBe(false);
	expect(levelMatch(3, { number: 5, equality: '=' })).toBe(false);
});
test('levelMatch: level lessThan or equal value', () => {
	expect(levelMatch(3, { number: 3, equality: '<=' })).toBe(true);
	expect(levelMatch(10, {number: 10, equality: '<='})).toBe(true);
	expect(levelMatch(3, { number: 5, equality: '<=' })).toBe(true);
});
test('levelMatch: level not lessThan or equal value', () => {
	expect(levelMatch(5, { number: 3, equality: '<=' })).toBe(false);
});
test('levelMatch: level greaterThan or equal value', () => {
	expect(levelMatch(3, { number: 3, equality: '>=' })).toBe(true);
	expect(levelMatch(5, { number: 3, equality: '>=' })).toBe(true);
});
test('levelMatch: level not greaterThan or equal value', () => {
	expect(levelMatch(3, { number: 5, equality: '>=' })).toBe(false);
	expect(levelMatch(2, { number: 10, equality: '>=' })).toBe(false);
});

//Generic class for cross referencing two arrays
test('twoArraysMatchAll: match found', () => {
	const stub = ['apples', 'bananas', 'oranges', 'peaches', 'plums', 'pears'];

	expect(twoArraysMatchAll(stub, ['oranges'])).toBe(true);
	expect(twoArraysMatchAll(stub, ['apples', 'bananas', 'oranges'])).toBe(true);
});

test('twoArraysMatchAll: "found" if no query present', () => {
	const stub = ['apples', 'bananas'];
	expect(twoArraysMatchAll(stub, [])).toBe(true);
	expect(twoArraysMatchAll([], [])).toBe(true);
});

test('twoArraysMatchAll: no matches found', () => {
	const stub = ['apples', 'bananas', 'oranges', 'peaches', 'plumbs', 'pears'];

	expect(twoArraysMatchAll(stub, ['broccoli'])).toBe(false);
	expect(twoArraysMatchAll(stub, ['broccoli', 'carrots', 'apricots'])).toBe(false);
	expect(twoArraysMatchAll(stub, ['apples', 'broccoli'])).toBe(false);
});

test('twoArraysMatchAny: match found', () => {
	const stub = ['apples', 'bananas', 'oranges', 'peaches', 'plums', 'pears'];

	expect(twoArraysMatchAny(stub, ['oranges'])).toBe(true);
	expect(twoArraysMatchAny(stub, ['broccoli', 'peaches', 'green beans' ])).toBe(true);
});

test('twoArraysMatchAny: "found" if no query present', () => {
	const stub = ['apples', 'bananas'];
	expect(twoArraysMatchAny(stub, [])).toBe(true);
	expect(twoArraysMatchAny([], [])).toBe(true);
});

test('twoArraysMatchAny: no matches found', () => {
	const stub = ['apples', 'bananas', 'oranges', 'peaches', 'plums', 'pears'];
	
	expect(twoArraysMatchAny(stub, ['broccoli', 'carrots', 'green beans', 'ice cream'])).toBe(false);
	expect(twoArraysMatchAny([], [stub])).toBe(false);
});

