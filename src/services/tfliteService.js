// src/services/tfliteService.js
const fs = require('fs');
const tflite = require('@tensorflow/tfjs-node');
const path = require('path');

let model;

async function loadTFLiteModel() {
    const modelPath = path.resolve(__dirname, '../models/model.tflite');
    const modelBuffer = fs.readFileSync(modelPath);
    model = await tflite.loadTFLiteModel(modelBuffer);
    console.log('Model loaded successfully');
}

async function runInference(imageBuffer) {
    if (!model) {
        throw new Error('Model is not loaded');
    }

    const inputTensor = tflite.node.decodeImage(imageBuffer, 3);
    const outputTensor = model.predict(inputTensor.expandDims(0));
    const outputData = outputTensor.dataSync();

    return outputData;
}

module.exports = { loadTFLiteModel, runInference };
