import { preloadIcons } from '$lib/icons';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';
import posthog from 'posthog-js';
import { env } from '$env/dynamic/public';

export const load: LayoutLoad = async () => {
	await preloadIcons();

	if (browser) {
		posthog.init(env.PUBLIC_POSTHOG_API_KEY, {
			api_host: 'https://ph.anderapps.com',
			person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
		});
	}

	return {};
};
