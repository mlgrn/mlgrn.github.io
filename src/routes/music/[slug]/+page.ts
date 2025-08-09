import MusicData from '$lib/data/music';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = MusicData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
