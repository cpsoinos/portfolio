<script lang="ts">
	import type { User } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let user: User;
</script>

<div
	class="flex flex-wrap items-end gap-x-2 text-sm text-slate-900 sm:flex-col dark:text-slate-400 print:text-xs {$$props.class}"
>
	<p class="text-sm print:text-xs">
		<Icon icon="mdi:location" inline class="inline" />
		{user.location}
	</p>
	<a href="mailto:{user.email}" target="_blank">{user.email}</a>
	<a href="tel:{user.phone}" target="_blank">{user.phone}</a>
	{#each user.links as { href, text, icon }}
		<div class="flex items-center gap-1">
			{#if icon}
				<Icon icon={icon.light} class="inline dark:hidden" inline />
				<Icon icon={icon.dark} class="hidden dark:inline" inline />
			{/if}
			<a {href} target="_blank">{text}</a>
		</div>
	{/each}
</div>
