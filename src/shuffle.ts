/**
 * Shuffles the items in an array.
 * @template T
 * @param array The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffle<T = unknown>(array: T[]): T[] {
	const shuffled = array.slice();

	for (let i = shuffled.length - 1; i > 0; i--) {
		// pick a random number from 0 to i and swap the elements at the two indices
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}
