import { loadIcons } from '@iconify/svelte';

const ICONS = [
	'devicon:github',
	'devicon:linkedin',
	'logos:npm-icon',
	'mdi:open-in-new',
	'mdi:location',
	'lucide:moon-star',
	'lucide:sun',
	'lucide:sun-moon'
];

export async function preloadIcons() {
	try {
		return new Promise((resolve, reject) => {
			loadIcons(ICONS, (loaded, missing, pending) => {
				if (pending.length) {
					// Icons are pending, wait for all to load/fail
					//
					// If pending list is not empty, callback will be called
					// again when all icons are either loaded or missing
					return;
				}
				if (missing.length) {
					reject({
						loaded,
						missing
					});
				} else {
					resolve({
						loaded
					});
				}
			});
		});
	} catch (err) {
		console.error(err);
	}
}
