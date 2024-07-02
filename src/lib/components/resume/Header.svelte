<script lang="ts">
	import type { User } from '$lib/types';

	export let user: User;
</script>

<div class={$$props.class}>
	<div class="flex justify-between">
		<div class="flex flex-col gap-4">
			<h1 class="font-display text-4xl uppercase text-indigo-600">{user.name}</h1>
		</div>
	</div>
	<p class="font-body text-sm text-gray-700 print:text-2xs print:leading-normal">{user.summary}</p>
</div>
