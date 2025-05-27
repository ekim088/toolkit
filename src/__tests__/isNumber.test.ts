import isNumber from '../isNumber';

describe('isNumber', () => {
	it.each([0, 1, Infinity, NaN])('should return true for %d', value => {
		expect(isNumber(value)).toBe(true);
	});

	it.each(['a', true, {}, null, undefined])(
		'should return false for "%s"',
		value => {
			expect(isNumber(value)).toBe(false);
		}
	);
});
