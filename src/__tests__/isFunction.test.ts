import { isFunction } from '../isFunction.js';

describe('isFunction', () => {
	it('should return true for functions', () => {
		expect(isFunction(() => true)).toBe(true);
	});

	it.each(['str', 1, {}, null, undefined])(
		'should return false for "%s"',
		value => {
			expect(isFunction(value)).toBe(false);
		}
	);
});
