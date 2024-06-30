<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { ProjectItem } from './types';

	export let items: ProjectItem[];
</script>

<div class="flex flex-col gap-2">
	<h2 class="border-t-2 border-indigo-600 bg-gray-50 p-1 uppercase text-gray-500 print:text-xs">
		Projects
	</h2>
	<div class="flex flex-col gap-4">
		{#each items as item (item.title)}
			<div>
				<h3 class="text-lg uppercase text-gray-700 print:text-sm">
					{item.title}
				</h3>
				{#if item.links?.length}
					<div class="flex items-center gap-4 text-sm text-indigo-600 print:text-xs">
						{#each item.links as link}
							<a href={link.href} target="_blank" class="flex gap-1">
								{#if link.icon}
									<Icon icon={link.icon} class="inline" inline />
								{/if}
								{link.text}
							</a>
						{/each}
					</div>
					<!-- <a
						href={item.website.href}
						target="_blank"
						class="flex items-center gap-1 text-sm text-indigo-600 print:text-xs"
					>
						{item.website.text}
						<Icon icon="mdi:open-in-new" class="inline print:hidden" inline />
					</a> -->
				{/if}
				{#if item.description}
					<p class="text-sm print:text-2xs print:leading-normal">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html item.description}
					</p>
				{/if}
				{#if item.bulletPoints?.length}
					<ul class="wysiwyg list-disc ps-4">
						{#each item.bulletPoints as bulletPoint}
							<li class="text-sm text-gray-900 print:text-2xs print:leading-normal">
								<!-- eslint-disable-next-line svelte/no-at-html-tags -->
								{@html bulletPoint}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</div>
</div>
