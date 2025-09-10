<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';
	import P from '../ui/typography/p.svelte';

	const { project, basePath = 'projects' }: { project: Project; basePath?: string } = $props();

	let from = $derived(getMonthAndYear(project.period.from));
	let to = $derived(getMonthAndYear(project.period.to));
	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
</script>

<FancyCard
	color={project.color}
	class="flex h-full flex-col"
	href={href(`/${basePath}/${project.slug}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		
	

		{#if project.youtubeVideoEmbed}
		<div class="relative w-full overflow-hidden bg-black" style="aspect-ratio: 1 / 1;">
			<iframe
				class="absolute inset-0 w-full h-full rounded"
				src={project.youtubeVideoEmbed[0]}
				title="Video"
				frameborder="0"
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		
		
				{:else if project.vimeoVideoEmbed}
	
				<div class="relative w-full bg-black" style="aspect-ratio: 350 / 350;">
		  <div class="absolute inset-0 flex items-center justify-center bg-black">
			<iframe
			  class="rounded"
			  style="width: 100%; height: 56.25%; max-height: 100%; max-width: 177.78%; background-color: black;"
			  src={project.vimeoVideoEmbed[0]}
			  title="Video"
			  frameborder="0"
			  loading="lazy"
			  allow="autoplay; fullscreen; picture-in-picture"
			  referrerpolicy="strict-origin-when-cross-origin"
			  allowfullscreen
			></iframe>
		  </div>
		</div>

		

		{:else if project.bandcampEmbed}
		<div class="w-full">
		  <div class="relative w-full" style="aspect-ratio: 350 / 350;">
			<iframe
			  class="absolute inset-0 w-full h-full rounded"
			  src={project.bandcampEmbed[0]}
			  title="Bandcamp Player"
			  frameborder="0"
			  loading="lazy"
			  seamless
			></iframe>
		  </div>
		</div>


		{:else if project.screenshots && project.screenshots.length >= 1}
		<div class="relative w-full overflow-hidden" style="aspect-ratio: 1 / 1;">
			<img
				class="absolute inset-0 w-full h-full object-cover rounded"
				src={project.screenshots[0].src}
				alt={project.screenshots[0].label}
			/>
		</div>
	
		{:else if project.logo != Assets.Unknown}
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} />
		</Avatar>
		{/if}


		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left"
					>
						{project.name}
					</TooltipTrigger>
					<TooltipContent>{project.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if project.links.length > 2}
				<ButtonLink link={project.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each project.links.slice(1) as link (link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each project.links as link (link.to)}
					<ButtonLink {link} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>
		</Muted>
		<Muted className="py-4 md:py-2 md:min-h-[100px] md:max-h-[100px]"
			>{ellipsify(project.shortDescription, 100)}</Muted
		>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
		<div class="flex flex-row flex-wrap items-center gap-2">
			{#each project.skills as skill (skill.slug)}
				<SkillBadge {skill} />
			{/each}
		</div>
	</CardContent>
</FancyCard>
