<script lang="ts">
	import Header from '$lib/components/resume/Header.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import { jobs } from '$lib/components/resume/jobs';
	import { projects } from '$lib/components/resume/projects';
	import { education } from '$lib/components/resume/education';
	import Education from '$lib/components/resume/Education.svelte';
</script>

<div class="flex flex-col gap-6">
	<Header />
	<Experience items={jobs} sectionTitle="Work experience" />
	<Experience items={projects} sectionTitle="Projects" />
	<Education items={education} />
</div>
