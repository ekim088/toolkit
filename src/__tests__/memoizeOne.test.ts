import memoizeOne, { type MemoizedFn } from '../memoizeOne';

describe('memoizeOne', () => {
	const fnSpy = vi.fn();
	const sum = (a: number, b: number): number => {
		fnSpy();
		return a + b;
	};
	let memoSum: MemoizedFn<typeof sum>;

	beforeEach(() => {
		memoSum = memoizeOne(sum);
	});

	it('should return a function that returns the same result as the original', () => {
		expect(memoSum(1, 2)).toBe(sum(1, 2));
	});

	it('should cache the last result and return the cached value if arguments are unchanged', () => {
		memoSum(1, 2);
		expect(fnSpy).toHaveBeenCalledTimes(1);

		memoSum(1, 2);
		expect(fnSpy).toHaveBeenCalledTimes(1);

		memoSum(2, 3);
		expect(fnSpy).toHaveBeenCalledTimes(2);

		memoSum(1, 2);
		expect(fnSpy).toHaveBeenCalledTimes(3);
	});

	it('should re-evaluate the function if arguments remain the same but the function context changes', () => {
		memoSum(1, 2);
		expect(fnSpy).toHaveBeenCalledTimes(1);

		memoSum.call({}, 1, 2);
		expect(fnSpy).toHaveBeenCalledTimes(2);
	});

	it('should accept a custom equality function for comparing function arguments', () => {
		const mockEqualityFn = vi.fn(
			(newArgs: number[], prevArgs: number[]): boolean =>
				// considered equal if second arg is identical
				newArgs[1] === prevArgs[1]
		);
		const memoSumWithCustomEquality = memoizeOne(sum, mockEqualityFn);

		memoSumWithCustomEquality(1, 2);
		expect(mockEqualityFn).not.toHaveBeenCalled();
		expect(fnSpy).toHaveBeenCalledTimes(1);

		memoSumWithCustomEquality(3, 2);
		expect(mockEqualityFn).toHaveBeenLastCalledWith([3, 2], [1, 2]);
		expect(fnSpy).toHaveBeenCalledTimes(1);

		memoSumWithCustomEquality(3, 4);
		expect(mockEqualityFn).toHaveBeenLastCalledWith([3, 4], [1, 2]);
		expect(fnSpy).toHaveBeenCalledTimes(2);
	});

	it('should reset the cache on clear()', () => {
		memoSum(1, 2);
		memoSum.clear();
		memoSum(1, 2);

		expect(fnSpy).toHaveBeenCalledTimes(2);
	});
});
