import { env } from '$env/dynamic/private';
import { projects } from '$lib/projects';
import type { PageServerLoad } from './$types';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: env.GITHUB_TOKEN });

export const load: PageServerLoad = async () => {
	const projectsDataPromises = projects.map(async (project) => {
		if (project.github) {
			const {
				repository: { stargazerCount }
			} = await octokit.graphql<{ repository: { stargazerCount: number } }>(
				`query stargazersCount($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        stargazerCount
      }
    }`,
				{
					owner: project.github.username,
					repo: project.github.repo
				}
			);
			project.github.stars = stargazerCount;
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
