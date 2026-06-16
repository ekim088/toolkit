/**
 * Safely parses a JSON string into a typed value. Optionally returns a fallback
 * value on parse error.
 * @param jsonStr The JSON string to parse.
 * @param fallback A value to return on parse error.
 * @returns The parsed value, the `fallback` on failure, or `null` when no
 * 	fallback is given.
 */
export function safeJsonParse<T = unknown>(jsonStr: string): T | null;
export function safeJsonParse<T = unknown>(jsonStr: string, fallback: T): T;
export function safeJsonParse<T = unknown>(
	jsonStr: string,
	fallback?: T
): T | null {
	try {
		return JSON.parse(jsonStr) as T;
	} catch {
		return fallback ?? null;
	}
}
