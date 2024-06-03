// src/nurse/nurseController.js
const { performInference } = require('../services/inferenceService');
const { calculateMeasurements } = require('../services/measurementService');
const { saveMeasurement, getMeasurements } = require('../services/storageService');

async function measureBaby(req, res) {
    try {
        const imageBuffer = req.file.buffer;
        const outputData = await performInference(imageBuffer);
        const measurements = calculateMeasurements(outputData);
        const measurementId = await saveMeasurement(req.user.uid, measurements);
        res.status(200).json({ measurementId, measurements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPatientMeasurements(req, res) {
    try {
        const measurements = await getMeasurements(req.user.uid);
        res.status(200).json({ measurements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { measureBaby, getPatientMeasurements };
