import type { ExperienceItem } from './types';

export const projects: ExperienceItem[] = [
	{
		company: 'Sensory Interactive',
		website: { href: 'https://vimeo.com/639565861', text: 'Video of in-lobby display' },
		title: 'Contract Software Engineer',
		startDate: new Date('2021-06-01'),
		endDate: new Date('2021-06-01'),
		bulletPoints: [
			'Developed an app to serve as a menu page and a calibration page for a <a href="https://vimeo.com/639565861" target="_blank">lobby display<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a> using NextJS',
			'Heavily utilized SVGs and CSS animations to produce smooth transitions between angled displays'
		]
	},
	{
		company: 'The Public Theater',
		website: { href: 'https://hwap.anderapps.com', text: 'HWAP App' },
		title: 'Contract Software Engineer',
		startDate: new Date('2021-08-01'),
		endDate: new Date('2022-06-01'),
		bulletPoints: [
			"Designed and built a custom notification system for the company's High-Wind Action Plan",
			'Integrated with an on-site weather station through Ambient Weather for real-time wind speed readings',
			'Developed customizable Slack and SMS alerts to employees subscribing to the list'
		]
	},
	{
		company: 'Just the Right Piece, LLC',
		title: 'Contract Software Engineer',
		startDate: new Date('2016-03-01'),
		endDate: new Date('2019-01-01'),
		bulletPoints: [
			'Developed a fully customized inventory management, CMS, and product gallery',
			'Integrated inventory and order sync with Clover POS system'
		]
	}
];
