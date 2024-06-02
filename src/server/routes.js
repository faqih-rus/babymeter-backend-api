// src/server/routes.js
const express = require('express');
const authRoutes = require('../auth/authRoutes');
const nurseRoutes = require('../nurse/nurseRoutes');
const motherRoutes = require('../mother/motherRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/nurse', nurseRoutes);
router.use('/mother', motherRoutes);

module.exports = router;
