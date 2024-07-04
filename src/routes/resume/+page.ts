import type { PageLoad } from './$types';
import { jobs } from '$lib/jobs';
import { projects } from '$lib/projects';
import { education } from '$lib/education';
import type { User } from '$db/users';
import { skills } from '$lib/skills';

const user: User = {
	id: 'abc1234',
	createdAt: new Date(),
	updatedAt: new Date(),
	name: 'Corey Psoinos',
	email: 'coreypsoinos@gmail.com',
	phone: '(978) 835-0558',
	location: 'Brooklyn, NY',
	summary:
		'Accomplished frontend-focused full-stack engineer with 9 years of experience. Passionate about UX, design systems, accessibility, and developer experience tooling. Expertise in NextJS, React, Svelte, SvelteKit, Vue, Node, V8, and Ruby on Rails. Proficient in setting up CI/CD pipelines to ensure quality, consistency, and velocity. Experienced with Cloudflare, AWS, Firebase, GCP, and Heroku.',
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
		user,
		jobs,
		projects,
		education,
		skills
	};
};
