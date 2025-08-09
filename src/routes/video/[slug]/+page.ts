import VideoData from '$lib/data/video';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = VideoData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
