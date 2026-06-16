import { safeJsonParse } from '../safeJsonParse.js';

describe('safeJsonParse', () => {
	it.each([
		['a JSON object', '{ "a": 1 }', { a: 1 }],
		['a JSON array', '[1, 2, 3]', [1, 2, 3]],
		['a string', '"hi"', 'hi'],
		['a number', '42', 42],
		['a boolean', 'true', true],
		['null', 'null', null],
	])('should parse %s', (_, input, expected) => {
		expect(safeJsonParse(input)).toEqual(expected);
	});

	it('should ignore the fallback when parsing succeeds', () => {
		const obj = { ok: true };
		expect(safeJsonParse(JSON.stringify(obj), { ok: false })).toEqual(obj);
	});

	describe('parsing error', () => {
		it('should return null when no fallback or callback is provided', () => {
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

		it('should return the result of the callback method when one is provided', () => {
			const errorCallback = (jsonStr: string) =>
				`${jsonStr}! all berries`;
			expect(safeJsonParse('oops', errorCallback)).toBe(
				'oops! all berries'
			);
		});
	});
});
