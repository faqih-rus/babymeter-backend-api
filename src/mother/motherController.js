// src/mother/motherController.js
const { performInference } = require('../services/inferenceService');
const { calculateMeasurements } = require('../services/measurementService');
const { saveMeasurement, getMeasurements, getMeasurementById, updateMeasurement, deleteMeasurement } = require('../services/storageService');

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

async function getBabyMeasurements(req, res) {
    try {
        const measurements = await getMeasurements(req.user.uid);
        res.status(200).json({ measurements });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getMeasurementDetail(req, res) {
    try {
        const { id } = req.params;
        const measurement = await getMeasurementById(req.user.uid, id);
        res.status(200).json({ measurement });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateBabyMeasurement(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        await updateMeasurement(req.user.uid, id, updates);
        res.status(200).json({ message: 'Measurement updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteBabyMeasurement(req, res) {
    try {
        const { id } = req.params;
        await deleteMeasurement(req.user.uid, id);
        res.status(200).json({ message: 'Measurement deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { measureBaby, getBabyMeasurements, getMeasurementDetail, updateBabyMeasurement, deleteBabyMeasurement };
