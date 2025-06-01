import { isNullish } from '../isNullish';

describe('isNullish', () => {
	it.each([null, undefined])('should return true for "%s"', value => {
		expect(isNullish(value)).toBe(true);
	});

	it.each(['', 0, false, {}, [], NaN])(
		'should return false for "%s"',
		value => {
			expect(isNullish(value)).toBe(false);
		}
	);
});
