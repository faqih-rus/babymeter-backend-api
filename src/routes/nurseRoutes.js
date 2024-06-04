const express = require('express');
const verifyToken = require('../auth/middleware');
const {
    createPrediction,
    getPredictionData,
    modifyPrediction,
    updateNurseProfile
} = require('../controllers/nurseController');

const router = express.Router();

router.post('/predictions', verifyToken, createPrediction);
router.get('/predictions', verifyToken, getPredictionData);
router.put('/predictions/:id', verifyToken, modifyPrediction);
router.put('/profile', verifyToken, updateNurseProfile);

module.exports = router;
