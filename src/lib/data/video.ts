import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'animated-brand-short',
		color: '#000000',
		description:
			'Top of funnel brand short for an e-commerce brand. Scripted, filmed, and edited in Adobe Premiere Pro, After Effects, and incorporates AI generated elements.',
		shortDescription:
			'Top of funnel brand short for an e-commerce brand.',
		links: [
			{ to: 'https://vimeo.com/1117498188?share=copy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'Vimeo' },
			
		],
		logo: Assets.Unknown,
		name: 'Animated Brand Short',
		period: {
			from: new Date(2025, 8, 1),
			to: new Date(2025, 8, 1)
		},
		skills: getSkills('ae', 'pr', 'resolve'),
		type: 'Video Production',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/1117498188?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		
	},

	{
		slug: 'james-blake-life-round-here',
		color: '#5e95e3',
		description:
			'I was one of two camera operators for this live stream of James Blake performing "Life Round Here" from Amazon Music Studios. This was broadcast live to the front page of Twitch.',
		shortDescription:
			'Camera work for live stream of James Blake performing Life Round Here from Amazon Music Studios',
		links: [
			{ to: 'https://player.vimeo.com/video/721299289?h=1e26c2950e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'GitHub' },
			
		],
		logo: Assets.Unknown,
		name: 'James Blake Live',
		period: {
			from: new Date(2021, 8, 1),
			to: new Date(2021, 8, 1)
		},
		skills: getSkills('cam-op'),
		type: 'Livestream',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/721299289?h=1e26c2950e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		
	},
	{
		slug: 'americana-laundorama',
		color: '#ff3e00',
		description:
			'Sound design for this short film directed by <a href="https://www.natesoto.com/" target="_blank" rel="noopener noreferrer">Nate Soto</a>. Featured in the Lower East Side Film Festival 2024, Pictoplasma 2024, New York City Independent Film Festival 2024, Interfilm Berlin 2024, GIRAF 2024.',
		shortDescription:
			'Sound design for this short film directed by Nate Soto.',
		links: [{ to: 'https://www.natesoto.com/work/americana-laundorama', label: 'Nate Soto.com' }],
		logo: Assets.Unknown,
		name: 'Americana Laundorama',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2019,7,3)
		},
		skills: getSkills('mixing', 'reaper', 'ableton', 'pr', 'ae'),
		type: 'Short Film',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/907974786?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		screenshots: [
			{
				label: 'screenshot 1',
				src: 'https://images.squarespace-cdn.com/content/v1/61118aa1357010220949b721/7fb62794-763a-4ce2-b0cc-23dfe8f1d53a/AmericanaLaundorama_EDIT_NS_240128+%2800000%29.jpg?format=1500w'
			},
			{
				label: 'screenshot 2',
				src: 'https://images.squarespace-cdn.com/content/v1/61118aa1357010220949b721/47e78f49-ed28-473e-b9fc-ef9ea14bf2fb/AmericanaLaundorama_EDIT_NS_240128+%2800080%29.jpg?format=1500w'
			},
			{
				label: 'screenshot 3',
				src: 'https://images.squarespace-cdn.com/content/v1/61118aa1357010220949b721/9f5660f6-99c9-4f29-9041-56b89ac9c041/AmericanaLaundorama_EDIT_NS_240128+%2800200%29.jpg?format=1500w'
			},
			{
				label: 'screenshot 4',
				src: 'https://images.squarespace-cdn.com/content/v1/61118aa1357010220949b721/fbc29764-df73-4230-9816-083e34e88df5/AmericanaLaundorama_EDIT_NS_240128+%2800216%29.jpg?format=1500w'
			},
		]
	},

	{
		slug: 'bloomberg-phil',
		color: '#ff3e00',
		description:
			'One of 2 camera operators for a Bloomberg Philanthropies event in Baltimore, MD. Filmed using Sony PMW 300 XDCAMs',
		shortDescription:
			'One of 2 camera operators for a Bloomberg Philanthropies event in Baltimore, MD.',
		links: [{ to: 'https://player.vimeo.com/video/721290246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'Vimeo' }],
		logo: Assets.Unknown,
		name: 'Bloomberg Philanthropies',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2019,7,3)
		},
		skills: getSkills('cam-op'),
		type: 'Livestream',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/721290246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
	},
	{
		slug: 'vision-mag',
		color: '#ffa500',
		description:
			'Created a promotional trailer for a music production product based on reference videos from another niche and edited it using Adobe Premiere, After Effects, and Davinci Resolve. I also wrote and produced the music using the advertised product.',
		shortDescription:
			'Promotional trailer for a music production product.',
		links: [{ to: ' https://player.vimeo.com/video/504562182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'Vimeo' }],
		logo: Assets.Unknown,
		name: 'VISION MAGNET Trailer',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2019,7,3)
		},
		skills: getSkills('pr', 'ae', 'resolve', 'ableton', 'mixing', 'mastering'),
		type: 'Ecommerce Video',
		basePath: '',
		vimeoVideoEmbed: [' https://player.vimeo.com/video/504562182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin'],
	},
	{
		slug: 'spotify-ad-podcast',
		color: '#90ee90',
		description:
			'One of 2 camera operators for this podcast pilot episode for Spotify at their offices in New York City. Filmed using Sony FX9 cameras.',
		shortDescription:
			'Podcast pilot episode for Spotify at their offices in New York City.',
		links: [{ to: ' https://player.vimeo.com/video/720880649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'Vimeo' }],
		logo: Assets.Unknown,
		name: 'Spotify Ad Podcast',
		period: {
			from: new Date(2022,7,1),
			to: new Date(2022,7,3)
		},
		skills: getSkills('cam-op'),
		type: 'Podcast',
		basePath: '',
		vimeoVideoEmbed: [' https://player.vimeo.com/video/720880649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin'],
	}


];

const title = 'Video Production';

const VideoData = { title, items };

export default VideoData;

