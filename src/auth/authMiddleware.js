// src/auth/authMiddleware.js
const admin = require('firebase-admin');

function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    admin.auth().verifyIdToken(token)
        .then(decodedToken => {
            req.user = decodedToken;
            next();
        })
        .catch(error => {
            res.status(403).json({ error: 'Failed to authenticate token' });
        });
}

module.exports = verifyToken;
