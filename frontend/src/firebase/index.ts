import { messaging, getToken, onMessage } from '../firebase';

const VAPID_KEY = import.meta.env.PUBLIC_FIREBASE_FCM_VAPID_KEY; // From Firebase console (Web Push certs)

async function requestPermissionAndGetToken() {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') throw new Error('Permission not granted');

    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    console.log('FCM token:', token);

    // Send token to your server for future pushes
  } catch (err) {
    console.error('Error getting FCM token', err);
  }
}

onMessage(messaging, (payload) => {
  console.log('Message received in foreground:', payload);
});

export { requestPermissionAndGetToken, messaging };
