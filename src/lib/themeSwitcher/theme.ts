import { writable, type Readable } from 'svelte/store';
import { setThemeStore } from './context';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

export const themes: Theme[] = ['light', 'dark', 'system'];

export interface ThemeSwitcherLabels {
	light: string;
	dark: string;
	system: string;
}

export const defaultLabels = {
	light: 'Light',
	dark: 'Dark',
	system: 'System'
};

export interface ThemeSwitcherConfig {
	key: string;
	labels: ThemeSwitcherLabels;
}

export interface ThemeStore extends Readable<Theme> {
	setTheme: (value: Theme) => void;
}

export function createThemeSwitcher() {
	let theme: Theme = 'system';

	if (browser) {
		const saved: Theme = localStorage.theme;
		if (saved === 'light' || saved === 'dark') {
			theme = saved;
		}
	}

	const { subscribe, set } = writable(theme);

	function setTheme(value: Theme) {
		// only update if valid, and it's changed
		if (themes.includes(value) && value !== theme) {
			theme = value;
			set(theme);
		}
	}

	const store: ThemeStore = {
		subscribe,
		setTheme
	};

	setThemeStore(store);

	return store;
}
