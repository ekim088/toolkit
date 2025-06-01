/**
 * Generates a random UUID.
 * @returns {string} A UUID.
 */
export function uuid(): string {
	return crypto.randomUUID();
}
