import { env } from '$env/dynamic/private';

const KIT_API_BASE = 'https://api.kit.com/v4';

export type KitSubscriberInput = {
	email: string;
	firstName?: string;
	/** Page URL that referred this signup, useful in Kit analytics. */
	referrer?: string;
	/** Custom field values keyed by Kit custom field `key` (e.g. `lesson_interest`). */
	fields?: Record<string, string>;
};

export function isKitConfigured(): boolean {
	return Boolean(env.KIT_API_KEY?.trim() && env.KIT_FORM_ID?.trim());
}

/**
 * Creates/updates a Kit subscriber and adds them to the configured form.
 * Never throws: a list failure must not break the inquiry form.
 */
export async function addKitSubscriber(input: KitSubscriberInput): Promise<void> {
	const apiKey = env.KIT_API_KEY?.trim();
	const formId = env.KIT_FORM_ID?.trim();
	if (!apiKey || !formId) return;

	const email = input.email.trim().toLowerCase();
	if (!email) return;

	const headers = {
		'Content-Type': 'application/json',
		'X-Kit-Api-Key': apiKey
	};

	try {
		// Kit v4 requires the subscriber to exist before they can be added to a form.
		const createResponse = await fetch(`${KIT_API_BASE}/subscribers`, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				email_address: email,
				...(input.firstName ? { first_name: input.firstName } : {}),
				...(input.fields && Object.keys(input.fields).length > 0 ? { fields: input.fields } : {})
			})
		});

		if (!createResponse.ok) {
			console.error(
				'[kit] create subscriber failed',
				createResponse.status,
				await createResponse.text()
			);
			return;
		}

		const addResponse = await fetch(`${KIT_API_BASE}/forms/${formId}/subscribers`, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				email_address: email,
				...(input.referrer ? { referrer: input.referrer } : {})
			})
		});

		if (!addResponse.ok && addResponse.status !== 200) {
			console.error(
				'[kit] add subscriber to form failed',
				addResponse.status,
				await addResponse.text()
			);
		}
	} catch (error) {
		console.error('[kit] subscriber sync failed', error);
	}
}
