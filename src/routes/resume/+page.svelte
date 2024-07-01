<script lang="ts">
	import Header from '$lib/components/resume/Header.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import Education from '$lib/components/resume/Education.svelte';
	import Projects from '$lib/components/resume/Projects.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Resume | {data.user.name}</title>
	<meta name="description" content={data.user.summary} />
</svelte:head>

<div class="flex flex-col gap-6">
	<Header user={data.user} />
	<Experience items={data.jobs} />
	{#if data.projects.length > 0}
		<Projects items={data.projects} />
	{/if}
	<Education items={data.education} />
</div>
