<script lang="ts">
	import Icon, { getIcon } from '@iconify/svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<Icon>;

	let icon: string;

	$: preloadedIcon = getIcon(icon);
	$: console.log({ preloadedIcon });
</script>

{#if preloadedIcon}
	<Icon icon={preloadedIcon} {...$$restProps} />
{:else}
	<Icon {icon} {...$$restProps} />
{/if}
