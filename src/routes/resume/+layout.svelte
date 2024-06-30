<div class="p-8 print:p-0 max-w-screen-sm">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}
</style>
