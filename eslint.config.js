import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import importAlias from '@dword-design/eslint-plugin-import-alias';
import oxlint from 'eslint-plugin-oxlint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		plugins: { '@dword-design/import-alias': importAlias },
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
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
	oxlint.configs['flat/recommended'] // oxlint should be the last one
];
