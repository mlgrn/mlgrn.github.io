import type { Actions, PageServerLoad } from './$types';
import { handleContactSubmission } from '$lib/server/contact-mail';

export const load: PageServerLoad = () => ({
	formStartedAt: Date.now()
});

export const actions: Actions = {
	inquire: async ({ request }) =>
		handleContactSubmission(await request.formData(), {
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
		})
};
