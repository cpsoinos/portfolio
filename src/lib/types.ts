export interface User {
	name: string;
	email: string;
	phone: string;
	location: string;
	summary: string;
	links: Link[];
}

export interface Link {
	href: string;
	text: string;
	icon?: {
		dark: string;
		light: string;
	};
}

export interface ExperienceItem {
	company: string;
	website?: Link;
	location: string;
	title: string;
	startDate: Date;
	endDate?: Date;
	description?: string;
	bulletPoints?: string[];
}

export interface ProjectItem {
	github?: GithubStats;
	npm?: NpmStats;
	title: string;
	links?: Link[];
	description?: string;
	bulletPoints?: string[];
}

type VideoGalleryItem = Array<{
	src: string;
	format: string;
}>;

export interface ProjectGalleryItem extends ProjectItem {
	images?: {
		src: string;
		alt: string;
		aspectRatio: number;
	}[];
	videos?: VideoGalleryItem[];
	embeds?: {
		html: string;
	}[];
}

export interface GithubStats {
	username: string;
	repo: string;
	stars?: number;
}

export interface NpmStats {
	package: string;
	weeklyDownloads?: number;
	downloads?: number;
}

export interface EducationItem {
	university: string;
	college: string;
	website?: Link;
	degree: string;
	startDate: Date;
	endDate?: Date;
}

export interface SkillItem {
	title: string;
	items: string[];
}
