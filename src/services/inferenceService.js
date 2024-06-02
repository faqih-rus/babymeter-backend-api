// src/services/inferenceService.js
const tflite = require('@tensorflow/tfjs-node');
const fs = require('fs');

let model = null;

// Function to load the TensorFlow Lite model
async function loadModel() {
    const modelPath = './src/models/model.tflite';
    const modelBuffer = fs.readFileSync(modelPath);
    model = await tflite.loadTFLiteModel(modelBuffer);
    console.log('Model loaded successfully');
}

// Function to perform inference
async function performInference(imageBuffer) {
    if (!model) {
        throw new Error('Model not loaded');
    }

    const inputTensor = tflite.node.decodeImage(imageBuffer, 3);
    const outputTensor = model.predict(inputTensor.expandDims(0));
    const outputData = outputTensor.dataSync();

    return outputData;
}

module.exports = { loadModel, performInference };
