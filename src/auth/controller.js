const { loginUser } = require('./service');
const { validateLogin } = require('./validation');

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

module.exports = { login };
