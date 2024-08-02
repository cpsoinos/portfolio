<script lang="ts">
	import { Image } from '@unpic/svelte';
</script>

<header
	class="container mx-auto flex items-center justify-between p-4 font-display dark:text-white"
>
	<a href="/" class="flex items-center space-x-4 hover:no-underline">
		<Image src="/logo-dark.svg" layout="constrained" width={40} height={40} alt="Logo" />
		<span class="text-xl font-bold">Corey Psoinos</span>
	</a>
	<nav class="space-x-4">
		<a href="/" class="hover:text-indigo-400">Home</a>
		<a href="/about" class="hover:text-indigo-400">About</a>
		<a href="/projects" class="hover:text-indigo-400">Projects</a>
		<a href="/skills" class="hover:text-indigo-400">Skills</a>
		<a href="/contact" class="hover:text-indigo-400">Contact</a>
	</nav>
</header>
