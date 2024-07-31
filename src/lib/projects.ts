import type { ProjectItem } from './types';

export const projects: ProjectItem[] = [
	{
		title: 'Image Uploader',
		links: [
			{
				href: 'https://gfe-image-uploader.anderapps.com',
				text: 'gfe-image-uploader.anderapps.com',
				icon: 'mdi:open-in-new'
			},
			{
				href: 'http://github.com/cpsoinos/gfe-image-uploader',
				text: 'cpsoinos/gfe-image-uploader',
				icon: 'devicon:github'
			}
		],
		description:
			'A <a href="https://www.greatfrontend.com/projects/s/image-uploader-with-next-js-and-tailwind-css-72719a3d" target="_blank">GreatFrontEnd Projects submission</a> created with NextJS, TailwindCSS, and Cloudflare. Allows a user to upload up to 5 images, crop them, and select one as a profile image.'
	},
	{
		title: 'nuxt-svgo',
		links: [
			{
				href: 'https://www.npmjs.com/package/nuxt-svgo',
				text: 'nuxt-svgo',
				icon: 'logos:npm-icon'
			},
			{
				href: 'https://github.com/cpsoinos/nuxt-svgo',
				text: 'cpsoinos/nuxt-svgo',
				icon: 'devicon:github'
			}
		],
		description: 'A Nuxt module to load optimized SVG files as Vue components.',
		github: {
			username: 'cpsoinos',
			repo: 'nuxt-svgo'
		},
		npm: {
			package: 'nuxt-svgo'
		}
	},
	{
		title: 'vite-plugin-http2-proxy',
		links: [
			{
				href: 'https://www.npmjs.com/package/@cpsoinos/vite-plugin-http2-proxy',
				text: '@cpsoinos/vite-plugin-http2-proxy',
				icon: 'logos:npm-icon'
			},
			{
				href: 'https://github.com/cpsoinos/vite-plugin-http2-proxy',
				text: 'cpsoinos/vite-plugin-http2-proxy',
				icon: 'devicon:github'
			}
		],
		description: 'A vite plugin to run an HTTP2 proxy in development mode.'
		// excluding github and npm stats for this project bc they're not that impressive
		// github: {
		// 	username: 'cpsoinos',
		// 	repo: 'vite-plugin-http2-proxy'
		// },
		// npm: {
		// 	package: '@cpsoinos/vite-plugin-http2-proxy'
		// }
	},
	{
		title: 'Nuxtify',
		description:
			'A fun side project experimenting with Nuxt and TailwindCSS, with the goal of replicating the appearance of Spotify&#8217;s <span class="italic">Now Playing</span> mobile view.',
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
		bulletPoints: ['Built with Nuxt and TailwindCSS', 'Hosted on Cloudflare Workers']
	}
];
