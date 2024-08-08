import { loadIcons } from '@iconify/svelte';

const ICONS = [
	'devicon-plain:circleci',
	'devicon:cloudflare',
	'devicon:firebase',
	'devicon:github',
	'devicon:googlecloud',
	'devicon:linkedin',
	'devicon:materialui',
	'devicon:mongodb',
	'devicon:mysql',
	'devicon:netlify',
	'devicon:nextjs',
	'devicon:nodejs',
	'devicon:npm',
	'devicon:nuxtjs',
	'devicon:postgresql',
	'devicon:react',
	'devicon:redis',
	'devicon:svelte',
	'devicon:tailwindcss',
	'devicon:vercel',
	'devicon:vitejs',
	'devicon:vuejs',
	'devicon:webpack',
	'heroicons:computer-desktop-solid',
	'logos:circleci',
	'lucide:more-vertical',
	'mdi:location',
	'mdi:open-in-new',
	'ph:moon-duotone',
	'ph:sun-duotone',
	'skill-icons:aws-dark',
	'skill-icons:aws-light',
	'skill-icons:docker',
	'skill-icons:github-dark',
	'skill-icons:github-light',
	'skill-icons:heroku',
	'skill-icons:materialui-light',
	'skill-icons:mysql-light',
	'skill-icons:nextjs-light',
	'skill-icons:rails',
	'skill-icons:tailwindcss-light',
	'skill-icons:vercel-light',
	'vscode-icons:file-type-firestore'
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
