<script lang="ts">
	import '$lib/assets/styles/app.postcss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container mx-auto">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		@apply bg-gray-900;
	}
</style>
