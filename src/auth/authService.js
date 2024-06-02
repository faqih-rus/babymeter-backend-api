// src/auth/authService.js
const firebase = require('firebase/app');
require('firebase/auth');

async function registerMother(email, password) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function loginMother(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function loginNurse(email, password) {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        return user;
    } catch (error) {
        throw new Error('Invalid nurse credentials');
    }
}

module.exports = { registerMother, loginMother, loginNurse };
