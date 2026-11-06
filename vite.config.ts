import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			entryRoot: path.resolve(import.meta.dirname, 'src'),
			include: ['src'],
			exclude: ['src/**/*.test.*', 'src/**/*.stories.*'],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
	build: {
		cssMinify: true,
		sourcemap: true,
		lib: {
			entry: path.resolve(import.meta.dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: 'index',
			cssFileName: 'style',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
		},
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest.setup.ts'],
	},
});
