<script lang="ts">
	import type { Link } from './types';
	import Icon from '@iconify/svelte';

	const name = 'Corey Psoinos';
	const location = 'Brooklyn, New York';
	const links: Link[] = [
		{
			href: 'https://linkedin.com/in/cpsoinos',
			text: 'linkedin.com/in/cpsoinos',
			icon: 'devicon:linkedin'
		},
		{ href: 'https://github.com/cpsoinos', text: 'github.com/cpsoinos', icon: 'devicon:github' }
	];
	const contact: Link[] = [
		{ href: 'mailto:coreypsoinos@gmail.com', text: 'coreypsoinos@gmail.com' },
		{ href: 'tel:9788350558', text: '(978) 835-0558' }
	];
	const summary =
		'Accomplished full-stack engineer with a passion for UX, design systems, and developer experience tooling. Expert in NextJS and React, Svelte and SvelteKit, Node, Vue, Ruby on Rails. Comfortable with Cloudflare, AWS, Firebase and GCP, and Heroku.';
</script>

<div class="flex justify-between border-t-8 border-indigo-600 bg-gray-100 p-4">
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl uppercase">{name}</h1>
		<p>{location}</p>
	</div>
	<div class="flex flex-col items-end text-sm text-gray-700 print:text-xs">
		{#each contact as { href, text, icon }}
			{#if icon}<Icon {icon} class="inline" />{/if} <a {href} class="">{text}</a>
		{/each}
		{#each links as { href, text, icon }}
			<div class="flex items-center gap-1">
				{#if icon}<Icon {icon} />{/if}<a {href} class="">{text}</a>
			</div>
		{/each}
	</div>
</div>
<p class="text-sm text-gray-700 print:text-2xs print:leading-normal">{summary}</p>
