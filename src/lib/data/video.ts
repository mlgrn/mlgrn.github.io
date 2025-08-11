import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
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
		type: 'Video Production',
		basePath: '',
		vimeoVideoEmbed: ['https://player.vimeo.com/video/721299289?h=1e26c2950e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		
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
		type: 'Video Production',
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
		type: 'Video Production',
		basePath: '',
		vimeoVideoEmbed: [' https://player.vimeo.com/video/504562182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin'],
	},
	{
		slug: 'spotify-ad-podcast',
		color: '#90ee90',
		description:
			'One of 2 camera operators for this podcast pilot episode for Spotify at their offices in New York City. Filmed using Sony FX9 cameras.',
		shortDescription:
			'Promotional trailer for a music production product.',
		links: [{ to: ' https://player.vimeo.com/video/720880649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share', label: 'Vimeo' }],
		logo: Assets.Unknown,
		name: 'Spotify Ad Podcast',
		period: {
			from: new Date(2022,7,1),
			to: new Date(2022,7,3)
		},
		skills: getSkills('cam-op'),
		type: 'Video Production',
		basePath: '',
		vimeoVideoEmbed: [' https://player.vimeo.com/video/720880649?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin'],
	}


];

const title = 'Video Production';

const VideoData = { title, items };

export default VideoData;

// https://player.vimeo.com/video/504562182?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin