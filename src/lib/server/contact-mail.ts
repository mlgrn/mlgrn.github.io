import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';

const MIN_SUBMISSION_TIME_MS = 2_000;

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: env.NODEMAILER_LOGIN,
		pass: env.NODEMAILER_PW
	}
});

const escapeHtml = (value: string) =>
	value.replace(
		/[&<>"']/g,
		(character) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#039;'
			})[character] ?? character
	);

export type ExtraField = {
	/** Form field name to read from the submission. */
	name: string;
	/** Human readable label used in the email body. */
	label: string;
};

export type ContactSubmissionOptions = {
	/** Prepended to the email subject, e.g. "[Bass Lessons]". Useful for inbox filters. */
	subjectPrefix?: string;
	/** Used when the submission does not include a subject field. */
	defaultSubject?: string;
	/** Minimum message length. Set to 0 to make the message optional. */
	minMessageLength?: number;
	/** Additional short fields to include in the email body. */
	extraFields?: Array<ExtraField>;
	/** Tag written into the email body so you can tell which page the lead came from. */
	source?: string;
};

/**
 * Validates a contact-style form submission, silently discards obvious bots,
 * and emails the result to FORWARD_MAIL_TO.
 *
 * Expected fields: name, email, message, optional subject, plus the anti-spam
 * fields `website` (honeypot, must be empty) and `formStartedAt` (ms timestamp
 * from the page load).
 */
export async function handleContactSubmission(fd: FormData, options: ContactSubmissionOptions = {}) {
	const {
		subjectPrefix = '',
		defaultSubject = 'New contact form submission',
		minMessageLength = 10,
		extraFields = [],
		source
	} = options;

	const read = (key: string) => (fd.get(key) ?? '').toString().trim();

	const honeypot = read('website');
	const formStartedAt = Number(fd.get('formStartedAt'));
	const name = read('name');
	const userEmail = read('email');
	const subject = read('subject');
	const message = read('message');

	const submittedTooQuickly =
		!Number.isFinite(formStartedAt) || Date.now() - formStartedAt < MIN_SUBMISSION_TIME_MS;

	// Return a normal response so automated submitters do not learn which check caught them.
	// `lead: false` keeps discarded spam out of ad-platform conversion tracking.
	if (honeypot || submittedTooQuickly) return { success: true, lead: false };

	if (!userEmail || userEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
		return fail(400, { error: 'Please enter a valid email address.' });
	}

	if (name.length > 100 || subject.length > 200) {
		return fail(400, { error: 'The name or subject is too long.' });
	}

	if (message.length < minMessageLength) {
		return fail(400, {
			error:
				minMessageLength > 0
					? `Message must be at least ${minMessageLength} characters.`
					: 'Message is required.'
		});
	}

	if (message.length > 5_000) {
		return fail(400, { error: 'Message must be 5,000 characters or fewer.' });
	}

	const extras = extraFields
		.map((field) => ({ label: field.label, value: read(field.name).slice(0, 200) }))
		.filter((field) => field.value);

	const finalSubject = [subjectPrefix, subject || defaultSubject].filter(Boolean).join(' ');

	const textLines = [
		`Name: ${name}`,
		`Email: ${userEmail}`,
		...extras.map((field) => `${field.label}: ${field.value}`),
		...(source ? [`Source: ${source}`] : []),
		'',
		message || '(no message)'
	];

	const htmlLines = [
		`<h1>${escapeHtml(finalSubject)}</h1>`,
		`<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
		`<p><strong>Email:</strong> ${escapeHtml(userEmail)}</p>`,
		...extras.map(
			(field) => `<p><strong>${escapeHtml(field.label)}:</strong> ${escapeHtml(field.value)}</p>`
		),
		...(source ? [`<p><strong>Source:</strong> ${escapeHtml(source)}</p>`] : []),
		`<hr>`,
		`<p>${message ? escapeHtml(message).replace(/\n/g, '<br>') : '<em>(no message)</em>'}</p>`
	];

	await transporter.sendMail({
		from: env.NODEMAILER_LOGIN,
		to: env.FORWARD_MAIL_TO,
		replyTo: userEmail,
		subject: finalSubject,
		text: textLines.join('\n'),
		html: htmlLines.join('\n')
	});

	return { success: true, lead: true };
}
