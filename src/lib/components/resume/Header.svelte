<script lang="ts">
	import type { Link } from './types';

	const name = 'Corey Psoinos';
	const location = 'Brooklyn, NY';
	const links: Link[] = [
		{ href: 'https://linkedin.com/in/cpsoinos', text: 'linkedin.com/in/cpsoinos' },
		{ href: 'https://github.com/cpsoinos', text: 'github.com/cpsoinos' }
	];
	const contact: Link[] = [
		{ href: 'mailto:coreypsoinos@gmail.com', text: 'coreypsoinos@gmail.com' },
		{ href: 'tel:9788350558', text: '(978) 835-0558' }
	];
	const summary =
		'Accomplished full-stack engineer with a passion for UX, design systems, and developer experience tooling. Expert in NextJS and React, Svelte and SvelteKit, Node, Vue, Ruby on Rails. Comfortable with Cloudflare, AWS, Firebase and GCP, and Heroku.';
</script>

<div class="flex flex-col">
	<h1 class="text-2xl">{name}</h1>
	<div class="flex gap-2 divide-x print:text-xs">
		<span>{location}</span>
		{#each links as { href, text }}
			<a {href} class="ps-2">{text}</a>
		{/each}
	</div>
	<div class="flex gap-2 divide-x print:text-xs">
		{#each contact as { href, text }}
			<a {href} class="first:ps-0 ps-2">{text}</a>
		{/each}
	</div>
</div>
