<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Footer from '$lib/components/common/footer/footer.svelte';
	import Bio from '$lib/data/bio';
	import P from '$lib/components/ui/typography/p.svelte';
</script>


<TitledPage title="Bio">
	<p class="text-sm text-gray-500 italic text-center">For use in press and promotional materials. Credit EmilioGuarino.com as the source. Do not use the bio for any other purpose or alter the bio in any way without permission.</p>

	
	
    <!--  
   <h2 class="text-2xl font-bold mb-4">{Bio.headingShort}</h2> 
	<p>{@html Bio.shortBio}</p>

	<h2 class="text-2xl font-bold mb-4">{Bio.headingFull}</h2>	 -->

	<p>{@html Bio.fullBio}</p>

   
</TitledPage>
<Footer />