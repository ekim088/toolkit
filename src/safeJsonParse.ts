/* eslint-disable jsdoc/check-param-names */

/**
 * Safely parses a JSON string into a typed value. On parse error, returns the
 * provided fallback, the result of the provided error callback, or `null`.
 * @param jsonStr The JSON string to parse.
 * @param fallbackOrCallback A fallback value, or a callback to be called on
 * 	parse error.
 * @returns The parsed value; on error, the fallback, the callback's result, or
 * 	`null` when neither is given.
 */
export function safeJsonParse<T = unknown>(jsonStr: string): T | null;
export function safeJsonParse<T = unknown>(
	jsonStr: string,
	errorCallback: (errantStr: string) => T
): T;
export function safeJsonParse<T = unknown>(jsonStr: string, fallback: T): T;
export function safeJsonParse<T = unknown>(
	jsonStr: string,
	fallbackOrCallback?: T | ((errantStr: string) => T)
): T | null {
	try {
		return JSON.parse(jsonStr) as T;
	} catch {
		if (fallbackOrCallback instanceof Function) {
			return fallbackOrCallback(jsonStr);
		}

		return fallbackOrCallback ?? null;
	}
}
