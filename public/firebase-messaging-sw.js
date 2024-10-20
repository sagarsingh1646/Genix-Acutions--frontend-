// firebase-messaging-sw.js

// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');


// Initialize the Firebase app in the service worker
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
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-log.png', // Make sure the path is accessible
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
