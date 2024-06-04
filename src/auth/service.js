const admin = require('firebase-admin');

async function loginUser(email, password) {
    const user = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(user.uid);
    return token;
}


module.exports = { loginUser };
