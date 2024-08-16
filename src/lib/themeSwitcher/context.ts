import { getContext, setContext } from 'svelte';
import type { ThemeStore } from './theme';

const KEY = 'theme';

export function getThemeStore() {
	return getContext<ThemeStore>(KEY);
}

export function setThemeStore(store: ThemeStore) {
	setContext(KEY, store);
}
