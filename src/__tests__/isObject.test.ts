import isObject from '../isObject';

describe('isObject', () => {
	it.each([{}, { a: 0 }])('should return true for %o', value => {
		expect(isObject(value)).toBe(true);
	});

	it.each(['a', 1, true, [], Symbol(1), null, undefined, Infinity, NaN])(
		'should return false for "%s"',
		value => {
			expect(isObject(value)).toBe(false);
		}
	);
});
