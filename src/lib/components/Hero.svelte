<script lang="ts">
	import { buildImageUrl } from '$lib/images';
	import { Image } from '@unpic/svelte';

	const title = "Hi. I'm Corey.";
	const subtitle =
		"I'm a full-stack software enginer with a passion for great, accessible UX. I love writing beautiful code that makes beautiful designs come to life.";

	const heroImgUrl = buildImageUrl('hero-illustration.png');
</script>

<section class="flex grid-cols-3 flex-col items-center gap-8 md:grid md:gap-0">
	<div class="col-span-2 flex flex-col gap-10">
		<h1 class="font-display text-4xl text-slate-900 dark:text-slate-50">{title}</h1>
		<p class="font-mono">{subtitle}</p>
	</div>
	<Image class="col-span-1" width={420} height={440} src={heroImgUrl} alt="Illustration of Corey" />
</section>
