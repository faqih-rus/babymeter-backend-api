// nurse/nurseController.js

let measurements = [];

// Handler untuk monitoring pengukuran (GET)
function getMeasurements(req, res) {
    res.status(200).json(measurements);
}

// Handler untuk melakukan pengukuran (POST)
function createMeasurement(req, res) {
    const { babyId, headCircumference, armCircumference, abdomenCircumference, chestCircumference, height } = req.body;
    const measurement = {
        id: measurements.length + 1,
        babyId,
        headCircumference,
        armCircumference,
        abdomenCircumference,
        chestCircumference,
        height,
        date: new Date()
    };
    measurements.push(measurement);
    res.status(201).json({ message: "Measurement created successfully", measurement });
}

// Handler untuk mengedit pengukuran (PUT)
function updateMeasurement(req, res) {
    const { id } = req.params;
    const { headCircumference, armCircumference, abdomenCircumference, chestCircumference, height } = req.body;
    const measurement = measurements.find(m => m.id === parseInt(id));
    if (measurement) {
        measurement.headCircumference = headCircumference;
        measurement.armCircumference = armCircumference;
        measurement.abdomenCircumference = abdomenCircumference;
        measurement.chestCircumference = chestCircumference;
        measurement.height = height;
        res.status(200).json({ message: "Measurement updated successfully", measurement });
    } else {
        res.status(404).json({ message: "Measurement not found" });
    }
}

// Handler untuk menghapus pengukuran (DELETE)
function deleteMeasurement(req, res) {
    const { id } = req.params;
    const index = measurements.findIndex(m => m.id === parseInt(id));
    if (index !== -1) {
        measurements = measurements.filter(m => m.id !== parseInt(id));
        res.status(200).json({ message: "Measurement deleted successfully" });
    } else {
        res.status(404).json({ message: "Measurement not found" });
    }
}

// Handler untuk mengupdate profil pengguna (PUT)
function updateProfile(req, res) {
    const { name, email, password } = req.body;
    // Logic untuk mengupdate profil pengguna
    res.status(200).json({ message: "Profile updated successfully" });
}

module.exports = {
    getMeasurements,
    createMeasurement,
    updateMeasurement,
    deleteMeasurement,
    updateProfile
};
