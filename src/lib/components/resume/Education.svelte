<script lang="ts">
	import type { EducationItem } from '../../types';

	export let items: EducationItem[];
</script>

<div class="flex flex-col gap-2">
	<h2 class="border-t-2 border-indigo-600 bg-gray-50 p-1 uppercase text-gray-500 print:text-xs">
		Education
	</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.college)}
			<div>
				<div>
					<h3 class="text-lg uppercase print:text-sm">{item.university}</h3>
					{#if item.website}<a href={item.website.href} class="ps-2 print:text-xs" target="_blank"
							>{item.website.text}</a
						>{/if}
				</div>
				<div class="flex items-center justify-between">
					<span class="text-sm text-indigo-600 print:text-xs">{item.college}</span>
					<span class="ps-2 text-xs text-indigo-600 print:text-2xs">
						{item.startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
					</span>
				</div>
				<p class="text-sm print:text-2xs">{item.degree}</p>
			</div>
		{/each}
	</div>
</div>
