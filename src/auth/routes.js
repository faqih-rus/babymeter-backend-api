const express = require('express');
const { login, register } = require('./controller');
const verifyToken = require('./middleware');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.use(verifyToken);

module.exports = router;
