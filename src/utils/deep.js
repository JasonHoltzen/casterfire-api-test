// Code for deep equals written by Ebrayim Byagowi
// in answer to question on StackOverflow.
// https://stackoverflow.com/a/16788517/5071409
export const deepEquals = (x, y) => {
	if (x === null || x === undefined || y === null || y === undefined) {
		return x === y;
	}
	if (x.constructor !== y.constructor) {
		return false;
	}
	if (x instanceof Function) {
		return x === y;
	}
	if (x instanceof RegExp) {
		return x === y;
	}
	if (x === y || x.valueOf() === y.valueOf()) {
		return true;
	}
	if (Array.isArray(x) && x.length !== y.length) {
		return false;
	}
	if (x instanceof Date) {
		return false;
	}
	if (!(x instanceof Object)) {
		return false;
	}
	if (!(y instanceof Object)) {
		return false;
	}

	// recursive object equality check
	var p = Object.keys(x);
	return (
		Object.keys(y).every((i) => {
			return p.indexOf(i) !== -1;
		}) &&
		p.every((i) => {
			return deepEquals(x[i], y[i]);
		})
	);
};

export const clone = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
