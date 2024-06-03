// src/services/storageService.js
const { db } = require('../config/firebaseConfig');

async function saveMeasurement(userId, measurement) {
    const docRef = db.collection('measurements').doc(userId).collection('data').doc();
    await docRef.set(measurement);
    return docRef.id;
}

async function getMeasurements(userId) {
    const snapshot = await db.collection('measurements').doc(userId).collection('data').get();
    const measurements = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return measurements;
}

async function getMeasurementById(userId, measurementId) {
    const docRef = db.collection('measurements').doc(userId).collection('data').doc(measurementId);
    const doc = await docRef.get();
    if (!doc.exists) {
        throw new Error('Measurement not found');
    }
    return { id: doc.id, ...doc.data() };
}

async function updateMeasurement(userId, measurementId, updates) {
    const docRef = db.collection('measurements').doc(userId).collection('data').doc(measurementId);
    await docRef.update(updates);
}

async function deleteMeasurement(userId, measurementId) {
    const docRef = db.collection('measurements').doc(userId).collection('data').doc(measurementId);
    await docRef.delete();
}

module.exports = { saveMeasurement, getMeasurements, getMeasurementById, updateMeasurement, deleteMeasurement };
