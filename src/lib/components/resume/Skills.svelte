<script lang="ts">
	import type { SkillItem } from '$lib/types';
	import ResumeSection from './ResumeSection.svelte';
	import SkillSection from './SkillSection.svelte';

	export let items: SkillItem[];

	$: [languagesAndFrameworks, ...restItems] = items;
</script>

<ResumeSection sectionTitle="Skills" class={$$props.class}>
	<div class="grid grid-cols-2 gap-4 print:gap-2">
		<SkillSection skill={languagesAndFrameworks} columns={2} />
		{#each restItems as skill (skill.title)}
			<SkillSection {skill} />
		{/each}
	</div>
</ResumeSection>
