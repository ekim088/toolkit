/**
 * Chunks an array into sub-arrays of at most `chunkSize` items.
 * @template T
 * @param {T[]} array The array to chunk.
 * @param {number} chunkSize The max number of items per chunk.
 * @returns {T[][]} The chunked array.
 */
export function chunk<T>(array: readonly T[], chunkSize: number): T[][] {
	const result: T[][] = [];

	if (chunkSize < 1) {
		return [];
	}

	for (let i = 0; i < array.length; i += chunkSize) {
		result.push([...array.slice(i, i + chunkSize)]);
	}

	return result;
}
