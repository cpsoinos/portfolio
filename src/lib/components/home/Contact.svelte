<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<section id="contact" class="flex flex-col gap-6 font-mono">
	<h2 class="font-display text-4xl text-slate-900 dark:text-slate-50">Contact</h2>
	<p>Let's connect!</p>

	<div class="flex flex-col gap-8 md:gap-12">
		<div class="text-center">
			<a class="font-mono text-xl underline" href="mailto:corey@coreypsoinos.dev">
				corey@coreypsoinos.dev
			</a>
		</div>

		<ul class="flex justify-around font-mono">
			<li>
				<a href="/resume" class="inline-flex items-center gap-2">
					<Icon icon="pepicons-pop:cv" />
					Resume
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/cpsoinos/"
					target="_blank"
					class="inline-flex items-center gap-2"
				>
					<Icon icon="devicon:linkedin" />
					LinkedIn
				</a>
			</li>
			<li>
				<a
					href="https://github.com/cpsoinos"
					target="_blank"
					class="inline-flex items-center gap-2"
				>
					<Icon icon="skill-icons:github-dark" class="inline dark:hidden" />
					<Icon icon="skill-icons:github-light" class="hidden dark:inline" />
					GitHub
				</a>
			</li>
		</ul>
	</div>
</section>
