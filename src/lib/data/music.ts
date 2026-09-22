import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	

	{
		slug: 'life-so-simple',
		color: '#5e95e3',
		description:
			'<strong>Life So Simple...From Birth to Death</strong> is an hour long concert suite for 30 piece chamber orchestra co-written with <a href="https://unit7noise.bandcamp.com/">Michael Folmer Hansen</a>. <br /> <br /> We wrote the original pieces using software instruments during COVID lockdowns entirely in DAW software, then later adapted them for live performance and developed scores. <br /> <br /> This is my most ambitious project to date. Not only did I write the music with Michael and prepare scores, I also organized the concert logistics, including hiring the group, organizing rehearsals, securing a venue, managing the audio and video recording teams, as well as marketing the event, doing the final mixes and mastering of the audio recording, and editing both the final videos you see on this page in addition to the video loops of the artwork we projected during the concert. <br /> <br /> Below is a gallery of the concert in full, as well as the individual movements. <br /> <br /> Performed by <a href="https://www.contemporaneous.org/">Contemporaneous</a>. Featuring artwork by <a href="https://www.instagram.com/_hego/">HEGO</a>. <br />Filmed by <a href="https://www.universalliveav.com/">Universal Live</a>. ',
		shortDescription:
			'My 60 minute concert suite for 30 piece chamber orchestra co-written with Michael Folmer Hansen.',
		links: [
			{ to: 'https://www.youtube.com/watch?v=eyiDHXhpp94', label: 'YouTube' },
			
		],
		logo: Assets.Unknown,
		name: 'Life So Simple...',
		period: {
			from: new Date(2024, 2,1),
			to: new Date(2024, 8,1)
		},
		skills: getSkills('mixing', 'comp', 'mastering', 'video-production'),
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
		slug: 'bmw-2027-7-series-grand-central',
		color: '#1c69d4',
		description:
			'I co-composed the piece "In Circles" for the unveiling ceremony for the BMW 2027 7 Series at Grand Central Terminal with cellist James Acampora in collaboration with The Music Dept NYC and Redwood Reverie.',
		shortDescription:
			'I co-composed the piece "In Circles" for the unveiling ceremony for the BMW 2027 7 Series at Grand Central Terminal with cellist James Acampora in collaboration with The Music Dept NYC and Redwood Reverie.',
		links: [
			{ to: 'https://vimeo.com/1228981344', label: 'Vimeo' },
		],
		logo: Assets.Unknown,
		name: 'BMW 2027 7 Series Unveiling at Grand Central Terminal, NYC',
		period: {
			from: new Date(2026, 0, 1),
			to: new Date(2026, 0, 1)
		},
		skills: getSkills('comp'),
		type: 'Composition',
		basePath: '',
		vimeoVideoEmbed: [
			'https://player.vimeo.com/video/1228981344?badge=0&autopause=0&player_id=0&app_id=58479',
		],
		audioTracks: [
			{
				src: '/audio/In%20Circles%20v4.mp3',
				title: 'In Circles (Full Track)'
			}
		],
	},

	{
		slug: 'dont-cry-because-its-over',
		color: '#c45c26',
		description:
			'I composed the string parts for Gengis Don\'s track Don\'t Cry Because it\'s Over, Cry Because you Listened. <br /><h1><strong>Credits</strong> </h1><br /> Featured artists: Gengis Don, Tomoki Sanders, Eiress Wicks, Peter Enriqez. <br /><br /><strong>Composition &amp; Lyrics</strong><br /><br />Emilio Guarino<br />Composer • Lyricist<br /><br />Rodrigo Anavalon<br />Composer • Lyricist<br /><br />Lyndon Harewood<br />Composer • Lyricist<br /><br /><strong>Production &amp; Engineering</strong><br /><br />Tomoki Sanders<br />Studio Producer<br /><br />Gengis Don<br />Studio Producer<br /><br />Chris Gaskel<br />Studio Producer<br /><br />Emilio Guarino<br />Studio Producer<br /><br />Peter Enriquez<br />Studio Producer<br /><br />John Colaiaocovo<br />Studio Producer<br />',
		shortDescription: 'Composed string parts for Gengis Don\'s track Don\'t Cry Because it\'s Over, Cry Because you Listened',
		links: [
			{ to: 'https://youtu.be/tPKSl-5kFpI?si=vLWt94Znc7dTYhZx', label: 'YouTube' },
		],
		logo: Assets.Unknown,
		name: "Don't Cry Because it's Over, Cry Because you Listened",
		period: {
			from: new Date(2026, 0, 1),
			to: new Date(2026, 0, 1)
		},
		skills: getSkills('comp'),
		type: 'Composition',
		basePath: '',
		youtubeVideoEmbed: ['https://www.youtube.com/embed/tPKSl-5kFpI?si=vLWt94Znc7dTYhZx'],
	},

	{
		slug: 'maybelline-fit-me',
		color: '#c8102e',
		description: 'Two demo tracks made for Maybelline social media ads. All rights reserved to Redwood Reverie LLC',
		shortDescription:
			'Two demo tracks made for Maybelline social media ads, including a demo remix of ITZY\'s "Not Shy".',
		links: [
			{ to: 'https://vimeo.com/1228926698/66c5ee2716', label: 'ITZY Not Shy Remix' },
			{ to: 'https://vimeo.com/721196169/ab503082b6', label: 'Fit Me Campaign Demo' }
			
		],
		logo: Assets.Unknown,
		name: 'Maybelline Social Media Campaign',
		period: {
			from: new Date(2022, 5, 1),
			to: new Date(2022, 5, 1)
		},
		skills: getSkills('comp'),
		type: 'Composition',
		basePath: '',
		// unlisted vimeo videos need the ?h= hash from the share link to embed
		vimeoVideoEmbed: [
					'https://player.vimeo.com/video/1228926698?h=66c5ee2716&badge=0&autopause=0&player_id=0&app_id=58479', 
					'https://player.vimeo.com/video/721196169?h=ab503082b6&badge=0&autopause=0&player_id=0&app_id=58479',
		]
	},

	{
		slug: 'brain-opera-2',
		color: '#b2b2ff',
		description:'Brain, Body & Breath <br /> MIT Museum <br /> October 14th & 15th, 2022 <br /> <br /> Composer: Tod Machover <br /> <br /> Performers: Jessica Shand (flutes), Marina Kifferstein and Leah Asher (violin), Carrie Frey (viola), Meaghan Burke (cello), Emilio Guarino (double bass), Yuma Uesaka (clarinets and tenor sax), Sam Jones (trumpet), Jen Baker (tenor trombone), Mike Truesdell (percussion), Cory Smythe (keyboard), Tod Machover (conductor) <br /> <br /> Sound Design: Ben Bloomberg Graphics: Peter Torpey',
		shortDescription:
			'I played bass for Tod Machover\'s Brain, Body & Breath concert at the MIT Museum.',
		links: [
			{ to: 'https://player.vimeo.com/video/840201586?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479', label: 'Vimeo' },
			
		],
		logo: Assets.Unknown,
		name: 'Brain Body + Breath at MIT',
		period: {
			from: new Date(2022, 9,14),
			to: new Date(2022, 9,15)
		},
		skills: getSkills('bass' ),
		type: 'Bass Performance',	
		basePath:'',

		
		// use embed version of the youtube video, not the raw url from browser
		vimeoVideoEmbed: ['https://player.vimeo.com/video/840201586?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
		screenshots: [
			{
				label: 'Program Notes',
				src: 'https://i.ibb.co/Q70QXdw0/Screenshot-2025-08-10-at-6-10-39-PM.png',
			},
			{
				label: 'Program Notes',
				src: 'https://i.ibb.co/7JcBs5v4/Screenshot-2025-08-10-at-6-11-03-PM.png',
			},
			{
				label: 'Program Notes',
				src: 'https://i.ibb.co/7JcBs5v4/Screenshot-2025-08-10-at-6-11-03-PM.png',
			},
			{
				label: 'Program Notes',
				src: 'https://i.ibb.co/JjG2xQdd/Screenshot-2025-08-10-at-6-11-12-PM.png',
			},

			
		]
		
	},

	{
		slug: 'lucerne-alumni-orchestra-2019',
		color: '#8b1a1a',
		description:
			'I played bass with the Lucerne Alumni Orchestra at KKL Lucerne under Riccardo Chailly in 2019 as part of the Lucerne Festival Academy alumni projects. There obviously are a lot of people on stage for this but if you\'re lookiung for me,  I\'m all the way at the far right of the stage (from the audiences\'s perspective.',
		shortDescription:
			'Bass performance with the Lucerne Alumni Orchestra at KKL Lucerne, 2019.',
		links: [
			{ to: 'https://vimeo.com/1228990630', label: 'Vimeo' },
		],
		logo: Assets.Lucerne,
		name: 'Lucerne Alumni Orchestra, 2019 KKL Lucerne with Riccardo Chailly.',
		period: {
			from: new Date(2019, 7, 1),
			to: new Date(2019, 7, 30)
		},
		skills: getSkills('bass'),
		type: 'Bass Performance',
		basePath: '',
		vimeoVideoEmbed: [
			'https://player.vimeo.com/video/1228990630?badge=0&autopause=0&player_id=0&app_id=58479',
		],
	},

	{
		slug: 'get-a-lil',
		color: '#ff3f00',
		description:
			'Mastering for Destiny Autumn\'s "Get a Lil"',
		shortDescription:
			'Mastering for Destiny Autumn\'s "Get a Lil"',
		links: [{ to: 'https://distrokid.com/hyperfollow/destinyautumn/get-a-lil-feat-cola--mattyg-2?ref=release&utm_source=ig&utm_medium=social&utm_content=link_in_bio', label: 'Stream it here' }],
		logo: Assets.Unknown,
		name: 'Destiny Autumn "Get a Lil"',
		period: {
			from: new Date(2020, 1, 1),
			to: new Date(2024, 8, 30)
		},
		skills: getSkills('mastering'),
		type: 'Album',
		basePath:'',   
		screenshots: [
			{
				label: '"Get a Lil" by Destiny Autumn (featuring cola & MattyG)',
				src: '/images/get%20a%20lil%20cover.webp'
			},
			
		],
		audioTracks: [
			{
				src: '/audio/Get%20a%20Lil%2044100%2016%204%20(intro%20adjust).m4a',
				title: '"Get a Lil" by Destiny Autumn (featuring cola & MattyG)'
			}
		],
		
	},

	{
		slug: 'first-life-origin-ep',
		color: '#ff3f00',
		description:
			'I played bass on, co-produced, mixed, and mastered the First Life Origin EP by First Life. <a href="https://distrokid.com/hyperfollow/firstlife/origin?utm_campaign=website&utm_medium=igProfile+&utm_source=SendGrid">Listen on streaming platforms here.</a>',
		shortDescription:
			'Bass, mixing, mastering, and co-production of the First Life Origin EP',
		links: [{ to: 'https://music.apple.com/us/album/origin-ep/1758562284', label: 'Apple Music' }],
		logo: Assets.Unknown,
		name: 'ORIGIN EP by First Life',
		period: {
			from: new Date(2020, 1, 1),
			to: new Date(2024, 8, 30)
		},
		skills: getSkills('bass', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
	//	youtubeVideoEmbed: ['https://embed.music.apple.com/us/album/origin-ep/1758562284'],
		screenshots: [
			{
				label: 'Cover Art',
				src: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2c/38/9c/2c389caa-cc3a-7d98-de67-502be1c94e84/artwork.jpg/632x632bb.webp'
			},
			
		]
		
	},

	{
		slug: 'det-bedste-og-det-værste',
		color: '#3366cc',
		description:
			'Three BASS COMPUTER remixes for Michael Folmer Hansen a.k.a. folmR (Unit 7 Noise). He gave me full creative control over these.',
		shortDescription:
			'Three remixes for folmR and Unit 7 Noise.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/det-bedste-og-det-v-rste', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'det bedste og det værste - Remixes',
		period: {
			from: new Date(2024, 11, 1),
			to: new Date(2025, 3, 9)
		},
		skills: getSkills('comp', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1698722490/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'wirklich-unbekannt',
		color: '#3366cc',
		description:
			'Michael Folmer Hansen a.k.a. folmR (Unit 7 Noise) comissioned me to compose a series of double bass pieces that sit over the top of his ambient electronic compositions.',
		shortDescription:
			'For Double Bass and electronics.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/wirklich-unbekannt-2', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Wirklich unbekannt',
		period: {
			from: new Date(2024, 1, 1),
			to: new Date(2024, 8, 24)
		},
		skills: getSkills('comp', 'bass', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=381250365/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},
	{
		slug: 'bgf',
		color: '#ff3f00',
		description:
			'Michael Folmer Hansen a.k.a. folmR (Unit 7 Noise) on synths, Alex Bedwell on drums, and me on bass. <br /> <br /> Our process for this one was to take Alex\'s drumming, record a mix of <a href="https://www.youtube.com/shorts/6Yj7aGqQ1tc">very experimental</a> and conventional bass parts that I comped together as takes, then Michael added the synths on top of that. ',
		shortDescription:
			'folmR on synths, Alex Bedwell on drums, and me on bass.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/bgf', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'BGF',
		period: {
			from: new Date(2024, 0, 1),
			to: new Date(2024, 1, 29)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=2555685837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'too-hot',
		color: '#ff3f00',
		description:
			'Mixing for Brooklyn based band Sailor Boyfriend. Released August 10, 2021',
		shortDescription:
			'Mixed for Brooklyn based band Sailor Boyfriend',
		links: [{ to: 'https://sailorboyfriend.bandcamp.com/track/too-hot-to-fuck', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Too Hot To Fuck',
		period: {
			from: new Date(2021, 0, 1),
			to: new Date(2021, 1, 29)
		},
		skills: getSkills('mixing'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/track=1611035422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'le-benevole',
		color: '#4285f4',
		description:
			'Michael Folmer Hansen a.k.a. folmR (Unit 7 Noise) comissioned me to compose this piece inspired by the 11 truths of volunteering. <br /> <br /> This was written and recorded using DAW software and plugins. J\'aurais and Noveau Monde were later adapted for live performance as Life So Simple...From Birth to Death. ',
		shortDescription:
			'Inspired by the 11 truths of volunteering.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/le-b-n-vole', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Le bénévole',
		period: {
			from: new Date(2024, 0, 1),
			to: new Date(2024, 1, 29)
		},
		skills: getSkills('comp', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=418822400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'patterns-and-moondragons',
		color: '#4285f4',
		description:
			'Played bass on "Low Sky", as well as mixed, and mastered this EP.',
		shortDescription:
			'Played bass on "Low Sky", as well as mixed, and mastered this EP.',
		links: [{ to: 'https://lateefdameer.bandcamp.com/album/patterns-and-moondragons', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Patterns and Moondragons',
		period: {
			from: new Date(2020, 0, 1),
			to: new Date(2020, 1, 26)
		},
		skills: getSkills('bass', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=969203884/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'hot-wobble',
		color: '#4285f4',
		description:
			'from 2018-2021 I wrote and recorded electronic music under the alias HOT WOBBLE. Completely silly name but an important period of my musical life so the tracks will remain online for posterity.',
		shortDescription:
			'old moniker I used from 2018-2021',
		links: [{ to: 'https://hotwobble.bandcamp.com/', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'HOT WOBBLE',
		period: {
			from: new Date(2018, 0, 1),
			to: new Date(2021, 12, 29)
		},
		skills: getSkills('comp', 'mixing', 'mastering', 'bass'),
		type: 'Artist',
		basePath:'',   
		youtubeVideoEmbed: ['https://www.youtube.com/embed/S0QSe_VeYag?si=s_hIYkTRbBUx-v7f'],
	},




	{
		slug: 'continental-slices',
		color: '#4285f4',
		description:
			'Michael Folmer Hansen on synths, Alex Bedwell on Drums, and me on bass. <br /> <br />Recorded remotely on the continents of Europe, North America and Oceania with a BOSS Slicer pedal as the click track. We were scheduled to recorded together during 2020 in Berlin, but COVID got in the way, so we did this instead... trying to get a live feel and sound.',
		shortDescription:
			'A "live" album.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/continental-slices', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Continental Slices',
		period: {
			from: new Date(2021, 0, 1),
			to: new Date(2021, 1, 2)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1405828336/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},


	{
		slug: 'departure-return',
		color: '#4285f4',
		description:
			'Played bass on all tracks, mixed, and mastered this EP.',
		shortDescription:
			'Played bass on all tracks, mixed, and mastered this EP',
		links: [{ to: 'https://lateefdameer.bandcamp.com/album/departure-return', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Departure/Return',
		period: {
			from: new Date(2019, 0, 1),
			to: new Date(2019, 2, 8)
		},
		skills: getSkills('comp', 'bass', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1260195524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'il-nome',
		color: '#ff3f00',
		description:
			' A collaboration with Michael Folmer Hansen. In his words:"My gratitude, respect and love to the amazing Emilio Guarino for turning my notes into a grand story... Bravo! Bellissimo! Maestro!"',
		shortDescription:
			'A symphony about choices.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/il-nome-scelto-da-birgitte', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Il nome scelto da Birgitte',
		period: {
			from: new Date(2022, 0, 1),
			to: new Date(2022, 10, 22)
		},
		skills: getSkills('comp', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=2283036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'black-boy-wonderment',
		color: '#ff3f00',
		description:
			'Black Boy Wonderment is the 9th album by The IZM. I worked with him to finalize the mix and do the mastering of the album.',
		shortDescription:
			'I mixed and mastered the 9th album by The IZM.',
		links: [{ to: 'https://theizm.bandcamp.com/album/black-boy-wonderment', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Black Boy Wonderment',
		period: {
			from: new Date(2019, 8, 1),
			to: new Date(2019, 8, 30)
		},
		skills: getSkills('mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		youtubeVideoEmbed: ['https://www.youtube.com/embed/videoseries?si=8OpjABsP1FjXbagr&amp;list=OLAK5uy_mcEW6FrJBXUYn6xLJJdzPgHcdzKDKcyFE'],
		//bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1890929091/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
		//screenshots: [
		//	{
		//		label: 'screen 1',
		//		src: 'https://f4.bcbits.com/img/a1246816384_16.jpg'
		//	},
			
		//]
		
	},

	{
		slug: 'cold-roti',
		color: '#ff3f00',
		description:
			'Played and tracked bass on this track for Lateef\'s No Signal project. ',
		shortDescription:
			'Played bass for Cold Roit',
		links: [{ to: 'https://lateefdameer.bandcamp.com/track/cold-roti-feat-emilio-guarino', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Cold Roti',
		period: {
			from: new Date(2018, 8, 1),
			to: new Date(2018, 8, 28)
		},
		skills: getSkills('mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		//youtubeVideoEmbed: ['https://www.youtube.com/embed/videoseries?si=8OpjABsP1FjXbagr&amp;list=OLAK5uy_mcEW6FrJBXUYn6xLJJdzPgHcdzKDKcyFE'],
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=3104692609/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2812960212/transparent=true/'],
		//screenshots: [
		//	{
		//		label: 'screen 1',
		//		src: 'https://f4.bcbits.com/img/a1246816384_16.jpg'
		//	},
			
		//]
		
	},

	{
		slug: 'local-legends',
		color: '#ff3f00',
		description:
			'"Local Legends" released on November 22, 2022. The album contains 12 tracks, including "DO IT FOR THE KIDS," "ONE OF THE FAMILY" (featuring Pootie & Ryan Cordovan), and "KILL EM WITH KINDNESS". Avaiailable on streaming platforms.',
		shortDescription:
			'I mixed and mastered Local Legends by A Sarr',
		links: [{ to: 'https://www.youtube.com/embed/videoseries?si=5GA9QeoT9CPqXlQY&amp;list=OLAK5uy_lgWqmt_zzoAHF-RQG4DKbq7e4Pnya_1F4', label: 'YouTube' }],
		logo: Assets.Unknown,
		name: 'A Sarr - Local Legends',
		period: {
			from: new Date(2022, 8, 22),
			to: new Date(2022, 10, 22)
		},
		skills: getSkills('mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		youtubeVideoEmbed: ['https://www.youtube.com/embed/videoseries?si=qrEhlvQSNr_YmkEc&amp;list=OLAK5uy_lgWqmt_zzoAHF-RQG4DKbq7e4Pnya_1F4'],
		//screenshots: [
		//	{
		//		label: 'screen 1',
		//		src: 'https://f4.bcbits.com/img/a1246816384_16.jpg'
		//	},
			
		//]
		
	},
	{
		slug: 'ascendant',
		color: '#9333ea',
		description:
			'I played bass for Wrex Mason\'s "Shirley Mae" from ASCENDANT',
		shortDescription:
			'I mixed and mastered Local Legends by A Sarr',
		links: [{ to: 'https://9000plus.bandcamp.com/album/ascendant', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Wrex Mason - "Shirley Mae"',
		period: {
			from: new Date(2022, 8, 22),
			to: new Date(2022, 10, 22)
		},
		skills: getSkills('bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1831463582/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=4069999125/transparent=true/'],
		//screenshots: [
		//	{
		//		label: 'screen 1',
		//		src: 'https://f4.bcbits.com/img/a1246816384_16.jpg'
		//	},
			
		//]
		
	},

	{
		slug: 'move-remix)',
		color: '#9333ea',
		description:
			'A remix for folmR (Unit 7 Noise) under an old alias',
		shortDescription:
			'A remix of Move by folmR',
		links: [{ to: 'https://unit7noise.bandcamp.com/track/move-hot-wobble-remix', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Move Remix',
		period: {
			from: new Date(2020, 4, 1),
			to: new Date(2020, 5, 1)
		},
		skills: getSkills('comp', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=3407755537/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=1722043836/transparent=true/'],
	},

	{
		slug: 'aunt-rosemary)',
		color: '#9333ea',
		description:
			'I contributed 4 remixes on this under the alias HOT WOBBLE',
		shortDescription:
			'remixes by HOT WOBBLE',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/the-aunt-rosemary-tape', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'The Aunt Rosemary Tape',
		period: {
			from: new Date(2019, 8, 10),
			to: new Date(2019, 10, 19)
		},
		skills: getSkills('comp', 'mixing', 'mastering'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=254119092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},
	{
		slug: 'slicer-1)',
		color: '#22c55e',
		description:
			'folmR (Unit 7 Noise) on synths, Mat Watson on Drums, and me on bass. Recorded live at Phaedra Studios in Melbourne, Australia in 2018, BOSS Slicer pedal as the click track.',
		shortDescription:
			'Recorded live at Phaedra Studios in Melbourne, Australia',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/slicer', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Slicer',
		period: {
			from: new Date(2018, 1, 10),
			to: new Date(2018, 11, 6)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=912025583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},
	{
		slug: 'soft-red-chocolates)',
		color: '#22c55e',
		description:
			'Remixed under the Hot Wobble alias. Recorded at Kwun Tong Noise Works, Hong Kong. Mixed by James Banbury of Component Music Mastered by Antony Ryan of RedRedPaw',
		shortDescription:
			'Recorded at Kwun Tong Noise Works, Hong Kong.',
		links: [{ to: 'https://unit7noise.bandcamp.com/track/soft-red-chocolates-hot-wobble-remix', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'red chocolates remix',
		period: {
			from: new Date(2018, 10, 10),
			to: new Date(2018, 10, 13)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=2706288082/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=1101516453/transparent=true/'],
	},
	{
		slug: 'hang)',
		color: '#ff3f00',
		description:
			'Recorded in Separation Creek, Australia. with a lot of distortion pedals and reverb with Michael Folmer Hansen.',
		shortDescription:
			'Recorded in Separation Creek, Australia. with a lot of distortion pedals and reverb.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/hang', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'HANG',
		period: {
			from: new Date(2018, 10, 10),
			to: new Date(2018, 10, 18)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=423751118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},
	{
		slug: 'stars)',
		color: '#3366cc',
		description:
			'Recorded in Separation Creek, Australia in the same session as "Hang". with a lot of distortion pedals and reverb with Michael Folmer Hansen.',
		shortDescription:
			'Recorded in Separation Creek, Australia in the same session as "Hang".',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/stars', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'STARS',
		period: {
			from: new Date(2018, 10, 10),
			to: new Date(2018, 10, 23)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=1828614714/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},

	{
		slug: 'sensory-sync)',
		color: '#3366cc',
		description:
			'Analog synths synced to Ableton sequences manually by ear at Kwun Tung Noise Works, Hong Kong.',
		shortDescription:
			'Recorded at Kwun Tung Noise Works, Hong Kong.',
		links: [{ to: 'https://unit7noise.bandcamp.com/album/sensory-sync-latency', label: 'Bandcamp' }],
		logo: Assets.Unknown,
		name: 'Sensory Sync Latency',
		period: {
			from: new Date(2017, 10, 10),
			to: new Date(2017, 11, 2)
		},
		skills: getSkills('comp', 'bass'),
		type: 'Album',
		basePath:'',   
		bandcampEmbed: ['https://bandcamp.com/EmbeddedPlayer/album=4265519910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'],
	},
];



const title = 'Music';

const MusicData = { title, items };

export default MusicData;
