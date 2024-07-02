<script lang="ts">
	import Header from '$lib/components/resume/Header.svelte';
	import Experience from '$lib/components/resume/Experience.svelte';
	import Education from '$lib/components/resume/Education.svelte';
	import Projects from '$lib/components/resume/Projects.svelte';
	import type { PageData } from './$types';
	import ContactInfo from '$lib/components/resume/ContactInfo.svelte';
	import Skills from '$lib/components/resume/Skills.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Resume | {data.user.name}</title>
	<meta name="description" content={data.user.summary} />
</svelte:head>

<div class="flex flex-col gap-4 border-t-8 border-indigo-600 md:grid md:grid-cols-3">
	<Header user={data.user} class="col-span-2 pt-2" />
	<ContactInfo user={data.user} class="col-span-1 md:bg-gray-100 md:px-4 md:pt-2" />
</div>

<div class="grid-cols-3 gap-4 md:grid">
	<div class="col-span-2 flex flex-col gap-4 pt-6">
		<Experience items={data.jobs} />
		{#if data.projects.length > 0}
			<Projects items={data.projects} />
		{/if}
		<Skills class="md:hidden" />
		<Education items={data.education} />
	</div>

	<Skills class="col-span-1 hidden bg-gray-100 md:flex md:p-4 md:pt-6" />
</div>
