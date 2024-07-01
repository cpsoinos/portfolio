export interface Link {
	href: string;
	text: string;
	icon?: string;
}

export interface ExperienceItem {
	company: string;
	website?: Link;
	location: string;
	title: string;
	startDate: Date;
	endDate: Date | 'current';
	description?: string;
	bulletPoints?: string[];
}

export interface ProjectItem {
	title: string;
	links?: Link[];
	description?: string;
	bulletPoints?: string[];
}

export interface EducationItem {
	university: string;
	college: string;
	website?: Link;
	degree: string;
	startDate: Date;
	endDate: Date | 'current';
}
