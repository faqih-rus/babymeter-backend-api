// src/services/storageService.js
const { db } = require('../config/firebaseConfig');

async function saveMeasurement(userId, measurement) {
    const docRef = db.collection('measurements').doc(userId).collection('data').doc();
    await docRef.set(measurement);
    return docRef.id;
}

async function getMeasurements(userId) {
    const snapshot = await db.collection('measurements').doc(userId).collection('data').get();
    const measurements = snapshot.docs.map(doc => doc.data());
    return measurements;
}

module.exports = { saveMeasurement, getMeasurements };
