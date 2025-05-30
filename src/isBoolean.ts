/**
 * Tests if a value is a boolean datatype.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is a boolean.
 */
export default function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean';
}
