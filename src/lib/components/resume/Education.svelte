<script lang="ts">
	import type { EducationItem } from './types';

	export let items: EducationItem[];
</script>

<div class="flex flex-col gap-4">
	<h2 class="text-md uppercase text-gray-500">Education</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.college)}
			<div>
				<div>
					<h3 class="text-xl uppercase">{item.university}</h3>
					{#if item.website}<a href={item.website.href} class="ps-2">{item.website.text}</a>{/if}
				</div>
				<div class="flex gap-2 items-center divide-x">
					<span class="text-gray-700">{item.college}</span>
					<span class="ps-2 text-gray-500 text-sm">
						{item.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</span>
				</div>
				<p>{item.degree}</p>
			</div>
		{/each}
	</div>
</div>
