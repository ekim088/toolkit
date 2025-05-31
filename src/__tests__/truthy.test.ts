import truthy from '../truthy';

describe('truthy', () => {
	it.each(['str', 1, true, {}, []])('should return true for "%s"', value => {
		expect(truthy(value)).toBe(true);
	});

	it.each(['', 0, false, null, undefined, NaN])(
		'should return false for "%s"',
		value => {
			expect(truthy(value)).toBe(false);
		}
	);
});
