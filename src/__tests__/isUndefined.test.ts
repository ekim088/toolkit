import { isUndefined } from '../isUndefined';

describe('isUndefined', () => {
	it('should return true for undefined', () => {
		expect(isUndefined(undefined)).toBe(true);
	});

	it.each(['', 0, false, {}, [], null, NaN])(
		'should return false for "%s"',
		value => {
			expect(isUndefined(value)).toBe(false);
		}
	);
});
