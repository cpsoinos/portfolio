<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { formatDownloadsNumber } from '$lib/formatDownloadsNumber';
	import type { ProjectItem } from '$lib/types';
	import ResumeSection from './ResumeSection.svelte';

	export let items: ProjectItem[];
</script>

<ResumeSection sectionTitle="Projects" class={$$props.class}>
	{#each items as item (item.title)}
		<div>
			<h3 class="text-lg uppercase text-gray-700 print:text-sm">
				{item.title}
			</h3>
			{#if item.links?.length}
				<div class="flex flex-wrap items-center gap-x-4 text-sm text-indigo-600 print:text-xs">
					{#each item.links as link}
						<a href={link.href} target="_blank" class="flex gap-1">
							{#if link.icon}
								<Icon icon={link.icon} class="inline" inline />
							{/if}
							{link.text}
						</a>
					{/each}
				</div>
			{/if}
			{#if item.description}
				<p class="text-sm print:text-2xs print:leading-normal">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html item.description}
				</p>
			{/if}
			<ul class="wysiwyg list-disc ps-4">
				{#if item.github?.stars}
					<li class="text-sm text-gray-900 print:text-2xs print:leading-normal">
						{item.github.stars} stars on GitHub
					</li>
				{/if}
				{#if item.npm?.weeklyDownloads}
					<li class="text-sm text-gray-900 print:text-2xs print:leading-normal">
						{formatDownloadsNumber(item.npm.weeklyDownloads)} weekly downloads from NPM
					</li>
				{/if}
				{#each item.bulletPoints ?? [] as bulletPoint}
					<li class="text-sm text-gray-900 print:text-2xs print:leading-normal">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html bulletPoint}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</ResumeSection>
