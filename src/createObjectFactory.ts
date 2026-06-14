import { clone } from './clone.js';
import { merge } from './merge.js';
import { type RecursivePartial } from './typeUtils.js';

export type ObjectFactoryConfig = {
	/**
	 * If `true`, deeply merges overrides into the default object.
	 */
	mergeDeep?: boolean;
};

export type ObjectFactoryFn<T extends object> = (
	overrides?: RecursivePartial<T>,
	config?: ObjectFactoryConfig
) => T;

/**
 * Creates a factory function that returns an object of a given type.
 * @param defaultObj The default object to return when calling the factory
 * 	function.
 * @returns A factory function that returns a new object of a given type.
 * 	Accepts an object argument that shallowly overrides properties on the
 * 	default object.
 */
export function createObjectFactory<T extends object>(
	defaultObj: T
): ObjectFactoryFn<T> {
	const defaultCopy = clone(defaultObj);

	return (overrides, { mergeDeep } = {}): T => {
		const newObject = clone(defaultCopy);

		if (overrides) {
			return mergeDeep
				? merge(newObject, overrides)
				: { ...newObject, ...overrides };
		}

		return newObject;
	};
}
