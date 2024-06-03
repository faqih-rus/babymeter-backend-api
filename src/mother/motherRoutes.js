// src/mother/motherRoutes.js
const express = require('express');
const multer = require('multer');
const verifyToken = require('../auth/authMiddleware');
const {
    measureBaby,
    getBabyMeasurements,
    getMeasurementDetail,
    updateBabyMeasurement,
    deleteBabyMeasurement
} = require('./motherController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, Mother` });
});

router.post('/measure', verifyToken, upload.single('image'), measureBaby);
router.get('/measurements', verifyToken, getBabyMeasurements);
router.get('/measurements/:id', verifyToken, getMeasurementDetail);
router.put('/measurements/:id', verifyToken, updateBabyMeasurement);
router.delete('/measurements/:id', verifyToken, deleteBabyMeasurement);

module.exports = router;
