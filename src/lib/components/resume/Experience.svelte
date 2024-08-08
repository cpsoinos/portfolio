<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { ExperienceItem } from '$lib/types';
	import ResumeSection from './ResumeSection.svelte';
	import Timespan from './Timespan.svelte';

	export let items: ExperienceItem[];
</script>

<ResumeSection sectionTitle="Work experience" class={$$props.class}>
	{#each items as item (item.startDate.toISOString())}
		<div>
			<div class="flex items-center justify-between gap-4">
				<h3 class="text-lg uppercase text-slate-700 dark:text-slate-300 print:text-sm">
					{#if item.website}
						<a href={item.website.href} target="_blank">{item.company}</a>
					{:else}
						{item.company}
					{/if}
				</h3>
				<span class="text-xs text-slate-500 dark:text-slate-400 print:text-2xs">
					<Icon icon="mdi:location" inline class="inline" />
					{item.location}
				</span>
			</div>
			<div class="text-md flex items-center justify-between">
				<span class="text-sm text-indigo-600 dark:text-indigo-400 print:text-xs">{item.title}</span>
				<Timespan startDate={item.startDate} endDate={item.endDate} />
			</div>
			{#if item.description}
				<p class="text-sm print:text-2xs print:leading-normal">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html item.description}
				</p>
			{/if}
			{#if item.bulletPoints?.length}
				<ul class="wysiwyg list-disc ps-4">
					{#each item.bulletPoints as bulletPoint}
						<li
							class="text-sm text-slate-900 dark:text-slate-400 print:text-2xs print:leading-normal"
						>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html bulletPoint}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</ResumeSection>
