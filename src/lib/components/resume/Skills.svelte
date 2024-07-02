<script lang="ts">
	import type { SkillItem } from '$lib/types';
	import ResumeSection from './ResumeSection.svelte';

	export let items: SkillItem[];
</script>

<ResumeSection sectionTitle="Skills" class={$$props.class}>
	<div class="flex flex-col gap-4">
		{#each items as skill (skill.title)}
			<div>
				<h3 class="text-sm uppercase print:text-xs">{skill.title}</h3>
				<ul class="list-disc ps-6">
					{#each skill.items as item}
						<li class="text-xs text-gray-900 print:text-2xs print:leading-normal">
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</ResumeSection>
