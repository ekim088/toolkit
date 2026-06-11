import { isString } from '../isString.js';
import { uuid } from '../uuid.js';

describe('uuid', () => {
	it('should generate a UUID', () => {
		const id = uuid();

		expect(isString(id)).toBe(true);
		expect(id).toHaveLength(36);
	});
});
