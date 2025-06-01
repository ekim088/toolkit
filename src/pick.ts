import { type ValueOf } from './typeUtils';

/**
 * Returns an object with only the properties that pass a given test.
 * @param {object} obj The object to parse.
 * @param {Function} predicate A test function called against each object
 * 	property. Properties that return a falsy result will not be included.
 * @returns {object} A new object containing only the properties that passed the
 * 	test.
 */
export default function pick<T extends object>(
	obj: T,
	predicate: (val: ValueOf<T>, key: keyof T) => boolean
): Partial<T> {
	return Object.entries(obj).reduce(
		(picked, [key, value]) =>
			predicate(value, key as keyof T)
				? { ...picked, [key]: value }
				: picked,
		{}
	);
}
