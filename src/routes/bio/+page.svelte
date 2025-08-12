<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Footer from '$lib/components/common/footer/footer.svelte';
	import Bio from '$lib/data/bio';
	import P from '$lib/components/ui/typography/p.svelte';
</script>


<TitledPage title="Bio">
	
    <!--  
   <h2 class="text-2xl font-bold mb-4">{Bio.headingShort}</h2> 
	<p>{@html Bio.shortBio}</p>

	<h2 class="text-2xl font-bold mb-4">{Bio.headingFull}</h2>	 -->
	
	<p>{@html Bio.fullBio}</p>

   
</TitledPage>
<Footer />