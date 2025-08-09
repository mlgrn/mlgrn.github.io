import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'life-so-simple',
		color: '#5e95e3',
		description:
			'<strong>Life So Simple...From Birth to Death</strong> is an hour long concert suite for 30 piece chamber orchestra co-written with <a href="https://unit7noise.bandcamp.com/">Michael Folmer Hansen</a>. <br /> <br /> We wrote the original pieces using software instruments during COVID lockdowns entirely in DAW software, then later adapted them for live performance and developed scores. <br /> <br /> This is my most ambitious project to date. Not only did I write the music with Michael and prepare scores, I also organized the concert logistics, including hiring the group, organizing rehearsals, securing a venue, managing the audio and video recording teams, as well as marketing the event, doing the final mixes and mastering of the audio recording, and editing both the final videos you see on this page in addition to the videos loops of the artwork we projected during the concert. <br /> <br /> Below is a gallery of the concert in full, as well as the individual movements. <br /> <br /> Performed by <a href="https://www.contemporaneous.org/">Contemporaneous</a>. Featuring artwork by <a href="https://www.instagram.com/_hego/">HEGO</a>. <br />Filmed by <a href="https://www.universalliveav.com/">Universal Live</a>. ',
		shortDescription:
			'60 minute concert suite for 30 piece chamber orchestra co-written with Michael Folmer Hansen.',
		links: [
			{ to: 'https://www.youtube.com/watch?v=eyiDHXhpp94', label: 'YouTube' },
			
		],
		logo: Assets.Unknown,
		name: 'Life So Simple...',
		period: {
			from: new Date(2024, 2,1),
			to: new Date(2024, 8,1)
		},
		skills: getSkills('mixing', 'comp', 'Mastering' ),
		type: 'Composition & Event Production',	
		basePath:'',
		// use embed version of the youtube video, not the raw url from browser
		youtubeVideoEmbed: ['https://www.youtube.com/embed/eyiDHXhpp94?si=wUM0h-O_KRUN8rD_', 
			'https://www.youtube.com/embed/OPrr4T3r4ww?si=7XGB_Obw-daEYRnY',
			'https://www.youtube.com/embed/jxn8y1BVcmc?si=iP4RdEbLqIu1UBIn',
			'https://www.youtube.com/embed/cYxLQz0IMBc?si=sr_PULjW3grd00Mg',
			'https://www.youtube.com/embed/RetWXC6Sbyw?si=-qWCNK6usLQw4O93',
			'https://www.youtube.com/embed/Vu4iLWngKj4?si=jZ-bd8eB_r6lfK7x',
			'https://www.youtube.com/embed/EQe5Je8GTDA?si=rdiXhVRjad_i6T-Z',
			'https://www.youtube.com/embed/rtjs-6LmzvE?si=qIpbcWTu_9-namC3',
			'https://www.youtube.com/embed/Z2EfKG6iAuw?si=wuPgzNeZXNEXFlQf'
		]
	},
	{
		slug: 'black-boy-wonderment',
		color: '#ff3f00',
		description:
			'Black Boy Wonderment is the 9th album by The IZM. I worked with him to finalize the mix and do the mastering of the album.',
		shortDescription:
			'Black Boy Wonderment is the 9th album by The IZM',
		links: [{ to: 'https://www.youtube.com/embed/videoseries?si=8OpjABsP1FjXbagr&amp;list=OLAK5uy_mcEW6FrJBXUYn6xLJJdzPgHcdzKDKcyFE', label: 'YouTube' }],
		logo: Assets.Unknown,
		name: 'Black Boy Wonderment',
		period: {
			from: new Date(2019, 8, 1),
			to: new Date(2019, 8, 30)
		},
		skills: getSkills('mixing', 'Mastering'),
		type: 'Album',
		basePath:'',   
		youtubeVideoEmbed: ['https://www.youtube.com/embed/videoseries?si=8OpjABsP1FjXbagr&amp;list=OLAK5uy_mcEW6FrJBXUYn6xLJJdzPgHcdzKDKcyFE'],
		//screenshots: [
		//	{
		//		label: 'screen 1',
		//		src: 'https://f4.bcbits.com/img/a1246816384_16.jpg'
		//	},
			
		//]
		
	}
	
];

const title = 'Music';

const MusicData = { title, items };

export default MusicData;
