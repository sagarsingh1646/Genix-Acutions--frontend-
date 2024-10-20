// firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAMNYeZMjhKjkUabL3pkZGotZKyTOMLepg",
    authDomain: "genix-auctions-3a6e3.firebaseapp.com",
    projectId: "genix-auctions-3a6e3",
    storageBucket: "genix-auctions-3a6e3.appspot.com",
    messagingSenderId: "995401715239",
    appId: "1:995401715239:web:59f328c7fca16b9fe88802",
    measurementId: "G-N977RSHD34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Register the Service Worker
const registerServiceWorker = async () => {
    try {
        const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
        console.log('Service Worker registered successfully:', registration);
    } catch (error) {
        console.error('Service Worker registration failed:', error);
    }
};

const listenForMessagages = () => {
    onMessage(messaging, (payload) => {
        alert(`Higher bid alert! ${payload.notification.title} - ${payload.notification.body}`);
    });
};

export { messaging, getToken, listenForMessagages, registerServiceWorker };
