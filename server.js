const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage using multer*
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename:  (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Serve an HTML form to upload files
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
    const data = req.file;
    if (!data || !data.filename) {
            return res.status(400).json({ error: 'Name is required' });
        }
    res.status(200).send('File uploaded successfully: ' + data.originalname);
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server }; // Export both app and server
