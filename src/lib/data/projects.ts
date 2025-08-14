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
