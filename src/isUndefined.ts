/**
 * Tests if a value is `undefined`.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is `undefined`.
 */
export function isUndefined(value: unknown): value is undefined {
	return typeof value === 'undefined';
}
