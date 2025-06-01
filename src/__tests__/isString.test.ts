import { isString } from '../isString';

describe('isString', () => {
	it.each(['', 'abc'])('should return true for "%s"', value => {
		expect(isString(value)).toBe(true);
	});

	it.each([1, true, {}, null, undefined])(
		'should return false for "%s"',
		value => {
			expect(isString(value)).toBe(false);
		}
	);
});
