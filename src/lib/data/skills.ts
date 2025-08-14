import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Music', slug: 'music' }),
	defineSkillCategory({ name: 'Audio', slug: 'audio' }),
	defineSkillCategory({ name: 'Video', slug: 'video' }),
	defineSkillCategory({ name: 'Tech', slug: 'tech' }),
	// Unused catagories
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [

	
	defineSkill({
		slug: 'bass',
		color: 'white',
		description:
			'I am a conservatory trained bassist, and I have a lot of experience playing in a variety of genres and styles. I have played in a variety of ensembles, including orchestras, chamber groups, and jazz bands. I have also played in a variety of genres, including classical, jazz, rock, and pop.',
		logo: Assets.Bass,
		name: 'Bass',
		category: 'music'
	}),
	defineSkill({
		slug: 'comp',
		color: 'purple',
		description:
			'I have composed and produced music for a variety of projects, including film, television, and advertising. In 2024 I premiered an hour long concert suite, co-written with Michael Folmer Hansen, performed by Contemporaneous.',
		logo: Assets.Composing,
		name: 'Composition',
		category: 'music'
	}),

	defineSkill({
		slug: 'mixing',
		color: 'green',
		description:
			'I have mixed and mastered my own music for many years and have also been hired to mix on a number of artist projects over the years.',
		logo: Assets.Mixing,
		name: 'Mixing',
		category: 'music'
	}),
	defineSkill({
		slug: 'mastering',
		color: 'red',
		description:
			'I have mixed and mastered my own music for many years and have also been hired to master a number of artist projects over the years.',
		logo: Assets.Mastering,
		name: 'Mastering',
		category: 'music'
	}),


	defineSkill({
		slug: 'ableton',
		color: 'white',
		description:
			'Ableton Live is my primary DAW, and I have been using it for many years. Additionally I have attended the Ableton Loop conference in Los Angeles and Berlin.',
		logo: Assets.Ableton,
		name: 'Ableton Live',
		category: 'audio'
	}),

	defineSkill({
		slug: 'logic',
		color: 'white',
		description:
			'I have used Logic Pro since 2010. Not my primary DAW, but it is a powerful tool for creating music and sound design and a frequent collaboration tool when I work with other artists.',
		logo: Assets.Logic,
		name: 'Logic Pro',
		category: 'audio'
	}),

	defineSkill({
		slug: 'reaper',
		color: 'grey',
		description:
			'Reaper is my go to DAW for mixing, mastering, and any problem requring DAW scripting.',
		logo: Assets.Reaper,
		name: 'Reaper',
		category: 'audio'
	}),

	defineSkill({
		slug: 'ae',
		color: 'purple',
		description:
			'Adobe After Effects is industry standard compositing software. I have used it for a variety of projects, including film, social media campaigns, and advertising.',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'video'
	}),

	defineSkill({
		slug: 'pr',
		color: 'purple',
		description:
			'Premiere Pro is my go to video editing software when I need to move between After Effects and a larger timeline.',
		logo: Assets.Premiere,
		name: 'Adobe Premiere',
		category: 'video'
	}),
	defineSkill({
		slug: 'resolve',
		color: 'white',
		description:
			'Resolve is industry standard color correction and editing software. I use it interchangably with Premiere Pro.',
		logo: Assets.Resolve,
		name: 'Davinci Resolve',
		category: 'video'
	}),

	defineSkill({
		slug: 'blender',
		color: 'orange',
		description:
			'Blender is my go to 3D modeling and animation software. While I am by no means a Blender expert, I have used it for a variety of projects where After Effects was not enough and I needed a true 3D environment.',
		logo: Assets.Blender,
		name: 'Blender',
		category: 'video'
	}),

	defineSkill({
		slug: 'cam-op',
		color: 'orange',
		description:
			'I have worked as a camera operator in studio and live streaming environments for over 10 years. I have used a variety of cameras and lenses and am most familiar with the Sony XDCAM line. I own a PMW300 and have worked extensively on the Sony FX9.',
		logo: Assets.Camera,
		name: 'Camera Operator',
		category: 'video'
	}),

	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description:
			'Industry standard image editing software. I use Photoshop in conjunction with After Effects and Premiere Pro for video editing and animation workflows.',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),



	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'I am most familiar with using Javascript for front end development, mostly with Svelte and React frameworks.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'tech'
	}),

	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'A foundational skill for web development. I have used CSS for a variety of projects, including websites, web applications, and mobile applications.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'tech'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML is the backbone of the web. It\'s central to the web and is the language that all web pages are ultimately written in.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'tech'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Tailwind is a CSS framework that I have used for a variety of projects. A lot of web developers are opinionated about this one, but I have found Tailwind to be useful for quickly prototyping and building out a design. Not a tool I would use on everything I do, but certainly a very useful one. This website is built with Tailwind.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'tech'
	}),
	defineSkill({
		slug: 'shopify',
		color: 'green',
		description:
			'Shopify is my primary e-commerce platform of choice.',
		logo: Assets.Shopify,
		name: 'Shopify',
		category: 'tech'
	}),

	defineSkill({
		slug: 'liquid',
		color: 'white',
		description:
			'Liquid is a templating language that is used to create dynamic web pages. This is the language that is used to create the Shopify theme for GlitchMagic.com.',
		logo: Assets.Liquid,
		name: 'Liquid',
		category: 'tech'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'red',
		description: 'Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. This website is built with Svelte.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'tech'
	}),

	defineSkill({
		slug: 'React',
		color: 'teal',
		description: 'React is a free and open-source front end component framework or language created by Facebook and maintained by the React core team members. I have used it on previous projects and freelance work.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'tech'
	}),

	defineSkill({
		slug: 'Typescript',
		color: 'blue',
		description: 'Typescript is a superset of Javascript that is used to create statically typed Javascript. This website is build using Svelte and Typescript.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'tech'
	}),

] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
