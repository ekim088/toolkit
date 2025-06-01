/**
 * Tests if a value is a string datatype.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is a string.
 */
export function isString(value: unknown): value is string {
	return typeof value === 'string';
}
