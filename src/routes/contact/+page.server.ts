import type { Actions, PageServerLoad } from './$types';
import { handleContactSubmission } from '$lib/server/contact-mail';

export const load: PageServerLoad = () => ({
	formStartedAt: Date.now()
});

export const actions: Actions = {
	create: async ({ request }) => handleContactSubmission(await request.formData())
};
