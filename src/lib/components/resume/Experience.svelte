<script lang="ts">
	import type { ExperienceItem } from './types';

	export let items: ExperienceItem[];
	export let sectionTitle: string;
</script>

<div class="flex flex-col gap-2">
	<h2 class="print:text-xs uppercase text-gray-500">{sectionTitle}</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.startDate.toISOString())}
			<div>
				<div class="flex gap-2 items-center divide-x">
					<h3 class="text-lg print:text-sm uppercase">{item.company}</h3>
					{#if item.website}
						<a href={item.website.href} class="print:text-xs ps-2" target="_blank">
							{item.website.text}
						</a>
					{/if}
				</div>
				<div class="flex gap-2 items-center divide-x text-md print:text-sm">
					<span class="text-gray-700 text-sm print:text-xs">{item.title}</span>
					<span class="ps-2 text-gray-500 text-sm print:text-xs">
						{item.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</span>
				</div>
				{#if item.description}
					<p class="text-sm print:text-2xs print:leading-normal">{@html item.description}</p>
				{/if}
				{#if item.bulletPoints?.length}
					<ul class="list-disc ps-4">
						{#each item.bulletPoints as bulletPoint}
							<li class="text-sm print:text-2xs print:leading-normal">{@html bulletPoint}</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</div>
