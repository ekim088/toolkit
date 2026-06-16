/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'!(*.{js,ts,mjs,cjs})': 'prettier --write --ignore-unknown',
	'*.{js,ts,mjs,cjs}': [
		'eslint --fix',
		'prettier --write',
		'yarn test:pre-commit',
	],
};
