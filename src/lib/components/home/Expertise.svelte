<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { buildImageUrl } from '$lib/images';
	import { Image } from '@unpic/svelte';

	interface Skill {
		title: string;
		icon: { light: string; dark: string };
	}

	interface ExpertiseItem {
		title: string;
		skills: Skill[];
	}

	const expertise: ExpertiseItem[] = [
		{
			title: 'Frontend',
			skills: [
				{
					title: 'React',
					icon: { light: 'devicon:react', dark: 'devicon:react' }
				},
				{
					title: 'NextJS',
					icon: { light: 'devicon:nextjs', dark: 'skill-icons:nextjs-light' }
				},
				{ title: 'Svelte', icon: { light: 'devicon:svelte', dark: 'devicon:svelte' } },
				{
					title: 'Vue',
					icon: { light: 'devicon:vuejs', dark: 'devicon:vuejs' }
				},
				{
					title: 'Nuxt',
					icon: { light: 'devicon:nuxtjs', dark: 'devicon:nuxtjs' }
				},
				{
					title: 'TailwindCSS',
					icon: { light: 'devicon:tailwindcss', dark: 'skill-icons:tailwindcss-light' }
				},
				{
					title: 'Material UI',
					icon: { light: 'devicon:materialui', dark: 'skill-icons:materialui-light' }
				},
				{ title: 'Vite', icon: { light: 'devicon:vitejs', dark: 'devicon:vitejs' } },
				{
					title: 'Webpack',
					icon: { light: 'devicon:webpack', dark: 'devicon:webpack' }
				}
			]
		},
		{
			title: 'Backend',
			skills: [
				{
					title: 'Node',
					icon: { light: 'devicon:nodejs', dark: 'devicon:nodejs' }
				},
				{
					title: 'Edge',
					icon: { light: 'devicon:cloudflare', dark: 'devicon:cloudflare' }
				},
				{ title: 'Ruby on Rails', icon: { light: 'skill-icons:rails', dark: 'skill-icons:rails' } },
				{ title: 'Firebase', icon: { light: 'devicon:firebase', dark: 'devicon:firebase' } },
				{
					title: 'Postgres',
					icon: { light: 'devicon:postgresql', dark: 'devicon:postgresql' }
				},
				{
					title: 'MySQL',
					icon: { light: 'devicon:mysql', dark: 'skill-icons:mysql-light' }
				},
				{
					title: 'Redis',
					icon: { light: 'devicon:redis', dark: 'devicon:redis' }
				},
				{ title: 'MongoDB', icon: { light: 'devicon:mongodb', dark: 'devicon:mongodb' } },
				{
					title: 'Firestore',
					icon: {
						light: 'vscode-icons:file-type-firestore',
						dark: 'vscode-icons:file-type-firestore'
					}
				}
			]
		},
		{
			title: 'DevOps',
			skills: [
				{ title: 'Docker', icon: { light: 'skill-icons:docker', dark: 'skill-icons:docker' } },
				{
					title: 'Cloudflare',
					icon: { light: 'devicon:cloudflare', dark: 'devicon:cloudflare' }
				},
				{ title: 'AWS', icon: { light: 'skill-icons:aws-dark', dark: 'skill-icons:aws-light' } },
				{ title: 'GCP', icon: { light: 'devicon:googlecloud', dark: 'devicon:googlecloud' } },
				{
					title: 'Netlify',
					icon: { light: 'devicon:netlify', dark: 'devicon:netlify' }
				},
				{
					title: 'Vercel',
					icon: { light: 'devicon:vercel', dark: 'skill-icons:vercel-light' }
				},
				{ title: 'Heroku', icon: { light: 'skill-icons:heroku', dark: 'skill-icons:heroku' } },
				{
					title: 'GitHub Actions',
					icon: { light: 'skill-icons:github-dark', dark: 'skill-icons:github-light' }
				},
				{ title: 'CircleCI', icon: { light: 'logos:circleci', dark: 'devicon-plain:circleci' } }
			]
		}
	];

	const deskImgUrl = buildImageUrl('desk-with-computer-illustration.png');
</script>

<section id="expertise" class="flex flex-col gap-6">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Expertise</h2>
	<p class="font-mono">
		I’ve been working professionally as a software engineer for close to 10 years. While my focus
		for the past 3-4 has been on the frontend, I consider myself to be a full-stack. I excel with
		React, Svelte, and have professional experience with Vue. Currently, my favorite frontend
		framework is SvelteKit, though I’ve been using NextJS recently both professionally and
		recreationally as well.
	</p>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each expertise as { title, skills }}
			<div class="{title} rounded border p-4 font-mono text-sm">
				<h3 class="mt-4">{title}</h3>
				<ul>
					{#each skills as { title, icon }}
						<li class="ml-4 flex items-center">
							<Icon icon={icon.light} class="mr-2 dark:hidden" />
							<Icon icon={icon.dark} class="mr-2 hidden dark:block" />
							{title}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<div class="order-3 hidden rounded p-8 md:block lg:hidden">
			<Image
				width={300}
				height={250}
				src={deskImgUrl}
				alt="Illustrated desk setup with a computer monitor displaying code in the center and a laptop on a stand to the right. The desk includes a keyboard, mouse, and desk lamp, with a wooden finish and modern design."
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	div::before,
	h3::before,
	h3::after,
	ul::before,
	ul::after,
	li::before,
	li::after {
		@apply opacity-50;
	}

	.Frontend {
		order: 1;
	}
	.Frontend::before {
		content: '<!-- frontend.html -->';
	}
	.Frontend h3::before {
		content: '<h3>';
	}
	.Frontend h3::after {
		content: '</h3>';
	}
	.Frontend ul::before {
		content: '<ul>';
	}
	.Frontend ul::after {
		content: '</ul>';
	}
	.Frontend li::before {
		content: '<li>';
	}
	.Frontend li::after {
		content: '</li>';
	}

	.Backend {
		order: 2;
	}
	.Backend::before {
		content: '# backend.rb';
	}
	.Backend h3::before {
		content: 'class ';
	}
	.Backend ul::after {
		content: 'end';
	}
	.Backend li::before {
		content: 'attr_reader :"';
	}
	.Backend li::after {
		content: '"';
	}

	.DevOps {
		order: 4;
	}
	.DevOps::before {
		content: '# devops.yaml';
	}
	.DevOps h3::after {
		content: ':';
	}
	.DevOps li::before {
		content: '-';
		@apply mr-2;
	}
</style>
