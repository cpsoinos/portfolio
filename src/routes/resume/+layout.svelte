<div class="max-w-screen-md p-8 print:p-0">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}
</style>
