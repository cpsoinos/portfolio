<div class="resume">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}

	:global(html) {
		@apply !bg-white;
	}

	.resume {
		@apply font-body;
	}
</style>
