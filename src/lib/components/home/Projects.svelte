<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { ProjectGalleryItem } from '$lib/types';
	import { twJoin } from 'tailwind-merge';

	const projects: ProjectGalleryItem[] = [
		{
			title: 'In-App Image Cropping Tool',
			description:
				'An in-app image cropping tool, embedded within a larger application. Built while working at <a href="https://flowcode.com" target="_blank" rel="noopener noreferrer">Flowcode<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a>, using Svelte, TailwindCSS, and the Cropper.js library.',
			videos: [
				[
					{
						src: 'conversions/cropping-tool.webm',
						format: 'webm'
					},
					{
						src: 'conversions/cropping-tool.mp4',
						format: 'mp4'
					}
				]
			]
		},
		{
			title: 'Conversion Suite Template Builder',
			description:
				'A visual flow template builder, built while I was working at <a href="https://flowcode.com" target="_blank" rel="noopener noreferrer">Flowcode<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a>. The builder allows users to create and customize templates for their campaigns. Built using Svelte/SvelteKit, TailwindCSS, and XYFlow.',
			videos: [
				[
					{
						src: 'conversions/builder.webm',
						format: 'webm'
					},
					{
						src: 'conversions/builder.mp4',
						format: 'mp4'
					}
				]
			]
		},
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
				'A <a href="https://www.greatfrontend.com/projects/s/image-uploader-with-next-js-and-tailwind-css-72719a3d" target="_blank" rel="noopener noreferrer">GreatFrontEnd Projects submission<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a> created with NextJS, TailwindCSS, and Cloudflare. Allows a user to upload and crop up to 5 images, and select one as a profile image.',
			images: [
				{
					src: 'gfe-image-uploader/profile-card.png',
					alt: 'Screenshot of a profile card with a profile image and user details',
					aspectRatio: 1.68
				}
			],
			videos: [
				[
					{
						src: 'gfe-image-uploader/upload-and-crop.mp4',
						format: 'mp4'
					},
					{
						src: 'gfe-image-uploader/upload-and-crop.webm',
						format: 'webm'
					}
				]
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
				[
					{
						src: 'sensory-interactive/screen-recording.webm',
						format: 'webm'
					},
					{
						src: 'sensory-interactive/screen-recording.mp4',
						format: 'mp4'
					}
				]
			],
			embeds: [
				{
					html: `<iframe src="https://player.vimeo.com/video/639565861?h=14cb962d7b" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
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
				[
					{
						src: 'extend-pua/handles_search-and-filter.webm',
						format: 'webm'
					},
					{
						src: 'extend-pua/handles_search-and-filter.mp4',
						format: 'mp4'
					}
				]
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
	<p class="font-mono">Here's a sample of some of the projects I've worked on in the past.</p>

	<div class="grid grid-cols-2 gap-24">
		{#each projects as project, i}
			{@const hasMedia = project.images?.length || project.videos?.length || project.embeds?.length}
			<ProjectCard
				{project}
				mediaSide={i % 2 === 0 ? 'left' : 'right'}
				class={twJoin('col-span-2 md:col-span-1', hasMedia && 'md:col-span-2 md:grid-cols-2')}
			/>
		{/each}
	</div>
</section>
