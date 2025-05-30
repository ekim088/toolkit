import isObject from './isObject';

function cloneObject<T extends object>(obj: T): T {
	const clonedObj: Partial<T> = {};

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			clonedObj[key] = clone(obj[key]);
		}
	}

	return clonedObj as T;
}

/**
 * Creates a deep copy of a value.
 * @param {*} value The value to clone.
 * @returns {*} A copy of the value.
 */
export default function clone<T = unknown>(value: T): T {
	if (Array.isArray(value)) {
		return value.map(item => clone(item)) as T;
	}

	if (isObject(value)) {
		return cloneObject(value);
	}

	if (typeof value === 'function') {
		return Object.assign(
			(...args: unknown[]) => value(...args),
			cloneObject(value) // transfer custom function properties
		);
	}

	if (value instanceof Date) {
		return new Date(value) as T;
	}

	return value;
}
