<script lang="ts">
	import { onMount } from 'svelte';
	import { initMetaPixel, isMetaPixelConfigured, trackMetaPageView } from '$lib/meta-pixel';

	onMount(() => {
		if (!isMetaPixelConfigured()) return;
		initMetaPixel();
		trackMetaPageView();
	});
</script>
