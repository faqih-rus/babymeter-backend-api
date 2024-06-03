// mother/motherController.js

const measurements = []; // This should come from a database in a real-world application

// Handler untuk melihat pengukuran (GET)
function getMeasurements(req, res) {
    res.status(200).json(measurements);
}

module.exports = {
    getMeasurements
};
