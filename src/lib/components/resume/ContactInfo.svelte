<script lang="ts">
	import type { User } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let user: User;
</script>

<div
	class="flex flex-wrap items-end gap-x-2 text-sm text-gray-700 md:flex-col print:text-xs {$$props.class}"
>
	<p class="text-sm text-gray-700 print:text-xs">
		<Icon icon="mdi:location" inline class="inline" />
		{user.location}
	</p>
	<a href="mailto:{user.email}" target="_blank">{user.email}</a>
	<a href="tel:{user.phone}" target="_blank">{user.phone}</a>
	{#each user.links as { href, text, icon }}
		<div class="flex items-center gap-1">
			{#if icon}<Icon {icon} class="inline" inline />{/if}<a {href} target="_blank">{text}</a>
		</div>
	{/each}
</div>
