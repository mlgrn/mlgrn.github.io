<script lang="ts">
	import { page } from '$app/stores';
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import ProjectCard from '$lib/components/projects/project-card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Toggle from '$lib/components/ui/toggle/toggle.svelte';
	import MusicData from '$lib/data/music';
	import SkillsData from '$lib/data/skills';
	import { clearSkills, getSelectedSkills, toggleSkill } from '$lib/skill-filters';
	import Footer from '$lib/components/common/footer/footer.svelte';

	const filters = SkillsData.items.filter((it) => {
		return MusicData.items.some((project) =>
			project.skills.some((skill) => skill.slug === it.slug)
		);
	});

	let selected = $derived(getSelectedSkills($page.url));

	let search = $state('');
	let result = $derived(
		MusicData.items.filter((project) => {
			const isFiltered =
				selected.length === 0 || project.skills.some((tech) => selected.includes(tech.slug));

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		})
	);

	const onSearch = (query: string) => (search = query);
</script>

<SearchPage title={MusicData.title} {onSearch}>
	<h3 class="text-2l font-bold">
		Click on a skill to show only projects that use that skill. The page link updates with your
		selection, so you can share a filtered view.
	</h3>

	<div class="flex flex-1 flex-col gap-8">
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each filters as it (it.slug)}
				<Toggle
					pressed={selected.includes(it.slug)}
					variant="outline"
					class="flex flex-row items-center gap-2 rounded-lg"
					on:click={() => toggleSkill($page.url, it.slug)}
				>
					{#if selected.includes(it.slug)}
						<Icon icon="i-carbon-close" />
					{/if}
					{it.name}</Toggle
				>
			{/each}
			{#if selected.length !== 0}
				<Button
					variant="ghost"
					class="flex flex-row items-center gap-2 rounded-lg"
					on:click={() => clearSkills($page.url)}
				>
					Clear filters
				</Button>
			{/if}
		</div>
		<h2 class="text-2l font-bold">Click on a project title for more information</h2>

		{#if result.length === 0}
			<EmptyResult />
		{:else}
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each result as it (it.slug)}
					<ProjectCard project={it} basePath="music" />
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>

<Footer />
