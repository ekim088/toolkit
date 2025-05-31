/**
 * Generates a random UUID.
 * @returns {string} A UUID.
 */
export default function uuid(): string {
	return crypto.randomUUID();
}
