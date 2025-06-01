import { isBoolean } from '../isBoolean';

describe('isBoolean', () => {
	it.each([true, false])('should return true for "%s"', value => {
		expect(isBoolean(value)).toBe(true);
	});

	it.each(['str', 1, {}, null, undefined])(
		'should return false for "%s"',
		value => {
			expect(isBoolean(value)).toBe(false);
		}
	);
});
