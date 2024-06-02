// src/config/firebaseConfig.js
const firebase = require('firebase/app');
const admin = require('firebase-admin');
require('firebase/auth');
require('firebase/firestore');
require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = admin.auth();
const db = admin.firestore();

module.exports = { auth, db, firebase };
