import { safeJsonParse } from '../safeJsonParse.js';

describe('safeJsonParse', () => {
	it('should parse a JSON object', () => {
		const obj = {
			id: 1,
			name: 'Ed',
		};
		expect(safeJsonParse(JSON.stringify(obj))).toEqual(obj);
	});

	it('should parse a JSON array', () => {
		const arr = [1, 2, 3];
		expect(safeJsonParse(JSON.stringify(arr))).toEqual(arr);
	});

	it.each([
		['a string', '"hi"', 'hi'],
		['a number', '42', 42],
		['a boolean', 'true', true],
		['null', 'null', null],
	])('should parse %s', (_, input, expected) => {
		expect(safeJsonParse(input)).toBe(expected);
	});

	it('should ignore the fallback when parsing succeeds', () => {
		const obj = { ok: true };
		expect(safeJsonParse(JSON.stringify(obj), { ok: false })).toEqual(obj);
	});

	describe('parsing error', () => {
		it('should return null when no fallback is provided', () => {
			expect(safeJsonParse('not json')).toBeNull();
			expect(safeJsonParse('')).toBeNull();
			expect(safeJsonParse('{ unterminated')).toBeNull();
		});

		it('should return the fallback when one is provided', () => {
			const fallback = { source: 'default' };
			expect(safeJsonParse('oops', fallback)).toBe(fallback);
		});

		it('should preserve a falsy fallback rather than coercing to null', () => {
			expect(safeJsonParse('oops', 0)).toBe(0);
			expect(safeJsonParse('oops', '')).toBe('');
			expect(safeJsonParse('oops', false)).toBe(false);
		});
	});
});
