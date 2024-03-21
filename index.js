// Import modul yang diperlukan
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./src/routes/routes'); // Mengimpor router aplikasi

// Inisialisasi aplikasi Express
const app = express();
app.use(bodyParser.json());

// Menggunakan router aplikasi
app.use(router);

// Inisialisasi server pada port yang ditentukan dalam konfigurasi
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});