// server/routes.js
const express = require('express');
const {
    splashScreen,
    onboardingScreen,
    loginScreen,
    homeScreen,
    calendarScreen,
    inputBabyData,
    uploadPictureFromGallery,
    uploadPictureFromCamera,
    editBabyData,
    deleteBabyData,
    updateProfile
} = require('./handler');

const router = express.Router();

// Route untuk splash screen
router.get('/splash', splashScreen);

// Route untuk onboarding screens
router.get('/onboarding', onboardingScreen);

// Route untuk login screen
router.get('/login', loginScreen);

// Route untuk home screen
router.get('/home', homeScreen);

// Route untuk calendar screen
router.get('/calendar', calendarScreen);

// Route untuk input baby data
router.post('/baby-data', inputBabyData);

// Route untuk upload gambar dari galeri
router.post('/upload-gallery', uploadPictureFromGallery);

// Route untuk upload gambar dari kamera
router.post('/upload-camera', uploadPictureFromCamera);

// Route untuk mengedit data bayi
router.put('/baby-data/:id', editBabyData);

// Route untuk menghapus data bayi
router.delete('/baby-data/:id', deleteBabyData);

// Route untuk mengupdate profil pengguna
router.put('/profile', updateProfile);

module.exports = router;
