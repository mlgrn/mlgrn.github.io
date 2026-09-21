import { goto } from '$app/navigation';

export const SKILLS_PARAM = 'skills';

/**
 * Skill filters live in the URL so a filtered view can be shared as a link,
 * e.g. /music?skills=mastering shows only the mastering work.
 */
export const getSelectedSkills = (url: URL): Array<string> =>
	(url.searchParams.get(SKILLS_PARAM) ?? '')
		.split(',')
		.map((it) => it.trim())
		.filter((it) => it.length !== 0);

const buildHref = (url: URL, slugs: Array<string>): string => {
	const params = new URLSearchParams(url.searchParams);

	if (slugs.length === 0) {
		params.delete(SKILLS_PARAM);
	} else {
		params.set(SKILLS_PARAM, slugs.join(','));
	}

	// Commas are legal in a query string, so keep them readable for shared links.
	const query = params.toString().replaceAll('%2C', ',');

	return `${url.pathname}${query ? `?${query}` : ''}`;
};

export const toggleSkill = (url: URL, slug: string) => {
	const selected = getSelectedSkills(url);

	const next = selected.includes(slug)
		? selected.filter((it) => it !== slug)
		: [...selected, slug];

	return goto(buildHref(url, next), { noScroll: true, keepFocus: true });
};

export const clearSkills = (url: URL) => {
	return goto(buildHref(url, []), { noScroll: true, keepFocus: true });
};
