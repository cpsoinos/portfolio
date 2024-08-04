<script lang="ts">
	import '$lib/assets/styles/app.postcss';
	import Header from '$lib/components/Header.svelte';
	import { createThemeSwitcher } from '$lib/themeSwitcher/theme';
	import Theme from '$lib/themeSwitcher/Theme.svelte';

	createThemeSwitcher();
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

<div class="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
	<div class="flex w-[108rem] flex-none justify-end">
		<enhanced:img
			src="$lib/assets/images/bg-light.png"
			alt=""
			class="w-[71.75rem] max-w-none flex-none dark:hidden"
			decoding="async"
		/>
		<enhanced:img
			src="$lib/assets/images/bg-dark.png"
			alt=""
			class="hidden w-[90rem] max-w-none flex-none dark:block"
			decoding="async"
		/>
	</div>
</div>

<Header />
<div class="container mx-auto px-4 sm:px-6 md:px-8">
	<slot />
</div>

<Theme />
