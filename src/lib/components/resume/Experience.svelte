<script lang="ts">
	import type { ExperienceItem } from './types';
	import DOMPurify from 'isomorphic-dompurify';

	export let items: ExperienceItem[];
	export let sectionTitle: string;
</script>

<div class="flex flex-col gap-2">
	<h2 class="uppercase text-gray-500 print:text-xs">{sectionTitle}</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.startDate.toISOString())}
			<div>
				<div class="flex items-center gap-4">
					<h3 class="text-lg uppercase print:text-sm">{item.company}</h3>
					{#if item.website}
						<a href={item.website.href} class="text-sm text-gray-500 print:text-xs" target="_blank">
							{item.website.text}
						</a>
					{/if}
				</div>
				<div class="text-md flex items-center gap-2 divide-x print:text-sm">
					<span class="text-sm text-gray-700 print:text-xs">{item.title}</span>
					<span class="ps-2 text-sm text-gray-500 print:text-xs">
						{item.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</span>
				</div>
				{#if item.description}
					<p class="text-sm print:text-2xs print:leading-normal">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html DOMPurify.sanitize(item.description)}
					</p>
				{/if}
				{#if item.bulletPoints?.length}
					<ul class="list-disc ps-4">
						{#each item.bulletPoints as bulletPoint}
							<li class="text-sm print:text-2xs print:leading-normal">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html DOMPurify.sanitize(bulletPoint)}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</div>
