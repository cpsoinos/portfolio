<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ExperienceItem } from './types';

	export let items: ExperienceItem[];
</script>

<div class="flex flex-col gap-2">
	<h2 class="border-t-2 border-indigo-600 bg-gray-50 p-1 uppercase text-gray-500 print:text-xs">
		Work experience
	</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.startDate.toISOString())}
			<div>
				<div class="flex items-center justify-between gap-4">
					<h3 class="text-lg uppercase text-gray-700 print:text-sm">
						{#if item.website}
							<a href={item.website.href} target="_blank">{item.company}</a>
						{:else}
							{item.company}
						{/if}
					</h3>
					<span class="text-xs text-gray-500 print:text-2xs">
						<Icon icon="mdi:location" inline class="inline" />
						{item.location}
					</span>
				</div>
				<div class="text-md flex items-center justify-between">
					<span class="text-sm text-indigo-600 print:text-xs">{item.title}</span>
					<span class="text-xs text-indigo-600 print:text-2xs">
						{item.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
					</span>
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
							<li class="text-sm text-gray-900 print:text-2xs print:leading-normal">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html bulletPoint}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</div>
