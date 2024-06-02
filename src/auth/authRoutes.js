// src/auth/authRoutes.js
const express = require('express');
const { registerMother, loginMother, loginNurse } = require('./authService');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await registerMother(email, password);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;
        let user;
        if (role === 'mother') {
            user = await loginMother(email, password);
        } else if (role === 'nurse') {
            user = await loginNurse(email, password);
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
