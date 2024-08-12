<script lang="ts">
	import type { SkillItem } from '$lib/types';

	export let skill: SkillItem;
	export let columns = 1;
</script>

<div class:col-span-2={columns === 2}>
	<h3 class="text-sm uppercase print:text-xs">{skill.title}</h3>
	<ul class="grid list-disc ps-6" class:grid-cols-2={columns === 2}>
		{#each skill.items as item}
			<li class="text-sm text-slate-900 dark:text-slate-400 print:text-2xs print:leading-normal">
				{item}
			</li>
		{/each}
	</ul>
</div>
