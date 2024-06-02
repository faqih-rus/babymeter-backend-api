// src/services/measurementService.js
function calculateMeasurements(outputData) {
    // Assuming outputData contains the necessary measurements
    const measurements = {
        headCircumference: outputData[0],
        armCircumference: outputData[1],
        abdominalCircumference: outputData[2],
        chestCircumference: outputData[3],
        height: outputData[4],
    };

    return measurements;
}

module.exports = { calculateMeasurements };
