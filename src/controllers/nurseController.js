const { savePrediction, getPredictions, updatePrediction, updateProfile } = require('../services/storageService');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

async function createPrediction(req, res) {
    try {
        const { imageUrl, name, age } = req.body;
        const response = await axios.post('<FLASK_INFERENCE_URL>', { imageUrl });
        const predictionData = response.data;
        const userId = req.user.uid;
        
        const prediction = {
            id: uuidv4(),
            name,
            age,
            weight: predictionData.weight,
            height: predictionData.height,
            headCircumference: predictionData.headCircumference,
            armCircumference: predictionData.armCircumference,
            abdomenCircumference: predictionData.abdomenCircumference,
            chestCircumference: predictionData.chestCircumference,
            prediction: predictionData.prediction,
            confidence: predictionData.confidence,
            suggestion: predictionData.suggestion,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const predictionId = await savePrediction(userId, prediction);

        res.status(201).json({
            status: "success",
            message: "Prediction created",
            data: prediction
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getPredictionData(req, res) {
    try {
        const userId = req.user.uid;
        const predictions = await getPredictions(userId);
        res.status(200).json(predictions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function modifyPrediction(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        const userId = req.user.uid;
        updates.updatedAt = new Date().toISOString();
        await updatePrediction(userId, id, updates);
        res.status(200).json({ message: "Prediction updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function updateNurseProfile(req, res) {
    try {
        const userId = req.user.uid;
        const profileData = req.body;
        await updateProfile(userId, profileData);
        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createPrediction,
    getPredictionData,
    modifyPrediction,
    updateNurseProfile
};
