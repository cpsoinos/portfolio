<div class="p-8 print:p-0 max-w-screen-md">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}
</style>
