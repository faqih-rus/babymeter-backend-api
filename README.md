Ini adalah Backend API migrasi ( Test )

# SPEC-001: BabyMeter Backend API

## Background

Proyek BabyMeter bertujuan untuk menyediakan alat bagi perawat untuk melakukan prediksi kesehatan bayi berdasarkan gambar yang diunggah. Backend API ini menggunakan Firebase Authentication untuk login dan menyimpan hasil prediksi di Firestore. Prediksi dilakukan melalui API inference yang dibuat oleh tim AI/ML menggunakan Flask.

## Requirements

**Must have:**
- Login menggunakan Firebase Authentication
- Membuat prediksi berdasarkan gambar yang diunggah
- Menyimpan hasil prediksi di Firestore
- Mengambil data hasil prediksi dari Firestore
- Mengedit hasil prediksi (berat dan tinggi badan)
- Memperbarui profil perawat


### API Endpoints
1. **Auth**
    - POST `/auth/register`: register menggunakan Firebase Authentication.
    - POST `/auth/login`: Login menggunakan Firebase Authentication.

3. **Nurse**
    - POST `/nurse/predictions`: Membuat prediksi baru.
    - GET `/nurse/predictions`: Mengambil semua data prediksi.
    - PUT `/nurse/predictions/:id`: Mengedit prediksi berdasarkan ID.
    - PUT `/nurse/profile`: Memperbarui profil perawat.

### Contoh Respons
```json
{
    "status": "success",
    "message": "Prediction created",
    "data": {
        "id": "5e5b4add-351d-4c11-9622-819a958f9a96",
        "name": "Bayi A",
        "age": 1,
        "weight": 10,
        "height": 75,
        "headCircumference": 45,
        "armCircumference": 15,
        "abdomenCircumference": 30,
        "chestCircumference": 40,
        "prediction": "Sehat",
        "confidence": 95,
        "suggestion": "Bayi Anda sehat. Lanjutkan pemberian gizi yang baik dan pemeriksaan rutin.",
        "createdAt": "2024-06-03T10:08:52.381Z",
        "updatedAt": "2024-06-03T10:08:52.381Z"
    }
}

