/**
 * Tests if a value is an object literal.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is an object. Returns `false` for
 *  arrays and `null`.
 */
export default function isObject(value: unknown): value is object {
	return !!value && value.constructor === Object;
}
