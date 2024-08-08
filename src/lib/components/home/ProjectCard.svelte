<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { buildImageUrl, BUCKET_BASE_URL } from '$lib/images';
	import { Image } from '@unpic/svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import type { ProjectItem } from '$lib/types';

	export let project: ProjectItem;
</script>

<div class="flex flex-col gap-3 rounded-lg">
	<h3 class="font-display text-2xl text-slate-900 dark:text-slate-50">{project.title}</h3>
	{#if project.links}
		<ul>
			{#each project.links as link}
				<li>
					<a
						href={link.href}
						target="_blank"
						class="flex items-center gap-1 text-indigo-600 dark:text-indigo-400"
					>
						{#if link.icon}
							<Icon icon={link.icon.light} class="inline dark:hidden" inline />
							<Icon icon={link.icon.dark} class="hidden dark:inline" inline />
						{/if}
						{link.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p class="wysiwyg">{@html project.description}</p>

	<div class="flex flex-col items-center gap-2">
		{#if project.images?.length || project.videos?.length}
			<Splide
				aria-label="Media for {project.title}"
				options={{
					rewind: true,
					gap: '2rem'
				}}
			>
				{#if project.images}
					{#each project.images as image}
						<SplideSlide class="flex items-center justify-center">
							<Image
								src={buildImageUrl(image.src)}
								alt={image.alt}
								height={300}
								aspectRatio={image.aspectRatio}
								class="rounded"
							/>
						</SplideSlide>
					{/each}
				{/if}
				{#if project.videos}
					{#each project.videos as video}
						<SplideSlide class="flex items-center justify-center">
							<!-- svelte-ignore a11y-media-has-caption -->
							<video
								controls
								autoplay
								loop
								disablepictureinpicture
								controlslist="nodownload"
								class="h-[300px] rounded"
								height={300}
							>
								<source src="{BUCKET_BASE_URL}/{video.src}" type="video/webm" />
								Your browser does not support the video tag.
							</video>
						</SplideSlide>
					{/each}
				{/if}
			</Splide>
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(.splide:not(.is-overflow) .splide__list) {
		justify-content: center;
	}

	:global(.splide:not(.is-overflow) .splide__slide:last-child) {
		margin: 0 !important;
	}

	:global(.splide:not(.is-overflow) .splide__arrows) {
		display: none;
	}

	:global(.splide) {
		@apply px-16 pb-8;
	}

	:global(.splide__arrow) {
		@apply bg-transparent hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-800/50 dark:active:bg-slate-800;
	}

	:global(.splide__arrow svg) {
		@apply fill-slate-500 dark:fill-slate-400;
	}

	:global(.splide__pagination__page) {
		@apply bg-slate-400 hover:bg-slate-500 dark:bg-slate-600 dark:hover:bg-slate-400;
	}

	:global(.splide__pagination__page.is-active) {
		@apply bg-slate-500 dark:bg-slate-400;
	}
</style>
