import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';
import vitest from '@vitest/eslint-plugin';

export default defineConfig([
	globalIgnores(['.yarn/*', 'lib/', '*.config.js']),
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: { globals: globals.browser },
		plugins: { js },
		extends: ['js/recommended'],
	},
	tseslint.configs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		files: ['**/*.ts'],
		rules: {
			'@typescript-eslint/array-type': ['warn', { default: 'array' }],
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{
					fixStyle: 'inline-type-imports',
					prefer: 'type-imports',
				},
			],
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{ allowObjectTypes: 'always' },
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'jsdoc/require-jsdoc': ['warn', { publicOnly: true }],
			'prefer-spread': 'off',
		},
	},
	{
		files: ['**/*.test.*'],
		plugins: { vitest },
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/consistent-test-it': ['error', { fn: 'it' }],
		},
	},
]);
