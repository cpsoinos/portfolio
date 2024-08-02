<script lang="ts">
	import { buildImageUrl, TRANSFORM_BASE_URL } from '$lib/images';
	import { Image } from '@unpic/svelte';

	const title = "Hi. I'm Corey.";
	const subtitle =
		"I'm a full-stack software enginer with a passion for great, accessible UX. I love writing beautiful code that makes beautiful designs come to life.";

	const heroImgUrl = buildImageUrl('hero-illustration.png');
</script>

<section class="grid grid-cols-3 items-center py-40">
	<div class="col-span-2 flex flex-col gap-10">
		<h1 class="font-display text-4xl text-slate-900 dark:text-slate-50">{title}</h1>
		<p class="font-mono">{subtitle}</p>
	</div>
	<Image class="col-span-1" width={420} height={440} src={heroImgUrl} alt="Illustration of Corey" />
</section>
