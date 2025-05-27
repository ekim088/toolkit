/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*.(j|t)s': [
		'yarn exec eslint --fix',
		'yarn exec prettier --write',
		'yarn test:pre-commit',
	],
	'*.(json|md|*rc)': ['yarn exec prettier --write'],
};
