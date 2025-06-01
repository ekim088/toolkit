/**
 * Tests if a value is `null` or `undefined`.
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is `null` or `undefined`.
 */
export function isNullish(value: unknown): value is null | undefined {
	return value == null;
}
