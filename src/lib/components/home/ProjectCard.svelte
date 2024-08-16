<script lang="ts">
	import '@splidejs/svelte-splide/css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { buildImageUrl, BUCKET_BASE_URL } from '$lib/images';
	import { Image } from '@unpic/svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { ProjectGalleryItem } from '$lib/types';
	import { twMerge } from 'tailwind-merge';

	export let project: ProjectGalleryItem;
	export let mediaSide: 'left' | 'right' = 'left';
</script>

<div class={twMerge('grid items-center gap-3 rounded-lg font-mono md:gap-8', $$restProps.class)}>
	<div
		class="flex flex-col gap-3"
		class:md:order-1={mediaSide === 'left'}
		class:md:order-2={mediaSide === 'right'}
	>
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
	</div>

	{#if project.images?.length || project.videos?.length || project.embeds?.length}
		<div
			class="project-media-bg flex flex-col items-center gap-2 py-8"
			class:order-1={mediaSide === 'right'}
			class:order-2={mediaSide === 'left'}
		>
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
								loop
								disablepictureinpicture
								controlslist="nodownload"
								height={300}
								class="max-h-[300px] rounded"
							>
								{#each video as { src, format }}
									<source src="{BUCKET_BASE_URL}/{src}" type="video/{format}" />
								{/each}
								Your browser does not support the video tag.
							</video>
						</SplideSlide>
					{/each}
				{/if}
				{#if project.embeds}
					{#each project.embeds as embed}
						<SplideSlide class="flex flex-col items-center justify-center *:max-w-full *:rounded">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html embed.html}
						</SplideSlide>
					{/each}
				{/if}
			</Splide>
		</div>
	{/if}
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
		@apply px-16;
	}

	:global(.splide.is-overflow) {
		@apply pb-8;
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

	.project-media-bg {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
	}
</style>
