import { writable, type Readable } from 'svelte/store';
import { themeSwitcherDefaultColors, type ThemeSwitcherColors } from './colors';
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
	colors: ThemeSwitcherColors;
	labels: ThemeSwitcherLabels;
}

export interface ThemeStore extends Readable<Theme> {
	setTheme: (value: Theme) => void;
	colors: ThemeSwitcherColors;
	labels: ThemeSwitcherLabels;
}

export function createThemeSwitcher(config?: Partial<ThemeSwitcherConfig>) {
	const { colors, labels } = {
		colors: themeSwitcherDefaultColors,
		labels: defaultLabels,
		...config
	};

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
		setTheme,
		colors,
		labels
	};

	setThemeStore(store);

	return store;
}
