// src/nurse/nurseRoutes.js
const express = require('express');
const multer = require('multer');
const verifyToken = require('../auth/authMiddleware');
const { runInference } = require('../services/tfliteService');
const { calculateMeasurements } = require('../services/measurementService');
const { saveMeasurement, getMeasurements } = require('../services/storageService');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, Nurse` });
});

router.post('/measure', verifyToken, upload.single('image'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const outputData = await runInference(imageBuffer);
        const measurements = calculateMeasurements(outputData);
        const measurementId = await saveMeasurement(req.user.uid, measurements);

        res.status(200).json({ measurementId, measurements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/measurements', verifyToken, async (req, res) => {
    try {
        const measurements = await getMeasurements(req.user.uid);
        res.status(200).json({ measurements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
