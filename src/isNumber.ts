/**
 * Tests if a value is a number datatype.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is a number.
 */
export function isNumber(value: unknown): value is number {
	return typeof value === 'number';
}
