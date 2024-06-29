<script lang="ts">
	import type { ExperienceItem } from './types';

	export let items: ExperienceItem[];
	export let sectionTitle: string;
</script>

<div class="flex flex-col gap-4">
	<h2 class="text-md uppercase text-gray-500">{sectionTitle}</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.title)}
			<div>
				<div class="flex gap-2 items-center divide-x">
					<h3 class="text-xl uppercase">{item.company}</h3>
					{#if item.website}<a href={item.website.href} class="ps-2">{item.website.text}</a>{/if}
				</div>
				<div class="flex gap-2 items-center divide-x">
					<span class="text-gray-700">{item.title}</span>
					<span class="ps-2 text-gray-500 text-sm">
						{item.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</span>
				</div>
				{#if item.description}
					<p>{@html item.description}</p>
				{/if}
				{#if item.bulletPoints?.length}
					<ul class="list-disc ps-4">
						{#each item.bulletPoints as bulletPoint}
							<li class="print:text-xs">{@html bulletPoint}</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</div>
