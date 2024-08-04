<script lang="ts">
	export let sectionTitle: string;
</script>

<div class="flex flex-col gap-2 {$$props.class}">
	<h2
		class="border-b-2 border-indigo-600 uppercase text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 print:text-xs"
	>
		{sectionTitle}
	</h2>
	<div class="flex flex-col gap-4">
		<slot />
	</div>
</div>
