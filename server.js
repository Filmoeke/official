const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure an 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure storage to retain original filenames and formats
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(__dirname));

// Fast Uncompressed Upload Route
app.post('/api/upload', upload.single('media'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file received' });
    }

    console.log(`[Success] Saved: ${req.file.filename} (${(req.file.size / (1024 * 1024)).toFixed(2)} MB)`);

    return res.json({
        success: true,
        filename: req.file.filename,
        size: req.file.size,
        message: 'File uploaded successfully at full quality.'
    });
});

app.listen(PORT, () => {
    console.log(`Free local server running live at http://localhost:${PORT}`);
});
