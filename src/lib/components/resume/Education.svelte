<script lang="ts">
	import type { EducationItem } from './types';

	export let items: EducationItem[];
</script>

<div class="flex flex-col gap-2">
	<h2 class="print:text-xs uppercase text-gray-500">Education</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.college)}
			<div>
				<div>
					<h3 class="text-lg print:text-sm uppercase">{item.university}</h3>
					{#if item.website}<a href={item.website.href} class="ps-2 print:text-xs" target="_blank"
							>{item.website.text}</a
						>{/if}
				</div>
				<div class="flex gap-2 items-center divide-x">
					<span class="text-gray-700 text-sm print:text-xs">{item.college}</span>
					<span class="ps-2 text-gray-500 text-sm print:text-xs">
						{item.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {item.endDate ===
						'current'
							? 'current'
							: item.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</span>
				</div>
				<p class="text-sm print:text-2xs">{item.degree}</p>
			</div>
		{/each}
	</div>
</div>
