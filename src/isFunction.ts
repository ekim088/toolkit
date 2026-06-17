/**
 * Tests if a value is a function.
 * @param value The value to test.
 * @returns `true` if the value is a function.
 */
export function isFunction(
	value: unknown
): value is (...args: any[]) => unknown {
	return typeof value === 'function';
}
