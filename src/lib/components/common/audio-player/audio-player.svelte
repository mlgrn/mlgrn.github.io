<script lang="ts">
	import Pause from 'lucide-svelte/icons/pause';
	import Play from 'lucide-svelte/icons/play';

	let {
		src,
		title = 'Audio'
	}: {
		src: string;
		title?: string;
	} = $props();

	let audioEl: HTMLAudioElement | undefined = $state();
	let playing = $state(false);
	let current = $state(0);
	let duration = $state(0);
	let seeking = $state(false);

	const progress = $derived(duration > 0 ? (current / duration) * 100 : 0);

	function formatTime(seconds: number) {
		if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
		const m = Math.floor(seconds / 60);
		const s = Math.floor(seconds % 60);
		return `${m}:${s.toString().padStart(2, '0')}`;
	}

	function toggle() {
		if (!audioEl) return;
		if (audioEl.paused) {
			void audioEl.play();
		} else {
			audioEl.pause();
		}
	}

	function onTimeUpdate() {
		if (!audioEl || seeking) return;
		current = audioEl.currentTime;
	}

	function onLoadedMetadata() {
		if (!audioEl) return;
		duration = audioEl.duration;
	}

	function onPlay() {
		playing = true;
	}

	function onPause() {
		playing = false;
	}

	function onEnded() {
		playing = false;
		current = 0;
	}

	function seek(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const value = Number(input.value);
		if (!audioEl || !Number.isFinite(duration) || duration <= 0) return;
		const next = (value / 100) * duration;
		audioEl.currentTime = next;
		current = next;
	}
</script>

<div
	class="audio-player flex w-full flex-col gap-3 rounded-lg border border-border/80 bg-card/60 px-4 py-3.5 backdrop-blur-sm"
>
	<audio
		bind:this={audioEl}
		{src}
		preload="metadata"
		ontimeupdate={onTimeUpdate}
		onloadedmetadata={onLoadedMetadata}
		onplay={onPlay}
		onpause={onPause}
		onended={onEnded}
	></audio>

	<div class="flex items-center gap-3">
		<button
			type="button"
			class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
			aria-label={playing ? 'Pause' : 'Play'}
			onclick={toggle}
		>
			{#if playing}
				<Pause class="h-4 w-4" fill="currentColor" />
			{:else}
				<Play class="ml-0.5 h-4 w-4" fill="currentColor" />
			{/if}
		</button>

		<div class="min-w-0 flex-1">
			<p class="truncate text-sm font-medium tracking-tight text-foreground">{title}</p>
			<div class="mt-2 flex items-center gap-3">
				<span class="w-9 shrink-0 tabular-nums text-xs text-muted-foreground"
					>{formatTime(current)}</span
				>
				<label class="sr-only" for="audio-progress">Seek</label>
				<input
					id="audio-progress"
					class="progress-range"
					type="range"
					min="0"
					max="100"
					step="0.1"
					value={progress}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={Math.round(progress)}
					aria-label="Seek"
					onpointerdown={() => (seeking = true)}
					onpointerup={() => (seeking = false)}
					oninput={seek}
					onchange={() => (seeking = false)}
					style={`--progress: ${progress}%`}
				/>
				<span class="w-9 shrink-0 text-right tabular-nums text-xs text-muted-foreground"
					>{formatTime(duration)}</span
				>
			</div>
		</div>
	</div>
</div>

<style>
	.progress-range {
		-webkit-appearance: none;
		appearance: none;
		height: 0.25rem;
		width: 100%;
		cursor: pointer;
		border-radius: 9999px;
		background: linear-gradient(
			to right,
			hsl(var(--foreground) / 0.85) 0%,
			hsl(var(--foreground) / 0.85) var(--progress),
			hsl(var(--muted-foreground) / 0.25) var(--progress),
			hsl(var(--muted-foreground) / 0.25) 100%
		);
	}

	.progress-range:focus-visible {
		outline: 2px solid hsl(var(--ring));
		outline-offset: 3px;
	}

	.progress-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 9999px;
		border: none;
		background: hsl(var(--foreground));
		box-shadow: 0 0 0 2px hsl(var(--background));
		transition: transform 120ms ease;
	}

	.progress-range:hover::-webkit-slider-thumb {
		transform: scale(1.12);
	}

	.progress-range::-moz-range-thumb {
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 9999px;
		border: none;
		background: hsl(var(--foreground));
		box-shadow: 0 0 0 2px hsl(var(--background));
	}

	.progress-range::-moz-range-track {
		height: 0.25rem;
		border-radius: 9999px;
		background: transparent;
	}
</style>
