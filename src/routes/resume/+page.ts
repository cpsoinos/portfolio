import type { User } from '$lib/types';
import type { PageLoad } from './$types';

const user: User = {
	name: 'Corey Psoinos',
	email: 'coreypsoinos@gmail.com',
	phone: '(978) 835-0558',
	location: 'Brooklyn, NY',
	summary:
		'Accomplished frontend-focused full-stack engineer passionate about UX, design systems, accessibility, and developer experience tooling. Expertise in Next.js, React, Svelte, SvelteKit, Node, Vue, and Ruby on Rails. Proficient with Cloudflare, AWS, Firebase, GCP, and Heroku.',
	links: [
		{
			href: 'https://linkedin.com/in/cpsoinos',
			text: 'linkedin.com/in/cpsoinos',
			icon: 'devicon:linkedin'
		},
		{ href: 'https://github.com/cpsoinos', text: 'github.com/cpsoinos', icon: 'devicon:github' }
	]
};

export const load: PageLoad = () => {
	return {
		user
	};
};
