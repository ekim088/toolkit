import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './vitest.setup.js',
		typecheck: {
			tsconfig: './src/__tests__/tsconfig.json',
		},
		mockReset: true,
		coverage: {
			include: ['src/**/*.ts'],
			exclude: ['src/index.ts', 'src/typeUtils.ts'],
			thresholds: {
				statements: 80,
				branches: 80,
				functions: 80,
				lines: 80,
			},
		},
	},
});
