import isObject from './isObject';

export type Merged<T extends object[]> = T extends [
	infer FirstObj,
	...infer Rest,
]
	? FirstObj & Merged<Rest extends object[] ? Rest : []>
	: {};

/**
 * Deeply merges a list of objects into a single object. For duplicate
 * properties, subsequent occurrences overwrite the previous.
 * @param {object[]} objects Any number of object literals to merge.
 * @returns {object} A new object with the properties of its source objects.
 */
export default function merge<T extends object[]>(...objects: T): Merged<T> {
	const mergedObj: any = {};

	objects.forEach(obj => {
		Object.keys(obj).forEach(key => {
			const currentVal = mergedObj[key];
			const valToMerge = obj[key as keyof typeof obj];

			if (isObject(currentVal) && isObject(valToMerge)) {
				mergedObj[key] = merge(currentVal, valToMerge);
			} else if (Array.isArray(currentVal) && Array.isArray(valToMerge)) {
				mergedObj[key] = currentVal.concat(valToMerge);
			} else {
				mergedObj[key] = valToMerge;
			}
		});
	});

	return mergedObj;
}
