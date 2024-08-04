<script lang="ts">
	import { projects } from '$lib/projects';
	import { buildImageUrl, BUCKET_BASE_URL } from '$lib/images';
	import { Image } from '@unpic/svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<section id="projects" class="flex flex-col gap-6">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Projects</h2>
	<p class="font-mono">Here are some of the projects I've worked on outside of work.</p>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<div class="flex flex-col gap-3 rounded-lg border border-slate-900/10">
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
					{#if project.images}
						<Image
							src={buildImageUrl(project.images[0].src)}
							alt={project.images[0].alt}
							height={300}
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
								class="h-[300px] rounded"
								height={300}
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
