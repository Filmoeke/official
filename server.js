const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Stores raw files directly to disk without processing

app.post('/api/upload', upload.single('media'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // req.file contains the unmodified high-definition asset
    console.log(`Received: ${req.file.originalname} (${(req.file.size / (1024*1024)).toFixed(2)} MB)`);
    
    return res.json({ 
        success: true, 
        filename: req.file.filename,
        message: 'File uploaded instantly at original quality.' 
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
