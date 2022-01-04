export const searchMatch = (spellFields, query) => {
	if (!query) return true;

	const _searchText = query.toLowerCase().replace('-', ' ');
	const spellName = spellFields.name.toLowerCase().replace('-', ' ');
	const spellDescription = spellFields.description.toLowerCase().replace('-', ' ');

	if (spellName.includes(_searchText)) return true;
	if (spellDescription.includes(_searchText)) return true;

	return false;
};

export const characterSpellMatch = (spellId, query) => {
	const { isolate, spellbook } = query;

	if (!isolate) return true;

	return spellbook.includes(spellId);
};

export const levelMatch = (spellLevel, query) => {
	const spellLvl = parseInt(spellLevel);
	const queryLvl = parseInt(query.number);

	switch (query.equality) {
		case '<=':
			return spellLvl <= queryLvl;
		case '>=':
			return spellLvl >= queryLvl;
		case '=':
			return spellLvl === queryLvl;
	}
};

export const twoArraysMatchAll = (spellField, query) => {
	if (query.length === 0) return true;
	if (spellField.length === 0) return false;

	const found = query.filter((p) => {
		return spellField.includes(p);
	});

	if (found.length === undefined) return false;
	if (found.length === 0) return false;
	if (found.length !== query.length) return false;
	return true;
};

export const twoArraysMatchAny = (spellField, query) => {
	if(query.length === 0) return true;
	if(spellField.length === 0) return false;
	return query.reduce((matchFound, entry) => {
		if(matchFound) return matchFound;
		if(spellField.includes(entry)) return true;
		return matchFound;
	}, false);
}