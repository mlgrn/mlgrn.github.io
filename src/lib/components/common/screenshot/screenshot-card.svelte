<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardFooter } from '$lib/components/ui/card';

	import {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Screenshot } from '$lib/data/types';

	const { item }: { item: Screenshot } = $props();
</script>

<Dialog>
	<DialogTrigger>
		<Card
			class="flex aspect-square flex-col justify-end bg-cover bg-center bg-no-repeat"
			style={`background-image:url("${item.src}")`}
		>
			<Separator />
			<CardFooter class="rounded-b-md bg-[#00000099] pt-4 text-white backdrop-blur-sm"
				>{item.label}</CardFooter
			>
		</Card>
	</DialogTrigger>
    <DialogContent class="flex max-h-[95vh] max-w-[95vw] flex-col items-center">
        <DialogTitle>{item.label}</DialogTitle>
        <div class="w-full">
            <img
                src={item.src}
                alt={item.label}
                class="mx-auto max-h-[80vh] max-w-full object-contain rounded-md"
            />
        </div>
        <DialogFooter>
            <DialogClose>
                <Button>Close</Button>
            </DialogClose>
        </DialogFooter>
    </DialogContent>
</Dialog>
