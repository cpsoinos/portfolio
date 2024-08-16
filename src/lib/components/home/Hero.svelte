<script lang="ts">
	import { buildImageUrl } from '$lib/images';
	import { Image } from '@unpic/svelte';

	const title = 'Hi. I’m Corey.';
	const subtitle =
		'I’m a full-stack software enginer specializing in frontend web development. I have a passion for great, accessible UX.';

	const heroImgUrl = buildImageUrl('hero-illustration.png');
</script>

<section class="flex grid-cols-3 flex-col items-center gap-16 md:grid">
	<div class="col-span-2 flex flex-col gap-10">
		<h1 class="font-display text-6xl text-slate-900 md:text-8xl dark:text-slate-50">{title}</h1>
		<p class="font-mono">{subtitle}</p>
		<div class="flex justify-center md:justify-end">
			<a
				href="/resume"
				class="duration-250 rounded bg-indigo-400 px-4 py-2.5 font-mono text-slate-50 transition-colors hover:bg-indigo-500 active:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:active:bg-indigo-400/85"
			>
				View my resume
			</a>
		</div>
	</div>
	<Image
		class="col-span-1"
		width={420}
		height={440}
		src={heroImgUrl}
		alt="Illustration of Corey"
		priority
	/>
</section>
