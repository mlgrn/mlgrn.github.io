<script lang="ts">
	import { onMount } from 'svelte';
	import { ensureMetaMatchIds } from '$lib/meta-match';
	import { initMetaPixel, isMetaPixelConfigured, trackMetaPageView } from '$lib/meta-pixel';

	onMount(() => {
		// Capture fbclid / fbp / external_id as first-party cookies even when
		// Meta's own script is blocked from writing them.
		ensureMetaMatchIds();

		if (!isMetaPixelConfigured()) return;
		initMetaPixel();
		trackMetaPageView();
	});
</script>
