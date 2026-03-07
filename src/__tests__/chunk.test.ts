import { chunk } from '../chunk';

describe('chunk', () => {
	it('should chunk an array into sub-arrays of the specified size', () => {
		expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]);
	});

	it('should handle arrays that do not divide evenly', () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	});

	it('should work with chunk size of 1', () => {
		expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
	});

	it('should work with chunk size larger than array length', () => {
		expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
	});

	it('should handle empty arrays', () => {
		expect(chunk([], 2)).toEqual([]);
	});

	it('should handle single item arrays', () => {
		expect(chunk([1], 2)).toEqual([[1]]);
	});

	it('should work with different data types', () => {
		expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
			['a', 'b'],
			['c', 'd'],
		]);
	});

	it('should not modify the input array', () => {
		const items = [1, 2, 3, 4, 5, 6];
		const itemsCopy = [...items];
		chunk(items, 2);

		expect(items).toEqual(itemsCopy);
	});

	it('should return an empty array for chunk sizes <= 0', () => {
		expect(chunk([1, 2], 0)).toEqual([]);
		expect(chunk([1, 2], -1)).toEqual([]);
	});
});
