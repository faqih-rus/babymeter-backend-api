// src/server/server.js
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const { loadTFLiteModel } = require('../services/tfliteService');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Menggunakan routes
app.use('/api', routes);

// Load the TensorFlow Lite model
loadTFLiteModel().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to load the model', err);
});
