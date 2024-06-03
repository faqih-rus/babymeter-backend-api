// src/auth/authController.js
const { loginUser, registerUser } = require('./authService');
const { validateLogin, validateRegister } = require('./authValidation');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        validateLogin({ email, password });
        const token = await loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function register(req, res) {
    try {
        const { email, password, role } = req.body;
        validateRegister({ email, password, role });
        await registerUser(email, password, role);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { login, register };
