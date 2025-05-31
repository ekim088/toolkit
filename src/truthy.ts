/**
 * Tests if a value is truthy. Can be passed as the callback to an Array
 * `filter()` method to correctly infer the type of the resulting array items.
 * ```
 * const arr: (string | undefined)[] = [];
 * const truthyArr1: string[] = arr.filter(Boolean); // TS error
 * const truthyArr2: string[] = arr.filter(truthy); // no TS error
 * ```
 * @param {*} value The value to test.
 * @returns {boolean} `true` if the value is truthy.
 */
export default function truthy<TruthyValue>(
	value: TruthyValue | null | undefined | '' | 0 | false
): value is TruthyValue {
	return !!value;
}
