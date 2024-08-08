<script lang="ts">
	import { projects } from '$lib/projects';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section id="projects" class="flex flex-col gap-6">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Projects</h2>
	<p class="font-mono">Here are some of the projects I've worked on outside of work.</p>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
