<script lang="ts">
	import ThemeSwitcher from '$lib/themeSwitcher/ThemeSwitcher.svelte';
	import { Image } from '@unpic/svelte';
	import { createMenu } from 'svelte-headlessui';
	import { Transition } from 'svelte-transition';
	import Icon from './Icon.svelte';

	const menu = createMenu({ label: 'Actions' });

	const links = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Projects', href: '/projects' },
		{ text: 'Skills', href: '/skills' },
		{ text: 'Contact', href: '/contact' }
	];

	function onChange() {
		menu.close();
	}
</script>

<header class="flex items-center justify-between py-4 font-display dark:text-white">
	<a href="/" class="flex items-center gap-4 hover:no-underline">
		<Image src="/logo-dark.svg" layout="constrained" width={40} height={40} alt="Logo" />
		<span class="text-xl font-bold">Corey Psoinos</span>
	</a>

	<!-- desktop -->
	<nav class="hidden items-center gap-4 font-mono md:flex">
		{#each links as link}
			<a href={link.href} class="hover:text-indigo-700 dark:hover:text-indigo-400">{link.text}</a>
		{/each}
		<div class="border-l pl-4">
			<ThemeSwitcher />
		</div>
	</nav>

	<!-- mobile -->
	<div class="relative inline-block text-left font-mono md:hidden">
		<button
			use:menu.button
			on:change={onChange}
			class="rounded-md p-4 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		>
			<span class="sr-only">Menu</span>
			<Icon icon="lucide:more-vertical" />
		</button>

		<Transition
			show={$menu.expanded}
			enter="transition ease-out duration-100"
			enterFrom="transform opacity-0 scale-95"
			enterTo="transform opacity-100 scale-100"
			leave="transition ease-in duration-75"
			leaveFrom="transform opacity-100 scale-100"
			leaveTo="transform opacity-0 scale-95"
		>
			<div
				use:menu.items
				class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-slate-600 dark:bg-slate-800"
			>
				{#each links as link}
					<div class="p-1">
						<a
							href={link.href}
							class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
							use:menu.item
						>
							{link.text}
						</a>
					</div>
				{/each}
				<div class="p-2">
					<ThemeSwitcher />
				</div>
			</div>
		</Transition>
	</div>
</header>
