<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '$lib/components/ui/input/input.svelte';
	import { type Snippet } from 'svelte';
	import TitledPage from '../titled-page/titled-page.svelte';

	let {
		title = 'Untitled',
		onSearch,
		children
	}: { title: string; onSearch: (value: string) => void; children: Snippet } = $props();

	const queryFromUrl = (url: URL) => url.searchParams.get('q') ?? '';

	let query = $state(queryFromUrl($page.url));

	$effect(() => {
		onSearch(query);
	});

	// Keep `q` in the URL so a search can be shared or reloaded.
	$effect(() => {
		if (queryFromUrl($page.url) === query) return;

		const params = new URLSearchParams($page.url.searchParams);

		if (query.trim().length === 0) {
			params.delete('q');
		} else {
			params.set('q', query);
		}

		const search = params.toString().replaceAll('%2C', ',');

		goto(`${$page.url.pathname}${search ? `?${search}` : ''}`, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	});

	// Follow the URL when it changes from elsewhere, e.g. the back button.
	afterNavigate(() => {
		const fromUrl = queryFromUrl($page.url);

		if (fromUrl !== query) query = fromUrl;
	});
</script>

<TitledPage {title}>
	<Input placeholder="Search..." bind:value={query} />
	{@render children()}
</TitledPage>
