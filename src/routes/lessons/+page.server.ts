import type { Actions, PageServerLoad } from './$types';
import { handleContactSubmission } from '$lib/server/contact-mail';
import { addKitSubscriber } from '$lib/server/kit';
import { sendMetaLeadEvent } from '$lib/server/meta-capi';

export const load: PageServerLoad = () => ({
	formStartedAt: Date.now()
});

export const actions: Actions = {
	inquire: async (event) => {
		const fd = await event.request.formData();
		const read = (key: string) => (fd.get(key) ?? '').toString().trim();

		const result = await handleContactSubmission(fd, {
			// Prefix makes it easy to filter lesson leads into their own label / list.
			subjectPrefix: '[Bass Lessons]',
			defaultSubject: 'New bass lesson inquiry',
			// Keep the form short: name, email, and level are enough to start a conversation.
			minMessageLength: 0,
			extraFields: [
				{ name: 'interest', label: 'Interested in' },
				{ name: 'level', label: 'Experience level' },
				{ name: 'format', label: 'Preferred format' }
			],
			source: 'Lessons landing page'
		});

		// Only real inquiries (email actually sent) count as leads.
		if (!('lead' in result) || !result.lead) return result;

		const email = read('email');
		const name = read('name');
		const interest = read('interest');
		const level = read('level');
		const format = read('format');

		// Add to Kit list. Custom fields are ignored by Kit until you create matching keys.
		await addKitSubscriber({
			email,
			firstName: name.split(/\s+/)[0] || undefined,
			referrer: `${event.url.origin}${event.url.pathname}`,
			fields: {
				...(interest ? { lesson_interest: interest } : {}),
				...(level ? { lesson_level: level } : {}),
				...(format ? { lesson_format: format } : {}),
				source: 'lessons_landing_page'
			}
		});

		// Server-side Lead via Conversions API so blockers can't hide it. The same
		// event ID goes back to the browser pixel so Meta deduplicates the pair.
		const leadEventId = crypto.randomUUID();
		await sendMetaLeadEvent({
			eventId: leadEventId,
			email,
			name,
			fbp: read('fbp'),
			fbc: read('fbc'),
			externalId: read('external_id'),
			event
		});

		return { ...result, leadEventId };
	}
};
