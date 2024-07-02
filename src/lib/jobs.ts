import type { ExperienceItem } from './types';

export const jobs: ExperienceItem[] = [
	{
		company: 'Flowcode',
		website: { href: 'https://www.flowcode.com/', text: 'flowcode.com' },
		location: 'New York, NY',
		title: 'Senior Software Engineer II',
		startDate: new Date('2022-09-26'),
		bulletPoints: [
			'Mentored junior engineers in React and agile processes',
			'Led engineering initiative and collaborated closely with designers to create a new internal design system',
			'Built the <a href="https://www.canva.com/apps/AAFIRwESLpI/flowcode-qr" target="_blank">Flowcode QR<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a> app on Canva, driving over 50k new sign-ups that have created more than 120k QR codes with 1M+ total scans',
			'Created an in-app image cropping tool, reducing time to create a conversion suite from 20 minutes to 2'
		]
	},
	{
		company: 'Primary Kids, Inc.',
		website: { href: 'https://www.primary.com/', text: 'primary.com' },
		location: 'New York, NY',
		title: 'Senior Software Engineer',
		startDate: new Date('2021-06-12'),
		endDate: new Date('2022-09-23'),
		bulletPoints: [
			'Led team effort to achieve full site-wide accessibility compliance, adhering to WCAG 2.1 standards',
			'Created internal monorepo for microservices on Cloudflare Workers',
			'Designed new front-end architecture using Typescript and React',
			'Set and enforced code quality standards through ESLint, Prettier, and git hooks',
			'Implemented CI/CD with Github Actions CI'
		]
	},
	{
		company: 'Primary Kids, Inc.',
		website: { href: 'https://www.primary.com/', text: 'primary.com' },
		location: 'New York, NY',
		title: 'Software Engineer',
		startDate: new Date('2019-08-12'),
		endDate: new Date('2021-06-11'),
		bulletPoints: [
			'Introduced exception and performance monitoring using Sentry',
			'Collaborated closely with lead designer to define a new design system',
			'Engineering UX lead during migration from Spree to Shopify'
		]
	},
	{
		company: 'The Public Theater',
		website: { href: 'https://hwap.anderapps.com', text: 'HWAP App' },
		location: 'Brooklyn, NY (remote)',
		title: 'Contract Software Engineer',
		startDate: new Date('2021-08-12'),
		endDate: new Date('2022-06-12'),
		bulletPoints: [
			"Designed and built a custom notification system for the company's High-Wind Action Plan",
			'Integrated with an on-site weather station through Ambient Weather for real-time wind speed readings',
			'Developed customizable Slack and SMS alerts to employees subscribing to the list'
		]
	},
	{
		company: 'Sensory Interactive',
		website: { href: 'https://vimeo.com/639565861', text: 'Video of in-lobby display' },
		location: 'Brooklyn, NY (remote)',
		title: 'Contract Software Engineer',
		startDate: new Date('2021-06-07'),
		endDate: new Date('2021-07-30'),
		bulletPoints: [
			'Developed an app to serve as a menu page and a calibration page for an angled, multi-screen <a href="https://vimeo.com/639565861" target="_blank">lobby display<span class="material-symbols--open-in-new ml-1 print:hidden"></span></a> using NextJS',
			'Heavily utilized SVGs and CSS animations to produce smooth transitions between angled displays'
		]
	},
	{
		company: 'StreetSmarts, LLC',
		title: 'Co-Founder and CTO',
		location: 'Brooklyn, NY (remote)',
		startDate: new Date('2018-04-01'),
		endDate: new Date('2021-06-21'),
		bulletPoints: [
			'Created back-end application in Ruby on Rails with an asynchronous, event-driven architecture',
			'Created front-end application in Vue.js on Firebase Hosting',
			'Designed and optimized Postgres database schema',
			'Defined versioned REST and GraphQL APIs with multiple levels of access based on user roles'
		]
	},
	{
		company: 'Just the Right Piece, LLC',
		title: 'Contract Software Engineer',
		location: 'Salem, NH',
		startDate: new Date('2016-03-02'),
		endDate: new Date('2019-01-12'),
		bulletPoints: [
			'Developed a fully customized inventory management, CMS, and product gallery',
			'Integrated inventory and order sync with Clover POS system'
		]
	},
	{
		company: 'Promoboxx',
		website: { href: 'https://www.promoboxx.com/', text: 'promoboxx.com' },
		location: 'Boston, MA',
		title: 'Software Engineer',
		startDate: new Date('2015-05-20'),
		endDate: new Date('2018-07-18'),
		bulletPoints: [
			'Rewrote Facebook integration in a modular fashion, reducing barriers to entry for other developers and improving testability',
			'Implemented direct native video sharing on Facebook by taking a hackathon project to production',
			'Reduced microservice response time to < 100ms through optimizing database queries, caching, and moving tasks that were not critical to the request/response lifecycle to background processes',
			'Led the transition from Resque to Sidekiq for background job processing',
			"Expanded ad features with Facebook's marketing API to add audience network and Instagram placements, show real ad previews to clients prior to purchase, and provide reporting"
		]
	},
	{
		company: 'Launch Academy',
		website: { href: 'https://www.launchacademy.com/', text: 'launchacademy.com' },
		location: 'Boston, MA',
		title: 'Ruby on Rails Apprentice',
		startDate: new Date('2015-02-16'),
		endDate: new Date('2015-04-29'),
		description:
			'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no experience and teaching them what it takes to add value as a junior contributor to a software engineering team.'
	}
];
