/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'!(*.(j|t)s)': 'prettier --write --ignore-unknown',
	'*.(j|t)s': ['eslint --fix', 'prettier --write', 'yarn test:pre-commit'],
};
