<script lang="ts">
	import type { User } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let user: User;
</script>

<div class="flex justify-between border-t-8 border-indigo-600 bg-gray-100 p-4">
	<div class="flex flex-col gap-4">
		<h1 class="font-display text-4xl uppercase">{user.name}</h1>
		<p class="text-sm text-gray-700 print:text-xs">
			<Icon icon="mdi:location" inline class="inline" />
			{user.location}
		</p>
	</div>
	<div class="flex flex-col items-end text-sm text-gray-700 print:text-xs">
		<a href="mailto:{user.email}" target="_blank">{user.email}</a>
		<a href="tel:{user.phone}" target="_blank">{user.phone}</a>
		{#each user.links as { href, text, icon }}
			<div class="flex items-center gap-1">
				{#if icon}<Icon {icon} class="inline" inline />{/if}<a {href} class="">{text}</a>
			</div>
		{/each}
	</div>
</div>
<p class="font-body text-sm text-gray-700 print:text-2xs print:leading-normal">{user.summary}</p>
