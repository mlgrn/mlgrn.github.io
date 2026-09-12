import { createHash } from 'node:crypto';
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import type { RequestEvent } from '@sveltejs/kit';

// Graph API versions are supported for at least two years after release.
const GRAPH_API_VERSION = 'v26.0';

export type MetaLeadInput = {
	/** Shared with the browser pixel so Meta can deduplicate the two events. */
	eventId: string;
	email: string;
	/** Free-text name field; split into first/last for Meta's matching. */
	name?: string;
	/** Meta Browser ID (_fbp). Not hashed. */
	fbp?: string;
	/** Meta Click ID (_fbc), from fbclid. Not hashed. */
	fbc?: string;
	/** Stable first-party visitor id. Not hashed (per Events Manager guidance). */
	externalId?: string;
	event: RequestEvent;
};

export function isMetaCapiConfigured(): boolean {
	return Boolean(publicEnv.PUBLIC_META_PIXEL_ID?.trim() && privateEnv.META_CAPI_ACCESS_TOKEN?.trim());
}

/** Meta requires SHA-256 of normalized (trimmed, lowercased) values. */
const hash = (value: string) => createHash('sha256').update(value).digest('hex');

const normalizeEmail = (email: string) => email.trim().toLowerCase();

// Letters only, lowercased, no punctuation or whitespace.
const normalizeName = (name: string) => name.trim().toLowerCase().replace(/[^\p{L}]/gu, '');

function splitName(name: string | undefined): { first?: string; last?: string } {
	const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return {};
	if (parts.length === 1) return { first: parts[0] };
	return { first: parts[0], last: parts[parts.length - 1] };
}

function isMetaBrowserOrClickId(value: string): boolean {
	return /^fb\.\d+\.\d+\./.test(value);
}

/**
 * Sends a Lead event to Meta's Conversions API from the server.
 *
 * This runs alongside the browser pixel so leads still count when the visitor's
 * browser blocks Meta (Brave, Firefox, Safari, ad blockers). Never throws: a
 * tracking failure must not break the inquiry form.
 */
export async function sendMetaLeadEvent({
	eventId,
	email,
	name,
	fbp,
	fbc,
	externalId,
	event
}: MetaLeadInput): Promise<void> {
	const pixelId = publicEnv.PUBLIC_META_PIXEL_ID?.trim();
	const accessToken = privateEnv.META_CAPI_ACCESS_TOKEN?.trim();
	if (!pixelId || !accessToken) return;

	const { first, last } = splitName(name);

	const userData: Record<string, unknown> = {
		em: [hash(normalizeEmail(email))],
		client_user_agent: event.request.headers.get('user-agent') ?? undefined
	};

	if (first) userData.fn = [hash(normalizeName(first))];
	if (last) userData.ln = [hash(normalizeName(last))];

	try {
		userData.client_ip_address = event.getClientAddress();
	} catch {
		// Not available in some runtimes; Meta falls back to other matching signals.
	}

	// Prefer values captured client-side (form fields); fall back to cookies.
	const resolvedFbp = (fbp?.trim() || event.cookies.get('_fbp') || '').trim();
	const resolvedFbc = (fbc?.trim() || event.cookies.get('_fbc') || '').trim();
	const resolvedExternalId = (externalId?.trim() || event.cookies.get('_eg_eid') || '').trim();

	if (resolvedFbp && isMetaBrowserOrClickId(resolvedFbp)) userData.fbp = resolvedFbp;
	if (resolvedFbc && isMetaBrowserOrClickId(resolvedFbc)) userData.fbc = resolvedFbc;
	if (resolvedExternalId) userData.external_id = [resolvedExternalId];

	const payload: Record<string, unknown> = {
		data: [
			{
				event_name: 'Lead',
				event_time: Math.floor(Date.now() / 1000),
				event_id: eventId,
				event_source_url: `${event.url.origin}${event.url.pathname}`,
				action_source: 'website',
				user_data: userData
			}
		]
	};

	// Set temporarily to see server events in Events Manager → Test Events.
	const testEventCode = privateEnv.META_CAPI_TEST_EVENT_CODE?.trim();
	if (testEventCode) payload.test_event_code = testEventCode;

	try {
		const response = await fetch(
			`https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
			{
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(payload)
			}
		);

		if (!response.ok) {
			console.error('[meta-capi] Lead event rejected', response.status, await response.text());
		}
	} catch (error) {
		console.error('[meta-capi] Lead event failed to send', error);
	}
}
