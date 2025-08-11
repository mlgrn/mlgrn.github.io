<script lang="ts">
import Separator from '$lib/components/ui/separator/separator.svelte';

const currentYear = new Date().getFullYear();


</script>
<div class="mx-auto w-3/4">
	<Separator />
</div>
<p class="text-center text-sm text-gray-500 p-10">©Emilio Guarino 2005-{currentYear}. All Rights Reserved. </p>

