/**
 * Generates a random UUID.
 * @returns A UUID.
 */
export function uuid(): string {
	return crypto.randomUUID();
}
