import BaseData from './base';

const left = { title: BaseData.fullName, icon: 'i-carbon-3rd-party-connected' } as const;

const items: Array<{
	title: string;
	icon: `i-carbon-${string}`;
	href: string;
}> = [
	
	{ title: 'Projects', icon: 'i-carbon-cube', href: '/projects' },
	{ title: 'Video', icon: 'i-carbon-video', href: '/video' },
	{ title: 'Music', icon: 'i-carbon-music', href: '/music' },
//	{ title: 'Experience', icon: 'i-carbon-development', href: '/experience' },
// { title: 'Resume', icon: 'i-carbon-document', href: '/resume' },
	{ title: 'Lessons', icon: 'i-carbon-music-add', href: '/lessons' },
	{ title: 'Bio', icon: 'i-carbon-person', href: '/bio' },
	{ title: 'Education', icon: 'i-carbon-education', href: '/education' },
	{ title: 'Contact', icon: 'i-carbon-email', href: '/contact' },

];

const NavBarData = { left, items };

export default NavBarData;
