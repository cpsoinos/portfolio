<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Economica:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="mx-auto max-w-screen-md p-4 sm:p-8 print:p-0">
	<slot />
</div>

<style lang="postcss">
	@media print {
		@page {
			size: letter;
		}
	}

	:global(body) {
		@apply font-body;
	}
</style>
