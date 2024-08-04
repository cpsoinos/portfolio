<script lang="ts">
	import { projects } from '$lib/projects';
	import { buildImageUrl, BUCKET_BASE_URL } from '$lib/images';
	import { Image } from '@unpic/svelte';
</script>

<section id="projects" class="flex flex-col gap-6">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Projects</h2>
	<p class="font-mono">Here are some of the projects I've worked on.</p>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<div class="flex flex-col justify-around gap-2 rounded-lg border border-slate-900/10">
				<h3 class="font-display text-2xl text-slate-900 dark:text-slate-50">{project.title}</h3>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p class="wysiwyg">{@html project.description}</p>
				<div class="flex flex-col items-center gap-2">
					{#if project.images}
						<Image
							src={buildImageUrl(project.images[0].src)}
							alt={project.images[0].alt}
							width={400}
							aspectRatio={project.images[0].aspectRatio}
							class="rounded"
						/>
					{/if}
					{#if project.videos}
						{#each project.videos as video}
							<!-- svelte-ignore a11y-media-has-caption -->
							<video
								controls
								autoplay
								loop
								disablepictureinpicture
								controlslist="nodownload"
								class="rounded"
							>
								<source src="{BUCKET_BASE_URL}/{video.src}" type="video/webm" />
								Your browser does not support the video tag.
							</video>
						{/each}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
