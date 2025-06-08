// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBayVSBubhU_x1d4E_nElF94TfsWc2lYi4",
  authDomain: "sample-fcm-c93dc.firebaseapp.com",
  projectId: "sample-fcm-c93dc",
  storageBucket: "sample-fcm-c93dc.firebasestorage.app",
  messagingSenderId: "1004630983970",
  appId: "1:1004630983970:web:499803391a8b4a0e9fd17b",
  measurementId: "G-KCLK2ND5FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };