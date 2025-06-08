import { initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import serviceAccount from '../service-account.json' with { type: 'json' };

initializeApp({
  credential: cert(serviceAccount),
});

export const messaging = getMessaging();