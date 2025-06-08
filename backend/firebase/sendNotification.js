import { messaging } from './firebaseAdmin.js';

export async function sendPushNotification(token, title, body) {
  const message = {
    token,
    notification: {
      title,
      body,
    },
  };

  try {
    const response = await messaging.send(message);
    console.log('Message sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}