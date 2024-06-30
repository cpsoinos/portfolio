import type { ProjectItem } from '../../types';

export const projects: ProjectItem[] = [
	{
		title: 'vite-plugin-http2-proxy',
		links: [
			{
				href: 'https://www.npmjs.com/package/@cpsoinos/vite-plugin-http2-proxy',
				text: 'npmjs.com/package/@cpsoinos/vite-plugin-http2-proxy',
				icon: 'logos:npm-icon'
			},
			{
				href: 'https://github.com/cpsoinos/vite-plugin-http2-proxy',
				text: 'cpsoinos/vite-plugin-http2-proxy',
				icon: 'devicon:github'
			}
		],
		description: 'A vite plugin to run an HTTP2 proxy in development mode.'
	},
	{
		title: 'nuxt-svgo',
		links: [
			{
				href: 'https://www.npmjs.com/package/nuxt-svgo',
				text: 'npmjs.com/package/nuxt-svgo',
				icon: 'logos:npm-icon'
			},
			{
				href: 'https://github.com/cpsoinos/nuxt-svgo',
				text: 'cpsoinos/nuxt-svgo',
				icon: 'devicon:github'
			}
		],
		description: 'A Nuxt module to load optimized SVG files as Vue components.',
		bulletPoints: ['~25k weekly downloads', '~130 stars on GitHub']
	},
	{
		title: 'Nuxtify',
		description:
			'A fun side project experimenting with Nuxt.js and TailwindCSS, with the goal of replicating the appearance of Spotify&#8217;s <span class="italic">Now Playing</span> mobile view.',
		links: [
			{
				href: 'https://nuxtify.anderapps.com/now-playing',
				text: 'nuxtify.anderapps.com',
				icon: 'mdi:open-in-new'
			},
			{
				href: 'https://github.com/cpsoinos/spotify-clone-vue',
				text: 'cpsoinos/spotify-clone-vue',
				icon: 'devicon:github'
			}
		],
		bulletPoints: ['Built with Nuxt.js and TailwindCSS', 'Hosted on Cloudflare Workers']
	}
];
