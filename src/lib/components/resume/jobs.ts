import type { ExperienceItem } from './types';

export const jobs: ExperienceItem[] = [
	{
		company: 'Flowcode',
		website: { href: 'https://www.flowcode.com/', text: 'flowcode.com' },
		title: 'Senior Software Engineer II',
		startDate: new Date('2022-09-26'),
		endDate: 'current',
		bulletPoints: [
			'Mentored junior engineers in React and agile processes',
			'Led engineering initiative and collaborated closely with designers to create a new internal design system',
			'Built the <a href="https://www.canva.com/apps/AAFIRwESLpI/flowcode-qr">Flowcode QR</a> app on Canva, driving over 50k new sign-ups that have created more than 120k QR codes with 1M+ total scans',
			'Created an in-app image cropping tool, reducing time to create a conversion suite from 20 minutes to 2'
		]
	},
	{
		company: 'Primary Kids, Inc.',
		website: { href: 'https://www.primary.com/', text: 'primary.com' },
		title: 'Senior Software Engineer',
		startDate: new Date('2021-06-01'),
		endDate: new Date('2022-09-23'),
		bulletPoints: [
			'Created internal monorepo for microservices on Cloudflare Workers',
			'Engineering UX lead during migration from Spree to Shopify',
			'Designed new front-end architecture using Typescript and React',
			'Set and enforced code quality standards through ESLint, Prettier, and git hooks',
			'Implemented CI/CD with Github Actions CI'
		]
	},
	{
		company: 'Primary Kids, Inc.',
		website: { href: 'https://www.primary.com/', text: 'primary.com' },
		title: 'Software Engineer',
		startDate: new Date('2019-08-01'),
		endDate: new Date('2021-06-01'),
		bulletPoints: [
			'Introduced exception and performance monitoring using Sentry',
			'Collaborated closely with lead designer to define a new design system'
		]
	},
	{
		company: 'StreetSmarts, LLC',
		title: 'Co-Founder and CTO',
		startDate: new Date('2018-04-01'),
		endDate: new Date('2021-06-01'),
		bulletPoints: [
			'Created the back-end application in Ruby on Rails with an asynchronous, event-driven architecture',
			'Created front-end application in Vue.js on Firebase Hosting',
			'Designed and optimized the Postgres database schema',
			'Defined versioned REST and GraphQL APIs with multiple levels of access based on user roles'
		]
	},
	{
		company: 'Promoboxx',
		website: { href: 'https://www.promoboxx.com/', text: 'promoboxx.com' },
		title: 'Software Engineer',
		startDate: new Date('2015-05-01'),
		endDate: new Date('2018-07-01'),
		bulletPoints: [
			'Rewrote Facebook integration in a modular fashion, reducing barriers to entry for other developers and improving testability',
			'Implemented direct native video sharing on Facebook by taking a hackathon project to production',
			'Reduced microservice response time to < 100ms through optimizing database queries, caching, and moving tasks that were not critical to the request/response lifecycle to background processes',
			'Led the transition from Resque to Sidekiq for background job processing',
			"Tech lead for social advertising features: expanded ads with Facebook's marketing API to add audience network and Instagram placements, show real ad previews to clients prior to their purchase, and provide reporting"
		]
	},
	{
		company: 'Launch Academy',
		website: { href: 'https://www.launchacademy.com/', text: 'launchacademy.com' },
		title: 'Ruby on Rails Apprentice',
		startDate: new Date('2015-02-01'),
		endDate: new Date('2015-04-01'),
		description:
			'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no experience and teaching them what it takes to add value as a junior contributor to a software engineering team.'
	}
];
