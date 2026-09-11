import type { Actions, PageServerLoad } from './$types';
import { handleContactSubmission } from '$lib/server/contact-mail';
import { sendMetaLeadEvent } from '$lib/server/meta-capi';

export const load: PageServerLoad = () => ({
	formStartedAt: Date.now()
});

export const actions: Actions = {
	inquire: async (event) => {
		const fd = await event.request.formData();

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

		// Server-side Lead via Conversions API so blockers can't hide it. The same
		// event ID goes back to the browser pixel so Meta deduplicates the pair.
		const leadEventId = crypto.randomUUID();
		await sendMetaLeadEvent({
			eventId: leadEventId,
			email: (fd.get('email') ?? '').toString(),
			name: (fd.get('name') ?? '').toString(),
			event
		});

		return { ...result, leadEventId };
	}
};
