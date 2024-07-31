import { projects } from '$lib/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projectsDataPromises = projects.map(async (project) => {
		if (project.github) {
			const github = project.github;
			const res = await fetch(`https://api.github.com/repos/${github.username}/${github.repo}`);
			const data = await res.json();
			project.github.stars = data.stargazers_count;
		}
		if (project.npm) {
			const npm = project.npm;
			const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${npm.package}`);
			const data = await res.json();
			project.npm.weeklyDownloads = data.downloads;
		}
		return project;
	});
	const projectsData = await Promise.all(projectsDataPromises);

	return {
		projects: projectsData
	};
};
