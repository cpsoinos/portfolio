<script lang="ts">
	import '@fontsource/economica';
	import '@fontsource-variable/roboto-mono';
	import '$lib/assets/styles/app.postcss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { createThemeSwitcher } from '$lib/themeSwitcher/theme';
	import Theme from '$lib/themeSwitcher/Theme.svelte';

	createThemeSwitcher();
</script>

<div
	class="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden print:hidden"
>
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
<Footer />

<Theme />
