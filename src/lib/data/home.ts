import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		'Musician and Creative Technologist. I play multiple instruments, compose & produce music, create videos, and use computers to solve creative problems.',
	links: [
		{ label: 'GitHub', href: 'https://github.com', icon: 'i-carbon-logo-github' },
		{ label: 'Email', href: 'mailto:emilio.guarino@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
