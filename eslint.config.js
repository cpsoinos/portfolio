import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import oxlint from 'eslint-plugin-oxlint';
import svelteConfig from './svelte.config.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_|^\\$\\$(Props|Events|Slots)$'
				}
			]
		}
	},
	{
		plugins: { '@dword-design/import-alias': require('@dword-design/eslint-plugin-import-alias') },
		rules: {
			'@dword-design/import-alias/prefer-alias': [
				'error',
				{
					alias: {
						$lib: './src/lib'
					}
				}
			]
		}
	},
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	oxlint.configs['flat/recommended'] // oxlint should be the last one
];
