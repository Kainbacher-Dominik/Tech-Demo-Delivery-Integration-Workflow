const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// File type validation
const fileFilter = (req, file, cb) => {
   const allowedTypes = /jpeg|jpg|png|gif/; // Define allowed file types
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true); // Accept the file
  } else {
    cb(new Error('Error: File type not supported!'), false); // Reject the file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Create uploads directory if it doesn't exist
const dir = './uploads';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

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

// Serve a file for download
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }

    // Set headers for download
    res.download(filePath, (err) => {
      if (err) {
        res.status(500).send('Error downloading file');
      }
    });
  });
});

// List all files in the uploads directory
app.get('/files', (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory: ' + err);
        }
        res.json(files);
    });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server }; // Export both app and server
