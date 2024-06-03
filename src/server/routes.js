// server/routes.js
const express = require('express');
const {
    getMeasurements: getMotherMeasurements
} = require('../mother/motherController');

const {
    getMeasurements: getNurseMeasurements,
    createMeasurement,
    updateMeasurement,
    deleteMeasurement,
    updateProfile
} = require('../nurse/nurseController');

const router = express.Router();

// Routes untuk mother
router.get('/mother/measurements', getMotherMeasurements);

// Routes untuk nurse
router.get('/nurse/measurements', getNurseMeasurements);
router.post('/nurse/measurements', createMeasurement);
router.put('/nurse/measurements/:id', updateMeasurement);
router.delete('/nurse/measurements/:id', deleteMeasurement);
router.put('/nurse/profile', updateProfile);

module.exports = router;
