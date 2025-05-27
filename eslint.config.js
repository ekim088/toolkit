import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';
import vitest from '@vitest/eslint-plugin';

export default defineConfig([
	globalIgnores(['.yarn/*', '*.config.js']),
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: { globals: globals.browser },
	},
	tseslint.configs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		files: ['**/*.test.*'],
		plugins: { vitest },
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/consistent-test-it': ['error', { fn: 'it' }],
		},
	},
]);
