<script lang="ts">
	export let startDate: Date;
	export let endDate: Date | undefined = undefined;
</script>

<span class="text-xs text-indigo-600 dark:text-indigo-400 print:text-2xs">
	{startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {endDate?.toLocaleDateString(
		'en-US',
		{ month: 'short', year: 'numeric' }
	) || 'current'}
</span>
