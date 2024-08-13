<script lang="ts">
	import type { ProjectItem } from '$lib/types';
	import ProjectCard from './ProjectCard.svelte';

	const projects: ProjectItem[] = [
		{
			title: 'Image Uploader',
			links: [
				{
					href: 'https://gfe-image-uploader.anderapps.com',
					text: 'gfe-image-uploader.anderapps.com',
					icon: { light: 'mdi:open-in-new', dark: 'mdi:open-in-new' }
				},
				{
					href: 'http://github.com/cpsoinos/gfe-image-uploader',
					text: 'cpsoinos/gfe-image-uploader',
					icon: {
						light: 'skill-icons:github-dark',
						dark: 'skill-icons:github-light'
					}
				}
			],
			description:
				'A <a href="https://www.greatfrontend.com/projects/s/image-uploader-with-next-js-and-tailwind-css-72719a3d" target="_blank" rel="noopener noreferrer">GreatFrontEnd Projects submission</a> created with NextJS, TailwindCSS, and Cloudflare. Allows a user to upload and crop up to 5 images, and select one as a profile image.',
			images: [
				{
					src: 'gfe-image-uploader/profile-card.png',
					alt: 'Screenshot of a profile card with a profile image and user details',
					aspectRatio: 1.68
				}
			],
			videos: [
				{
					src: 'gfe-image-uploader/upload-and-crop.webm',
					alt: 'Video demonstration of the image uploader'
				}
			]
		},
		{
			title: 'Nuxtify',
			description:
				'A fun side project experimenting with Nuxt and TailwindCSS, with the goal of replicating the appearance of Spotify&#8217;s <span class="italic">Now Playing</span> mobile view.',
			links: [
				{
					href: 'https://nuxtify.anderapps.com/now-playing',
					text: 'nuxtify.anderapps.com',
					icon: { light: 'mdi:open-in-new', dark: 'mdi:open-in-new' }
				},
				{
					href: 'https://github.com/cpsoinos/spotify-clone-vue',
					text: 'cpsoinos/spotify-clone-vue',
					icon: {
						light: 'skill-icons:github-dark',
						dark: 'skill-icons:github-light'
					}
				}
			],
			bulletPoints: ['Built with Nuxt and TailwindCSS', 'Hosted on Cloudflare Workers'],
			images: [
				{
					src: 'nuxtify/now-playing-2.png',
					alt: 'Screenshot of a Spotify-like music player',
					aspectRatio: 0.5
				}
			]
		},
		{
			title: 'Interactive Lobby Display',
			description:
				"A menu page and a calibration page used on an angled, multi-screen lobby display for Sensory Interactive's end-client Marathon Oil. Developed using NextJS and TailwindCSS, with heavy use of React-Transition-Group.",
			videos: [
				{
					src: 'sensory-interactive/screen-recording.webm',
					alt: 'Video demonstration of the Menu page of the Marathon Oil interactive lobby display for Sensory Interactive'
				}
			],
			embeds: [
				{
					html: `<iframe src="https://player.vimeo.com/video/639565861?h=14cb962d7b" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/639565861">102521 Marathon Oil Lobby Display Video.mp4</a> from <a href="https://vimeo.com/sensoryinteractive">Sensory Interactive</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`
				}
			]
		},
		{
			title: 'Legislator Contact Database',
			description:
				'A searchable, filterable database of contact information for US Senators and Representatives. Built for <a href="https://www.extendpua.org" target="_blank" rel="noopener noreferrer">Extend PUA<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a>, an organization that fought for continuing assistance through the COVID-19 pandemic. Built with React and TailwindCSS.',
			bulletPoints: ['Built with React and TailwindCSS', 'Hosted on Netlify'],
			links: [
				{
					href: 'https://handles.extendpua.org',
					text: 'handles.extendpua.org',
					icon: { light: 'mdi:open-in-new', dark: 'mdi:open-in-new' }
				}
			],
			images: [
				{
					src: 'extend-pua/handles.png',
					alt: 'Screenshot of a searchable table of US Senators and Representatives',
					aspectRatio: 1.8
				}
			],
			videos: [
				{
					src: 'extend-pua/handles_search-and-filter.webm',
					alt: 'Video demonstration of the searchable table of US Senators and Representatives'
				}
			]
		},
		{
			title: 'nuxt-svgo',
			links: [
				{
					href: 'https://www.npmjs.com/package/nuxt-svgo',
					text: 'nuxt-svgo',
					icon: {
						light: 'devicon:npm',
						dark: 'devicon:npm'
					}
				},
				{
					href: 'https://github.com/cpsoinos/nuxt-svgo',
					text: 'cpsoinos/nuxt-svgo',
					icon: {
						light: 'skill-icons:github-dark',
						dark: 'skill-icons:github-light'
					}
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
					icon: {
						light: 'devicon:npm',
						dark: 'devicon:npm'
					}
				},
				{
					href: 'https://github.com/cpsoinos/vite-plugin-http2-proxy',
					text: 'cpsoinos/vite-plugin-http2-proxy',
					icon: {
						light: 'skill-icons:github-dark',
						dark: 'skill-icons:github-light'
					}
				}
			],
			description: 'A vite plugin to run an HTTP2 proxy in development mode.'
		}
	];
</script>

<section id="projects" class="flex flex-col gap-6">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Projects</h2>
	<!-- <p class="font-mono">Here are some of the projects I've worked on outside of work.</p> -->

	<div class="grid gap-8 lg:grid-cols-2">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
