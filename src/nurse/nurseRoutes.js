// src/nurse/nurseRoutes.js
const express = require('express');
const multer = require('multer');
const verifyToken = require('../auth/authMiddleware');
const { measureBaby, getPatientMeasurements } = require('./nurseController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, Nurse` });
});

router.post('/measure', verifyToken, upload.single('image'), measureBaby);
router.get('/measurements', verifyToken, getPatientMeasurements);

module.exports = router;
