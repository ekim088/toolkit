import { shuffle } from '../shuffle.js';

describe('shuffle', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	it('should not modify the original array', () => {
		expect(shuffle(arr)).not.toBe(arr);
	});

	it('should maintain all elements in the array', () => {
		const shuffled = shuffle(arr);
		const uniqueItems = Array.from(new Set(shuffled));

		expect(shuffled.length).toBe(arr.length);
		expect(uniqueItems.length).toBe(arr.length);
	});

	it('should handle empty arrays', () => {
		expect(shuffle([])).toEqual([]);
	});

	it('should randomize array items over multiple runs', () => {
		const originalArrStr = JSON.stringify(arr);
		let changeCount = 0;

		for (let i = 0; i < 10; i++) {
			if (JSON.stringify(shuffle(arr)) !== originalArrStr) {
				changeCount++;
			}
		}

		expect(changeCount).toBeGreaterThan(0);
	});
});
