import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import { base } from '$app/paths';

const items: Array<Project> = [
	{
		slug: 'glitch-magic',
		color: '#00ff00',
		description:
			'I have developed and maintained this Shopify site since 2021. I handle all aspects of the site, from design to development to marketing to creating products. I also handle all customer service and support. <br /> <br /> As with any larger project, this combines a lot of different skills and disciplines. The site is built on Shopify and the theme is both customized in appearance and functionality using Liquid and Javascript. <br /> <br /> The majority of products on the site were created by me, which entails a lot of recording and mixing of sounds as well as creating demo tracks and internal tools to streamline the process. <br /> <br />One common challenge in creating sample packs and software instruments is you will need to work with very large numbers of samples that need to be recorded, labeled, and processes a particular way. I had to create scripts using Reaper, Python, and Lua to automate various aspects of the process. <br /> <br />I also handle all the marketing and SEO for the site, and I have a lot of experience with Google Analytics, Google Search Console, and Meta Ads. This includes creating and testing ad creatives, running campaigns, tracking results, and adjusting the strategy as the site grows and the ad landscape changes.',
		shortDescription:
			'A Shopify site that sells music production assets and software.',
		links: [
			{ to: 'https://glitchmagic.com/', label: 'GlitchMagic.com' },
		
		],
		logo: Assets.Mixing,
		name: 'GlitchMagic.com',
		period: {
			from: new Date(2021, 1, 1),
			to: new Date()
		},
		skills: getSkills('ableton', 'reaper','ae','pr','liquid', 'js', 'css','html','shopify','mixing','comp'),
		type: 'e-commerce website',
		basePath: '',
		screenshots: [
			{	
				label: 'screenshot 1',
				src: `${base}/images/glitch-screen.png`},
				{	
					label: 'screenshot 2',
					src: `${base}/images/glitch-2.png`},
				
			
		],
		
	},

	{
		slug: 'daw-scripting',
		color: '#00ff00',
		description:
			'Two workflows for automating recording of hardware synthesizers using Ableton Live with Max for Live and Reaper, along with some Python helper scripts.',
		shortDescription:
			'Two workflows for automating the more repetitive steps in creating samples and Decent Sampler presets. <br /> <br /> This is an ongoing project that I use to create sample for GlitchMagic.com',
		links: [
			{ to: 'https://www.youtube.com/watch?v=OCfxL7wMwJ8', label: 'YouTube' },
			{ to: 'https://www.youtube.com/watch?v=hIdFdJSHZJo', label: 'YouTube' },
		
		],
		logo: Assets.Python,
		name: 'DAW Scripting',
		period: {
			from: new Date(2025, 2, 1),
			to: new Date()
		},
		skills: getSkills('reaper', 'mixing'),
		type: 'Reaper DAW Scripting',
		basePath: '',
		youtubeVideoEmbed: ['https://www.youtube.com/embed/hIdFdJSHZJo?si=UGm8rUlAStA0Q98Z', 'https://www.youtube.com/embed/OCfxL7wMwJ8?si=qgNLBi0MBY7oFqiu'],
		// screenshots: [
		// 	{	
		// 		label: 'screenshot 1',
		// 		src: `${base}/images/glitch-screen.png`},
		// 		{	
		// 			label: 'screenshot 2',
		// 			src: `${base}/images/glitch-2.png`},
		// 		
		// 	
		// ],
		
	},

	{
		slug: 'healthcare-data-demo',
		color: '#00ff00',
		description:
			'A demonstration project showcasing a concept for a healthcare technology startup. <br /> <br /> I was given a public healthcare dataset and simply told to "do something interesting with it". I wrote some test scripts to probe what was there and decided that allowing a person shopping for healthcare to be informed about claim denial and resubmission rates would be very useful. This certainly is useful to me! <br /> <br /> Next I loaded the data into a Postgres database hosted on Railway, made some API endpoints to expose the data, then some scripts that allow the user to pull relevant data out of it.',
		shortDescription:
			'Python scripting to analyze public healthcare data using FastAPI and Postgres.',
		links: [
			{ to: 'https://vimeo.com/1115689433', label: 'Vimeo' },
		
		],
		logo: Assets.Python,
		name: 'Healthcare Data Demo',
		period: {
			from: new Date(2025, 3, 1),
			to: new Date()
		},
		skills: getSkills('python'),
		type: 'Python Scripting',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/1115689433?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		// screenshots: [
		// 	{	
		// 		label: 'screenshot 1',
		// 		src: `${base}/images/glitch-screen.png`},
		// 		{	
		// 			label: 'screenshot 2',
		// 			src: `${base}/images/glitch-2.png`},
		// 		
		// 	
		// ],
		
	},

	{
		slug: 'portfolio-website',
		color: '#00ff00',
		description:
			'This website was built using SvelteKit with Typescript and Tailwind CSS. It is a simple, clean, and responsive website that is easy to maintain and update.',
		shortDescription:
			'This website was built using SvelteKit with Typescript and Tailwind CSS.',
		links: [],
		logo: Assets.Svelte,
		name: 'EmilioGuarino.com',
		period: {
			from: new Date(2025, 7, 1),
			to: new Date()
		},
		skills: getSkills('js', 'css','html','svelte','typescript','tailwind'),
		type: 'Portfolio Website',
		basePath: '',
		screenshots: [],
		
	},
	
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
