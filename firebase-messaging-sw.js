importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js");

firebase.initializeApp({
  projectId: "antigrav-e623c",
  appId: "1:258429885693:web:0fedb88a2e5889cec07294",
  storageBucket: "antigrav-e623c.firebasestorage.app",
  apiKey: "AIzaSyDMjmvgpB1Qdms5n9xYSF16Nca04dGGOKs",
  authDomain: "antigrav-e623c.firebaseapp.com",
  messagingSenderId: "258429885693"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://regiontehsnab.ru/favicon.ico'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
