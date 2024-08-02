<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '$lib/components/Icon.svelte';
	import { getThemeStore } from './context';
	import type { Theme, ThemeStore } from './theme';
	import { createListbox } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import { twJoin } from 'tailwind-merge';

	const theme: ThemeStore = getThemeStore();

	const options: { label: string; value: Theme; icon: string }[] = [
		{ label: 'Light', value: 'light', icon: 'ph:sun-duotone' },
		{ label: 'Dark', value: 'dark', icon: 'ph:moon-duotone' },
		{ label: 'System', value: 'system', icon: 'heroicons:computer-desktop-solid' }
	];

	let selectedThemeIcon: string;
	$: if (browser) {
		if ($theme === 'system') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			selectedThemeIcon = prefersDark ? 'lucide:moon-star' : 'lucide:sun';
		} else {
			selectedThemeIcon = options.find((o) => o.value === $theme)?.icon ?? 'lucide:sun';
		}
	}

	const listbox = createListbox({ label: 'Actions', selected: options[2] });

	function onChange(e: Event) {
		const {
			selected: { value }
		} = (e as CustomEvent<{ selected: (typeof options)[number] }>).detail;
		theme.setTheme(value);
	}
</script>

<div class="flex w-full flex-col items-center justify-center">
	<button
		use:listbox.button
		on:change={onChange}
		class="relative w-full rounded-lg bg-white focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:bg-slate-900 dark:focus-visible:border-indigo-300 dark:focus-visible:ring-offset-indigo-300"
	>
		<span class="sr-only">Theme</span>
		<Icon
			icon={selectedThemeIcon}
			class={twJoin(
				'size-5',
				$listbox.selected.value !== 'system' && 'text-indigo-500 dark:text-indigo-300'
			)}
		/>
		<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"> </span>
	</button>
	<div class="relative">
		<Transition
			show={$listbox.expanded}
			leave="transition ease-in duration-100"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<ul
				use:listbox.items
				class="absolute mt-1 max-h-60 w-32 overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800"
			>
				{#each options as value}
					{@const active = $listbox.active === value}
					{@const selected = $listbox.selected === value}
					<li
						class={twJoin(
							'relative cursor-default select-none px-4 py-2',
							active ? 'bg-slate-50 dark:bg-slate-600/30' : 'text-gray-900 dark:text-slate-300'
						)}
						use:listbox.item={{ value }}
					>
						<span
							class={twJoin(
								'flex items-center gap-4',
								selected ? 'font-medium text-indigo-700 dark:text-indigo-300' : 'font-normal'
							)}
						>
							<Icon icon={value.icon} class="size-4" />
							{value.label}
						</span>
					</li>
				{/each}
			</ul>
		</Transition>
	</div>
</div>
