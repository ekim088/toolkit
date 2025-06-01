import { pick } from '../pick';

describe('pick', () => {
	it('should return an object containing only the properties that pass a test', () => {
		const obj = {
			a: 1,
			b: 0,
			c: 'str',
			d: null,
			e: 'str',
		};

		expect(pick(obj, (val, key) => !!val && key !== 'c')).toEqual({
			a: 1,
			e: 'str',
		});
	});

	it('should return a new object', () => {
		const obj = {};
		const picked = pick(obj, () => true);

		expect(picked).not.toBe(obj);
	});
});
