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

<div class="grid grid-cols-3 gap-4 border-t-8 border-indigo-600">
	<Header user={data.user} class="col-span-2 pt-2" />
	<ContactInfo user={data.user} class="col-span-1 bg-gray-100 px-4 pt-2" />
</div>

<div class="grid grid-cols-3 gap-4">
	<div class="col-span-2 flex flex-col gap-4 pt-6">
		<Experience items={data.jobs} />
		{#if data.projects.length > 0}
			<Projects items={data.projects} />
		{/if}
		<Education items={data.education} />
	</div>
	<Skills class="col-span-1 bg-gray-100 p-4 pt-6" />
</div>
