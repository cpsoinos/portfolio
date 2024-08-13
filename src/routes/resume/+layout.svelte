<div class="resume">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}

	.resume {
		@apply font-body;
	}
</style>
