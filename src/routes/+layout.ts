import { preloadIcons } from '$lib/icons';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	await preloadIcons();
	return {};
};
