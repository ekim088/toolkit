import { isString } from '../isString';
import { uuid } from '../uuid';

describe('uuid', () => {
	it('should generate a UUID', () => {
		const id = uuid();

		expect(isString(id)).toBe(true);
		expect(id).toHaveLength(36);
	});
});
