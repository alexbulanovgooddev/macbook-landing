import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import pluginChecker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		babel({ presets: [reactCompilerPreset()] }),
		pluginChecker({
			eslint: {
				useFlatConfig: true,
				lintCommand: `eslint "${resolve(__dirname, 'src')}/**/*.{js,ts,jsx,tsx}"`
			},
			stylelint: {
				lintCommand: `stylelint "${resolve(__dirname, 'src')}/**/*.{css,scss}"`
			}
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@types': fileURLToPath(new URL('./src/types', import.meta.url))
		}
	}
})
