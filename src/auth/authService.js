// src/auth/authService.js
const admin = require('firebase-admin');

async function loginUser(email, password) {
    const user = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(user.uid);
    return token;
}

async function registerUser(email, password, role) {
    await admin.auth().createUser({
        email,
        password,
        displayName: role
    });
}

module.exports = { loginUser, registerUser };
