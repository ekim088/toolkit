import { isObject } from './isObject';

/**
 * Tests if two arguments are equal. Object literals and arrays are tested for
 * deep equality while other objects are tested for strict equality.
 * @param {*} a An argument to test.
 * @param {*} b An argument to test.
 * @returns {boolean} `true` if `a` and `b` are deeply equal.
 */
export function isDeepEqual(a: unknown, b: unknown): boolean {
	if (typeof a !== typeof b) {
		return false;
	}

	if (Array.isArray(a) && Array.isArray(b)) {
		return (
			a.length === b.length &&
			a.every((item, i) => isDeepEqual(item, b[i]))
		);
	}

	if (isObject(a) && isObject(b)) {
		return isDeepEqual(Object.entries(a), Object.entries(b));
	}

	return a === b;
}
