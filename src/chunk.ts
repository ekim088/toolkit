/**
 * Chunks an array into sub-arrays of at most `chunkSize` items.
 * @template T
 * @param {T[]} items The array to chunk.
 * @param {number} chunkSize The max number of items per chunk.
 * @returns {T[][]} The chunked array.
 */
export function chunk<T>(items: readonly T[], chunkSize: number): T[][] {
	const result: T[][] = [];

	if (chunkSize < 1) {
		throw new Error(`invalid chunk size ${chunkSize}`);
	}

	for (let i = 0; i < items.length; i += chunkSize) {
		result.push([...items.slice(i, i + chunkSize)]);
	}

	return result;
}
