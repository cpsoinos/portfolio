<script lang="ts">
	import type { EducationItem } from '$lib/types';
	import ResumeSection from './ResumeSection.svelte';
	import Timespan from './Timespan.svelte';

	export let items: EducationItem[];
</script>

<ResumeSection sectionTitle="Education" class={$$props.class}>
	{#each items as item (item.college)}
		<div>
			<div>
				<h3 class="text-lg uppercase print:text-sm">{item.university}</h3>
				{#if item.website}<a href={item.website.href} class="ps-2 print:text-xs" target="_blank"
						>{item.website.text}</a
					>{/if}
			</div>
			<div class="flex items-center justify-between">
				<span class="text-sm text-indigo-600 dark:text-indigo-400 print:text-xs"
					>{item.college}</span
				>
				<Timespan startDate={item.startDate} endDate={item.endDate} />
			</div>
			<p class="text-sm print:text-2xs">{item.degree}</p>
		</div>
	{/each}
</ResumeSection>
