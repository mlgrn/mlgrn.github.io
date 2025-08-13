import nodemailer from 'nodemailer';
import type { ContactFormEmail } from '$lib/data/types';
import { env } from '$env/dynamic/private';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: env.NODEMAILER_LOGIN,
    pass: env.NODEMAILER_PW
  }
});


  export const actions: Actions = {
    create: async ({ request }) => {
      console.log('Auth creds:', !!env.NODEMAILER_LOGIN, !!env.NODEMAILER_PW, !!env.FORWARD_MAIL_TO);
      const fd = await request.formData();
      const name = (fd.get('name') ?? '').toString().trim();
      const userEmail = (fd.get('email') ?? '').toString().trim();
      const subject = (fd.get('subject') ?? '').toString().trim();
      const message = (fd.get('message') ?? '').toString().trim();

      if (!userEmail || !message) return fail(400, { error: 'Email and message are required.' });

      await transporter.sendMail({
        from: env.NODEMAILER_LOGIN,
        to: env.FORWARD_MAIL_TO,
        replyTo: userEmail,
        subject: subject || 'New contact form submission',
        text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
        html: `<h1>${subject || 'New contact form submission'}</h1><h2>${name}</h2><h3>${userEmail}</h3><p>${message}</p>`
      });

      return { success: true };
    }
  };

