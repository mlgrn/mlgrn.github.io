<script lang="ts">
	import { enhance } from '$app/forms';
	import { base } from '$app/paths';
	import BasePage from '$lib/components/common/base-page/base-page.svelte';
	import Footer from '$lib/components/common/footer/footer.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { buttonVariants } from '$lib/components/ui/button';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import H1 from '$lib/components/ui/typography/h1.svelte';
	import H2 from '$lib/components/ui/typography/h2.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import { cn } from '$lib/utils';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let submitting = $state(false);

	// ---------------------------------------------------------------------------
	// COPY. Everything below is placeholder text. Edit freely.
	// ---------------------------------------------------------------------------

	const hero = {
		eyebrow: 'Taking on a limited number of weekly students',
		headline: 'Bass lessons for people who are serious about getting better',
		subheadline:
			'One-on-one lessons with a professional bassist. If you have been watching my videos on social media and want to go deeper, this is the next step: a weekly lesson built entirely around you, your goals, and the music you want to play.',
		primaryCta: 'Book your first lesson',
		secondaryCta: 'See how lessons work'
	};

	const trustPoints: Array<{ icon: `i-carbon-${string}`; text: string }> = [
		{ icon: 'i-carbon-education', text: 'I hold Bachelor\'s and Master\'s degrees in music' },
		{ icon: 'i-carbon-music', text: 'Over 20 years performing and teaching' },
		{ icon: 'i-carbon-user-multiple', text: 'Expererienced performing & teaching many genres of music' },
		{ icon: 'i-carbon-globe', text: 'Electric and upright, online or in person' }
	];

	const outcomes = [
		'A clear plan for what to practice every week, and why',
		'Be able to play things you thought were totally impossible',
		'Understand the fretboard so you are never lost on stage',
		'Build the skills to teach yourself new music quickly for any gig',
		'Build clean technique without pain, tension, or bad habits',
		'Get an incredible tone you are proud of live and in the studio'
	];

	const weekly = {
		heading: 'Why weekly',
		body: [
			'I strongly encourage weekly lessons for the best results.',
			'Every student I have watched make major progress in a short period of time had one thing in common: they showed up every week. Including me. Even when I was a broke college student, I would get a lesson once a week with my jazz teacher, then work odd jobs to afford another weekly private lesson with my classical teacher outside of school. It makes a massive difference.',
			'We can of course have lessons less often, its better than nothing. But I have found weekly lessons to build more mometum over time. Studying with me for two years every other week is not the same as 1 year of lessons every week.'
		],
		points: [
			'Momentum: seeing progress happen quickly is always more motivating, so you\'ll work harder and get more out of each lesson.',
			'Urgency & Accountability: a lesson on the calendar each week gets the bass out of the case and into your hands more often',
			'I can catch and correct problems earlier, before they become bad habits you have to unlearn.',

		]
	};

	const audience: Array<{ icon: `i-carbon-${string}`; title: string; description: string }> = [
		{
			icon: 'i-carbon-user',
			title: 'Total beginners',
			description:
				'Starting from zero? No problem. We will build good habits from day one and get you playing along with real songs within a few weeks.'
		},
		{
			icon: 'i-carbon-chart-line',
			title: 'Stuck intermediates',
			description:
				'You can play, but you have hit a wall. I will help you find the holes in your technqiue and knowledge that are holding you back from the next level.'
		},
		{
			icon: 'i-carbon-star',
			title: 'Gigging and auditioning players',
			description:
				'Audition prep for music school or professional gigs, reading, improvising basslines, soloing, developing a musical voice, and dialing in a professional sound.'
		}
	];

	const steps = [
		{
			title: 'Send a quick note',
			description:
				'Fill out the short form below. Tell me where you are with the instrument, what you want to be able to do, and which option you are interested in. I reply within 24 hours with availability.'
		},
		{
			title: 'Your first lesson',
			description:
				'A full 60 minute lesson, online or in person. You play, I listen, we talk about goals, and you leave with a concrete practice plan.'
		},
		{
			title: 'Lock in your weekly spot',
			description:
				'If it is a fit on both sides, we pick a recurring weekly time and get to work. After each lesson, you will have a customized practice plan to make sure you make progress every week.'
		}
	];

	const about = {
		heading: 'Your teacher',
		paragraphs: [
			'I am Emilio Guarino, a bassist, composer, and producer based in Jersey City, NJ just outside Manhattan. I have a Bachelor\'s in Jazz Music from Rutgers University and a Master\'s degree in Classical and Contemptempory music from The Hartt School. I have spent years playing and recording across jazz, electronic, rock, pop, classical, and new music.',
			'I have played in almost every circumstance you can think of. Big prestigious places like Carnegie Hall in New York or the Elbphilharmonie in Germany, as well as much more humble weddings, private parties, theater pits, local dive bars that pay in cold pizza, and everything in between.',
			'More recently, I composed and premiered an hour-long suite of music for a 30 piece chamber orchestra at Roulette in Brooklyn, NY',
			'As a teacher I care about one thing: getting you to the music you want to play, with technique that will hold up for the rest of your life. Lessons are patient, practical, and built around you.'
		],
		credentials: [
			'Bachelor\'s and Master\'s degrees in music',
			'Working performer, composer, and producer',
			'I\'ve taught students from age 5 to 65+ since 2008',		]
	};

	const testimonials = [
		{
			quote:
				'He brings a long musical theoretical education, multi genre practical playing experience and deep technical understanding + humour and easy going nature to lessons. He is a true pleasure to work with. I highly recommend without reservation Emilio\'s work.',
			name: 'Michael',
			detail: 'Adult student, 8 months of lessons'
		},
		{
			quote:
				'I have been studying with Emilio for over a year now and it\'s been a very positive experience for me. He has been amazing at understanding where I am in the learning process, adapting to different learning styles, and exposing me to different creative processes. He\'s invested in his own knowledge and it makes him a great teacher for others. He genuinely takes the time to see if I understand why I am doing something. Emilio has helped me learn a lot in a short amount of time.',
			name: 'Payden',
			detail: 'Beginner Student, online lessons'
		},
	
		{
			quote:
				'Emilio is an exemplary player, tutor and all around great guy! He can make any topic make sense through in-depth explanations coupled with great practise exercises, he prioritised the skills that you really needs (sight reading, good technique and a good harmonic understanding). Everything he does comes from a lot of considerations and thought. Would 100% recommend to people looking at working with him for lessons, session bass work and other areas he works in!',
			name: 'Owen',
			detail: 'Beginner Bass Student, 1 year of online lessons'
		}
	];

	const pricing: Array<{
		name: string;
		price: string;
		cadence: string;
		description: string;
		features: Array<string>;
		highlight?: boolean;
	}> = [
		{
			name: 'Single lesson',
			price: '$100',
			cadence: 'per 60 minute lesson',
			description:
				'A one-off session for a specific problem, a tune-up, or as your first lesson before committing to weekly.',
			features: ['60 minute private lesson', 'Practice notes after the lesson', 'Online or in person']
		},
		{
			name: 'Weekly student',
			price: '$400',
			cadence: 'per month, four weekly lessons',
			description:
				'This is for students who want a reserved weekly time and real momentum.',
			features: [
				'Four 60 minute lessons a month. You will have time with me reserved every week.',
				'Written practice plan after every lesson',
				'Message me with questions during the week',
			],
			highlight: true
		},
		{
			name: 'Intensive',
			price: '$150',
			cadence: 'per 90 minute session',
			description:
				'Extended sessions for audition prep, recording projects, or working through a specific body of repertoire.',
			features: [
				'90 minutes focused on one clear goal',
				'Detailed written follow-up and practice plan',
			]
		}
	];

	const pricingNote =
		'My rate is $100 per hour across the board. We can always do one-off lessons if you\'re flexible on schedule, but I give priority to my weekly students ts first.';

	const faqs = [
		{
			question: 'Can we do every other week, or once a month?',
			answer:
				'Yes, but sometimes my schedule gets full between weekly students and my gig schedule. You may need to wait until a time opens up.'
		},
		{
			question: 'Do you offer a free trial lesson?',
			answer:
				'No. Your first lesson is a full 60 minute lesson at my regular rate, and you will leave with an actionable plan to improve your playingwhether or not you continue. If you want to see how I teach before booking, that is exactly what my free videos are for.'
		},
		{
			question: 'I have never played an instrument. Is it too late to start?',
			answer:
				'No. This is a myth. Many of my students started as adults. Adults require a different approach to teaching than children, but plenty of people learn to play when they are older. '
		},
		{
			question: 'Do online lessons actually work for bass?',
			answer:
				'Yes. I teach students remotely every week. You need a laptop or phone with a camera, a quiet spot, a bass & amp, and the desire to learn.'
		},
		{
			question: 'Do I need my own bass?',
			answer:
				'Yes. You will need one to practice on between lessons. If you are shopping for your first bass, I am happy to help you find something solid that fits your budget.'
		},
		{
			question: 'Do you teach upright as well as electric?',
			answer:
				'Yes, I teach both. For upright, I recommend you also use a separate microphone and audio interface instead of the computer\'s built in microphone, particularly for bowed bass playing.'
		},
		{
			question: 'How much do I need to practice?',
			answer:
				'30-60 minutes a day is a good start, as long as it is daily or close to it. 30 focused minutes most days will take you MUCH further than trying to cram the night before a lesson. '
		},
		{
			question: 'What if I need to cancel or reschedule?',
			answer:
				'Life happens. Give me 24 hours notice and we will find another time. If you have a genuine last minute emergency, we will of course make that time up.'
		}
	];

	const formCopy = {
		heading: 'Book your first lesson',
		subheading:
			'Tell me what you want to play and what time zone you live in. I read every message personally and reply within 24 hours with availability.',
		successHeading: 'Got it, thank you!',
		successBody:
			'I will get back to you within 24 hours with available times for your first lesson. Keep an eye on your inbox (and your spam folder, just in case).',
		privacyNote:
			'I will only use your email to reply to you and to send occasional practice tips and lesson news. No spam, unsubscribe any time.'
	};

	const interests = [
		'Weekly lessons ($400 / month)',
		'A single lesson ($100)',
		'An intensive ($150 / 90 min)',
		'Not sure yet'
	];

	const levels = [
		'Complete beginner',
		'Beginner, a few months in',
		'Intermediate',
		'Advanced or gigging',
		'Not sure'
	];

	const formats = ['Online', 'In person (NYC area)', 'Either works'];

	const inputClass =
		'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900';
</script>

<!-- Reusable dashed placeholder for images and video you will supply later. -->
{#snippet mediaPlaceholder(
	kind: 'image' | 'video',
	label: string,
	className = ''
)}
	<div
		class={cn(
			'flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-muted/40 p-6 text-center dark:border-neutral-700',
			className
		)}
		role="img"
		aria-label={`Placeholder for ${kind}: ${label}`}
	>
		<Icon icon={kind === 'video' ? 'i-carbon-play-outline' : 'i-carbon-image'} className="text-4xl opacity-60" />
		<span class="text-xs font-semibold uppercase tracking-wide opacity-70">
			{kind} placeholder
		</span>
		<span class="max-w-xs text-xs opacity-70">{label}</span>
	</div>
{/snippet}

<BasePage title="Bass Lessons">
	<div class="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 pb-24 pt-10 sm:px-6 sm:pb-12">
		<!-- HERO -->
		<section class="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
			<div class="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
				<Badge variant="outline">{hero.eyebrow}</Badge>
				<H1 className="text-4xl sm:text-5xl">{hero.headline}</H1>
				<p class="text-base leading-relaxed text-muted-foreground">{hero.subheadline}</p>
				<div class="flex flex-col gap-3 sm:flex-row">
					<a href="#inquire" class={cn(buttonVariants({ size: 'lg' }))}>{hero.primaryCta}</a>
					<a href="#preview" class={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
						{hero.secondaryCta}
					</a>
				</div>
				<ul class="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
					{#each trustPoints as point (point.text)}
						<li class="flex flex-row items-center gap-2">
							<Icon icon={point.icon} className="text-lg" />
							<span>{point.text}</span>
						</li>
					{/each}
				</ul>
			</div>
			<img
				src={`${base}/images/HotWobble-10.jpg`}
				alt="Emilio Guarino"
				class="aspect-[4/5] w-full max-w-sm mx-auto rounded-lg object-cover md:max-w-none"
			/>
		</section>

		<!-- OUTCOMES -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>What you will walk away with</H2>
				<Muted>I will show you how to be the kind of bassist people can't wait to play with.</Muted>
			</div>
			<ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each outcomes as outcome (outcome)}
					<li class="flex flex-row items-start gap-3 rounded-lg border p-4">
						<Icon icon="i-carbon-checkmark-filled" className="mt-0.5 text-xl" />
						<span class="text-sm">{outcome}</span>
					</li>
				{/each}
			</ul>
		</section>

		<!-- WHY WEEKLY -->
		<section id="preview" class="grid grid-cols-1 items-center gap-10 scroll-mt-20 md:grid-cols-2">
			<div class="flex flex-col gap-4">
				<H2>{weekly.heading}</H2>
				{#each weekly.body as paragraph (paragraph)}
					<p class="text-sm leading-relaxed">{paragraph}</p>
				{/each}
				<ul class="flex flex-col gap-2">
					{#each weekly.points as point (point)}
						<li class="flex flex-row items-start gap-2 text-sm">
							<Icon icon="i-carbon-checkmark" className="mt-0.5 text-lg" />
							<span>{point}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col gap-3">
				<img
					src={`${base}/images/HotWobble-8.jpg`}
					alt="Emilio Guarino playing bass"
					class="aspect-[4/5] w-full rounded-lg object-cover"
				/>
			</div>
		</section>

		<!-- WHO IT IS FOR -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>Who I teach</H2>
				<Muted>Every lesson is one-on-one and built around where you are right now.</Muted>
			</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each audience as item (item.title)}
					<Card class="h-full">
						<CardContent class="flex flex-col gap-3 p-5">
							<Icon icon={item.icon} className="text-2xl" />
							<CardTitle>{item.title}</CardTitle>
							<Muted>{item.description}</Muted>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<!-- HOW IT WORKS -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>How it works</H2>
				<Muted>Three simple steps. The first one takes about a minute.</Muted>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each steps as step, index (step.title)}
					<div class="flex flex-col items-center gap-3 text-center">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-base font-bold"
						>
							{index + 1}
						</div>
						<CardTitle>{step.title}</CardTitle>
						<Muted>{step.description}</Muted>
					</div>
				{/each}
			</div>
		</section>

		<!-- ABOUT -->
		<section class="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
			<div class="md:col-span-2">
				<img
					src={`${base}/images/full-picture-emilio.jpg`}
					alt="Emilio Guarino"
					class="aspect-square w-full max-w-sm mx-auto rounded-lg object-cover"
				/>
			</div>
			<div class="flex flex-col gap-4 md:col-span-3">
				<H2>{about.heading}</H2>
				{#each about.paragraphs as paragraph, index (paragraph)}
					<p
						class={cn(
							'text-sm leading-relaxed',
							index === about.paragraphs.length - 1 && 'font-bold'
						)}
					>
						{paragraph}
					</p>
				{/each}
				<ul class="flex flex-col gap-2">
					{#each about.credentials as credential (credential)}
						<li class="flex flex-row items-start gap-2 text-sm">
							<Icon icon="i-carbon-checkmark" className="mt-0.5 text-lg" />
							<span>{credential}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- TESTIMONIALS -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>What students say</H2>
				<Muted>Some experiences from students I have taught over the years</Muted>
			</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				{#each testimonials as testimonial, index (index)}
					<Card class="h-full">
						<CardContent class="flex h-full flex-col gap-4 p-5">
							<div class="flex flex-row gap-0.5">
								{#each Array(5) as _, starIndex (starIndex)}
									<Icon icon="i-carbon-star-filled" className="text-base" />
								{/each}
							</div>
							<p class="flex-1 text-sm italic leading-relaxed">"{testimonial.quote}"</p>
							<div class="flex flex-row items-center gap-3">
								<!-- Student headshot placeholder -->
								<div
									class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-muted/40 dark:border-neutral-700"
									role="img"
									aria-label="Placeholder for student headshot"
								>
									<Icon icon="i-carbon-user-avatar" className="text-2xl opacity-60" />
								</div>
								<div class="flex flex-col">
									<span class="text-sm font-semibold">{testimonial.name}</span>
									<Muted>{testimonial.detail}</Muted>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>

		<!-- PRICING -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>Lesson options</H2>
				<Muted>Simple pricing. Pick what fits your goals and your calendar.</Muted>
			</div>
			<div class="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
				{#each pricing as plan (plan.name)}
					<Card class={cn('relative h-full', plan.highlight && 'border-2 border-foreground shadow-md')}>
						{#if plan.highlight}
							<div class="absolute -top-3 left-1/2 -translate-x-1/2">
								<Badge>Most popular</Badge>
							</div>
						{/if}
						<CardContent class="flex h-full flex-col gap-4 p-6">
							<div class="flex flex-col gap-1">
								<CardTitle>{plan.name}</CardTitle>
								<div class="flex flex-row items-baseline gap-2">
									<span class="text-3xl font-bold">{plan.price}</span>
									<Muted>{plan.cadence}</Muted>
								</div>
							</div>
							<p class="text-sm">{plan.description}</p>
							<ul class="flex flex-1 flex-col gap-2">
								{#each plan.features as feature (feature)}
									<li class="flex flex-row items-start gap-2 text-sm">
										<Icon icon="i-carbon-checkmark" className="mt-0.5 text-base" />
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
							<a
								href="#inquire"
								class={cn(buttonVariants({ variant: plan.highlight ? 'default' : 'outline' }), 'w-full')}
							>
								{plan.highlight ? 'Apply for a weekly spot' : 'Inquire'}
							</a>
						</CardContent>
					</Card>
				{/each}
			</div>
			<div
				class="mx-auto flex max-w-2xl flex-row items-start gap-3 rounded-lg border bg-muted/40 p-4 text-sm"
			>
				<Icon icon="i-carbon-information" className="mt-0.5 text-xl" />
				<span>{pricingNote}</span>
			</div>
		</section>

		<!-- FAQ -->
		<section class="flex flex-col gap-8">
			<div class="flex flex-col items-center gap-2 text-center">
				<H2>Common questions</H2>
			</div>
			<div class="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6">
				{#each faqs as faq (faq.question)}
					<div class="flex flex-col gap-1">
						<CardTitle tag="h3" class="text-base">{faq.question}</CardTitle>
						<Muted>{faq.answer}</Muted>
					</div>
				{/each}
			</div>
		</section>

		<Separator />

		<!-- INQUIRY FORM -->
		<section id="inquire" class="scroll-mt-20">
			<div class="mx-auto flex w-full max-w-xl flex-col gap-6">
				<div class="flex flex-col items-center gap-2 text-center">
					<H2>{formCopy.heading}</H2>
					<Muted>{formCopy.subheading}</Muted>
				</div>

				{#if form?.success}
					<div
						class="rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-100"
					>
						<Icon icon="i-carbon-checkmark-filled" className="mx-auto mb-2 text-3xl" />
						<p class="text-lg font-semibold">{formCopy.successHeading}</p>
						<p class="mt-1 text-sm">{formCopy.successBody}</p>
					</div>
				{:else}
					{#if form?.error}
						<div
							class="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200"
						>
							<div class="flex items-center">
								<i class="i-carbon-warning-filled mr-2 text-xl"></i>
								<span>{form.error}</span>
							</div>
						</div>
					{/if}

					<form
						method="POST"
						action="?/inquire"
						class="rounded-lg border bg-white shadow-sm dark:bg-neutral-900"
						use:enhance={() => {
							submitting = true;
							return async ({ update }) => {
								submitting = false;
								await update();
							};
						}}
					>
						<!-- Anti-spam: honeypot (humans never see it) and time-on-page check. -->
						<div class="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
							<label for="lessons-website">Leave this field blank</label>
							<input type="text" id="lessons-website" name="website" tabindex="-1" autocomplete="off" />
						</div>
						<input type="hidden" name="formStartedAt" value={data.formStartedAt} />

						<div class="space-y-4 p-4 sm:p-6">
							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label for="lessons-name" class="mb-1 block text-sm font-medium">Name</label>
									<input
										type="text"
										id="lessons-name"
										name="name"
										placeholder="Your name"
										autocomplete="name"
										maxlength="100"
										required
										class={inputClass}
									/>
								</div>
								<div>
									<label for="lessons-email" class="mb-1 block text-sm font-medium">Email</label>
									<input
										type="email"
										id="lessons-email"
										name="email"
										placeholder="you@example.com"
										autocomplete="email"
										maxlength="254"
										required
										class={inputClass}
									/>
								</div>
							</div>

							<div>
								<label for="lessons-interest" class="mb-1 block text-sm font-medium">What are you interested in?</label>
								<select id="lessons-interest" name="interest" class={inputClass}>
									{#each interests as interest (interest)}
										<option value={interest}>{interest}</option>
									{/each}
								</select>
							</div>

							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label for="lessons-level" class="mb-1 block text-sm font-medium">Where are you now?</label>
									<select id="lessons-level" name="level" class={inputClass}>
										{#each levels as level (level)}
											<option value={level}>{level}</option>
										{/each}
									</select>
								</div>
								<div>
									<label for="lessons-format" class="mb-1 block text-sm font-medium">Online or in person?</label>
									<select id="lessons-format" name="format" class={inputClass}>
										{#each formats as format (format)}
											<option value={format}>{format}</option>
										{/each}
									</select>
								</div>
							</div>

							<div>
								<label for="lessons-message" class="mb-1 block text-sm font-medium">
									What do you want to be able to play? <span class="font-normal text-muted-foreground">(optional)</span>
								</label>
								<textarea
									id="lessons-message"
									name="message"
									placeholder="A song, a style, a goal, a gig you have coming up..."
									rows="4"
									maxlength="5000"
									class={cn(inputClass, 'resize-y')}
								></textarea>
							</div>

							<Button type="submit" size="lg" class="w-full" disabled={submitting}>
								{#if submitting}
									<i class="i-carbon-circle-dash mr-2 animate-spin"></i>
									Sending...
								{:else}
									{hero.primaryCta}
								{/if}
							</Button>

							<p class="text-center text-xs text-muted-foreground">{formCopy.privacyNote}</p>
						</div>
					</form>
				{/if}
			</div>
		</section>
	</div>
</BasePage>

<!-- Sticky call to action on small screens so the next step is always one tap away. -->
{#if !form?.success}
	<div
		class="fixed bottom-0 left-0 right-0 z-10 border-t bg-[--bg] p-3 backdrop-blur-xl sm:hidden"
		style="--bg : hsl(var(--background) / 0.85)"
	>
		<a href="#inquire" class={cn(buttonVariants({ size: 'lg' }), 'w-full')}>{hero.primaryCta}</a>
	</div>
{/if}

<Footer />
