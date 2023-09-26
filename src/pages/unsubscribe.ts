import type { APIRoute } from 'astro';
import { SUBSCRIBED_USERS_KEY } from '../lib/constants';

export const POST: APIRoute = async ({
  url,
  locals: {
    runtime: { env },
  },
}) => {
  const email = url.searchParams.get('email');
  if (!email) {
    return new Response(
      'An email was not specified to be unsubscribed. Please use the link from your email to unsubscribe.',
      {
        status: 400,
      },
    );
  }
  const subscribedUsers = JSON.parse(
    (await env.NEWS_LETTER_KV.get(SUBSCRIBED_USERS_KEY)) ?? '[]',
  ) as string[];
  if (!subscribedUsers.includes(email)) {
    return new Response(
      'You are already unsubscribed from email notifications.',
      {
        status: 400,
      },
    );
  }
  await env.NEWS_LETTER_KV.put(
    SUBSCRIBED_USERS_KEY,
    JSON.stringify(
      subscribedUsers.filter((subscribed) => subscribed !== email),
    ),
  );
  return new Response('You have been successfully unsubscribed.', {
    status: 200,
  });
};
