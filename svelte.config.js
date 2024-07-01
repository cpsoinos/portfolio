import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			'$db/*': './src/db/*'
		},
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
			// platformProxy: {
			// 	configPath: 'wrangler.toml',
			// 	environment: undefined,
			// 	experimentalJsonConfig: false,
			// 	persist: false
			// }
		})
	}
};

export default config;
