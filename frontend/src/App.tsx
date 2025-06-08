import { useEffect } from 'react';
import { messaging, getToken, onMessage } from './firebase';
import './App.css';

const App = () => {
  const VAPID_KEY = import.meta.env.PUBLIC_FIREBASE_FCM_VAPID_KEY; // From Firebase console (Web Push certs)

  // Effect to handle FCM setup
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(() => console.log('✅ Service Worker registered'))
        .catch(err => console.error('❌ SW registration failed', err));
    }

    // Request permission and get token
    Notification.requestPermission().then(async (permission) => {
      if (permission === 'granted') {
        const token = await getToken(messaging, { vapidKey: VAPID_KEY });
        console.log('🎯 FCM Token:', token);
        // Send this token to your backend
      } else {
        console.warn('Notification permission not granted');
      }
    });

    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log('📩 Foreground message received:', payload);
      const { title, body } = payload.notification;
      alert(`${title}\n${body}`); // Or display in your UI
    });
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
