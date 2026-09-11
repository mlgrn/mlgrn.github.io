import { env } from '$env/dynamic/public';

declare global {
	interface Window {
		fbq?: (...args: unknown[]) => void;
		_fbq?: (...args: unknown[]) => void;
	}
}

function getPixelId(): string {
	return env.PUBLIC_META_PIXEL_ID?.trim() ?? '';
}

let initialized = false;

export function isMetaPixelConfigured(): boolean {
	return getPixelId().length > 0;
}

/**
 * Loads the Meta Pixel base script and initializes it for this page only.
 * Safe to call more than once; subsequent calls are no-ops.
 */
export function initMetaPixel(): void {
	const pixelId = getPixelId();
	if (typeof window === 'undefined' || !pixelId || initialized) return;

	if (!window.fbq) {
		const fbq: ((...args: unknown[]) => void) & {
			callMethod?: (...args: unknown[]) => void;
			queue?: unknown[];
			push?: (...args: unknown[]) => void;
			loaded?: boolean;
			version?: string;
		} = function (...args: unknown[]) {
			if (fbq.callMethod) {
				fbq.callMethod(...args);
			} else {
				(fbq.queue = fbq.queue || []).push(args);
			}
		};

		fbq.push = fbq;
		fbq.loaded = true;
		fbq.version = '2.0';
		fbq.queue = [];
		window.fbq = fbq;
		// Meta's official snippet also exposes _fbq; some fbevents code paths look for it.
		window._fbq ??= fbq;

		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://connect.facebook.net/en_US/fbevents.js';
		document.head.appendChild(script);
	}

	window.fbq?.('init', pixelId);
	initialized = true;
}

export function trackMetaPageView(): void {
	if (!getPixelId()) return;
	initMetaPixel();
	window.fbq?.('track', 'PageView');
}

/** Standard Meta Lead event — fire only after a real successful inquiry. */
export function trackMetaLead(): void {
	if (!getPixelId()) return;
	initMetaPixel();
	window.fbq?.('track', 'Lead');
}
