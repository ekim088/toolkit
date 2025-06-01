import { merge } from '../merge';

describe('merge', () => {
	it('should merge objects', () => {
		const obj1 = { a: 1 };
		const obj2 = { b: false };
		const obj3 = { c: 'str' };

		expect(merge(obj1, obj2, obj3)).toEqual({
			a: 1,
			b: false,
			c: 'str',
		});
	});

	it('should have later object key values overwrite previous', () => {
		const obj1 = { a: 'str' };
		const obj2 = { a: 'new str' };

		expect(merge(obj1, obj2)).toEqual({ a: 'new str' });
	});

	it('should deeply merge objects', () => {
		const obj1 = {
			a: {
				b: {
					c: {
						d: 123,
					},
					e: 'eVal',
				},
			},
		};
		const obj2 = {
			a: {
				b: {
					c: {
						f: true,
					},
				},
			},
			g: 'gVal',
		};

		expect(merge(obj1, obj2)).toEqual({
			a: {
				b: {
					c: {
						d: 123,
						f: true,
					},
					e: 'eVal',
				},
			},
			g: 'gVal',
		});
	});

	it('should concatenate arrays', () => {
		const obj1 = {
			a: {
				b: [1, 2, 3],
				c: {
					d: ['a', 'b', 'c'],
				},
			},
		};
		const obj2 = {
			a: {
				b: [4, 5, 6],
				c: {
					d: ['d', 'e', 'f'],
				},
			},
		};

		expect(merge(obj1, obj2)).toEqual({
			a: {
				b: [1, 2, 3, 4, 5, 6],
				c: {
					d: ['a', 'b', 'c', 'd', 'e', 'f'],
				},
			},
		});
	});

	it('should not modify any inputs', () => {
		const obj1 = { a: 1 };
		const obj2 = { a: 1 };
		const mergedObj = merge(obj1, obj2);

		expect(mergedObj).not.toBe(obj1);
		expect(mergedObj).not.toBe(obj2);
		expect(obj1).toEqual({ a: 1 });
		expect(obj2).toEqual({ a: 1 });

		const arr1 = [1];
		const arr2 = [1];
		const mergedArr = merge(arr1, arr2);

		expect(mergedArr).not.toBe(arr1);
		expect(mergedArr).not.toBe(arr2);
		expect(arr1).toEqual([1]);
		expect(arr2).toEqual([1]);
	});
});
