import type { SendEmail } from '@cloudflare/workers-types';
import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage } from 'mimetext';
import { subscriptionEmail } from '../emails/subscribe';

export const sendEmail = async (email: string, sender: SendEmail) => {
  const { html, subject, text } = subscriptionEmail(email);
  const msg = createMimeMessage();
  msg.setSender('no-reply@timsexperiments.foo');
  msg.setRecipient(email);
  msg.setSubject(subject);
  msg.addMessage({ contentType: 'text/plain', data: text });
  msg.addMessage({ contentType: 'text/html', data: html });
  await sender.send(
    new EmailMessage('no-reply@timsexperiments.foo', email, msg.asRaw()),
  );
};
