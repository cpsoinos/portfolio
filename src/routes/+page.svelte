<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import Expertise from '$lib/components/home/Expertise.svelte';
	import Projects from '$lib/components/home/Projects.svelte';
	import Contact from '$lib/components/home/Contact.svelte';
</script>

<div class="flex flex-col gap-40 py-10 md:pt-40">
	<Hero />
	<Expertise />
	<Projects />
	<Contact />
</div>
