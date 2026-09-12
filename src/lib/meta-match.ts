/**
 * First-party Meta matching identifiers for Conversions API.
 *
 * Brave / Firefox / Safari often block Meta's own cookie writes. We capture
 * fbclid ourselves and keep fbp / external_id as first-party cookies so the
 * server can still send Click ID, Browser ID, and External ID on Lead events.
 */

const NINETY_DAYS_S = 90 * 24 * 60 * 60;
const FBP_COOKIE = '_fbp';
const FBC_COOKIE = '_fbc';
const EXTERNAL_ID_COOKIE = '_eg_eid';

export type MetaMatchIds = {
	fbp: string;
	fbc: string;
	externalId: string;
};

function readCookie(name: string): string {
	if (typeof document === 'undefined') return '';
	const prefix = `${name}=`;
	for (const part of document.cookie.split(';')) {
		const trimmed = part.trim();
		if (trimmed.startsWith(prefix)) {
			return decodeURIComponent(trimmed.slice(prefix.length));
		}
	}
	return '';
}

function writeCookie(name: string, value: string): void {
	if (typeof document === 'undefined') return;
	const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
	document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${NINETY_DAYS_S}; SameSite=Lax${secure}`;
}

function randomDigits(length: number): string {
	let out = '';
	const bytes = new Uint8Array(length);
	crypto.getRandomValues(bytes);
	for (const byte of bytes) out += String(byte % 10);
	return out;
}

/** Meta Browser ID format: fb.{subdomainIndex}.{creationTimeMs}.{random} */
function createFbp(): string {
	return `fb.1.${Date.now()}.${randomDigits(10)}`;
}

/** Meta Click ID format: fb.{subdomainIndex}.{creationTimeMs}.{fbclid} */
function createFbc(fbclid: string): string {
	return `fb.1.${Date.now()}.${fbclid}`;
}

/**
 * Ensures matching IDs exist as first-party cookies and returns them.
 * Safe to call on every lessons page load.
 */
export function ensureMetaMatchIds(): MetaMatchIds {
	if (typeof window === 'undefined') {
		return { fbp: '', fbc: '', externalId: '' };
	}

	let fbp = readCookie(FBP_COOKIE);
	if (!fbp.startsWith('fb.')) {
		fbp = createFbp();
		writeCookie(FBP_COOKIE, fbp);
	}

	const params = new URLSearchParams(window.location.search);
	const fbclid = params.get('fbclid')?.trim() ?? '';
	let fbc = readCookie(FBC_COOKIE);

	// A fresh Facebook click always wins over a stale click cookie.
	if (fbclid) {
		fbc = createFbc(fbclid);
		writeCookie(FBC_COOKIE, fbc);
	} else if (fbc && !fbc.startsWith('fb.')) {
		fbc = '';
	}

	let externalId = readCookie(EXTERNAL_ID_COOKIE);
	if (!externalId) {
		externalId = crypto.randomUUID();
		writeCookie(EXTERNAL_ID_COOKIE, externalId);
	}

	return { fbp, fbc, externalId };
}
