<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Film O Eke | Photography & Videography Journey</title>
    <style>
        /* Base Reset & Cinema Theme */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
            background-color: #0b0c10;
            color: #c5c6c7;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Animated Ambient Background Gradient */
        .bg-glow {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at 50% 20%, rgba(102, 252, 241, 0.08), transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(69, 162, 158, 0.05), transparent 50%);
            z-index: -1;
            pointer-events: none;
        }

        /* Live Action Glowing Animated Title */
        header {
            text-align: center;
            padding: 50px 20px 30px;
            background: linear-gradient(180deg, #1f2833 0%, #0b0c10 100%);
            border-bottom: 1px solid rgba(102, 252, 241, 0.1);
        }

        header h1 {
            font-size: 2.8rem;
            letter-spacing: 2px;
            display: inline-block;
            background: linear-gradient(90deg, #66fcf1, #45a29e, #ffffff, #66fcf1);
            background-size: 300% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: cinemaShine 6s linear infinite;
            text-transform: uppercase;
        }

        @keyframes cinemaShine {
            0% { background-position: 0% center; }
            100% { background-position: 300% center; }
        }

        header p {
            color: #c5c6c7;
            font-size: 1.1rem;
            margin-top: 8px;
            font-weight: 300;
        }

        /* Navigation Bar */
        nav {
            background: rgba(31, 40, 51, 0.8);
            backdrop-filter: blur(10px);
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-links {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .social-links a {
            color: #66fcf1;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 5px 12px;
            border-radius: 20px;
            background: rgba(102, 252, 241, 0.05);
            border: 1px solid rgba(102, 252, 241, 0.2);
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: #66fcf1;
            color: #0b0c10;
            box-shadow: 0 0 12px rgba(102, 252, 241, 0.4);
        }

        .nav-actions {
            display: flex;
            gap: 10px;
        }

        /* Animated Action Buttons */
        .btn-action {
            background: linear-gradient(135deg, #45a29e, #66fcf1);
            color: #0b0c10;
            font-weight: bold;
            padding: 8px 18px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            animation: pulseGlow 3s infinite;
        }

        @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(102, 252, 241, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(102, 252, 241, 0); }
            100% { box-shadow: 0 0 0 0 rgba(102, 252, 241, 0); }
        }

        .btn-action:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 252, 241, 0.4);
        }

        .btn-admin {
            background: transparent;
            color: #c5c6c7;
            border: 1px solid #45a29e;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s ease;
        }

        .btn-admin:hover {
            background: rgba(69, 162, 158, 0.2);
            color: #66fcf1;
        }

        /* Main Gallery Container */
        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .section-title {
            color: #ffffff;
            font-size: 1.8rem;
            margin-bottom: 20px;
            border-left: 4px solid #66fcf1;
            padding-left: 12px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }

        /* Animated Media Cards */
        .media-card {
            background: #1f2833;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
            position: relative;
        }

        .media-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(102, 252, 241, 0.2);
        }

        .media-card img, .media-card video {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
        }

        .media-info {
            padding: 15px;
        }

        .media-info h4 {
            color: #ffffff;
            font-size: 1.05rem;
            margin-bottom: 4px;
        }

        .media-info p {
            font-size: 0.85rem;
            color: #66fcf1;
        }

        .empty-msg {
            grid-column: 1 / -1;
            text-align: center;
            padding: 50px 20px;
            background: #1f2833;
            border-radius: 10px;
            border: 1px dashed rgba(255, 255, 255, 0.1);
        }

        /* Modal Overlay & Form */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1000;
            padding: 20px;
        }

        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-card {
            background: #1f2833;
            width: 100%;
            max-width: 500px;
            border-radius: 12px;
            padding: 30px;
            border: 1px solid rgba(102, 252, 241, 0.2);
            position: relative;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }

        .modal-overlay.active .modal-card {
            transform: scale(1);
        }

        .close-btn {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 1.5rem;
            background: none;
            border: none;
            color: #c5c6c7;
            cursor: pointer;
        }

        .form-group {
            margin-bottom: 18px;
        }

        .form-group label {
            display: block;
            margin-bottom: 6px;
            font-size: 0.9rem;
            color: #ffffff;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            background: #0b0c10;
            border: 1px solid #45a29e;
            color: #ffffff;
            outline: none;
        }

        /* Admin Approval Panel */
        .admin-item {
            display: flex;
            gap: 15px;
            align-items: center;
            background: #0b0c10;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 10px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .admin-preview {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
        }

        .admin-details {
            flex: 1;
        }

        .admin-actions {
            display: flex;
            gap: 8px;
        }

        .btn-approve {
            background: #28a745;
            color: #fff;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn-reject {
            background: #dc3545;
            color: #fff;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
        }

        footer {
            text-align: center;
            padding: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            margin-top: 50px;
            font-size: 0.85rem;
        }
    </style>
</head>
<body>

    <div class="bg-glow"></div>

    <header>
        <h1>Film O Eke</h1>
        <p>A Visual Journey in Photography & Videography</p>
    </header>

    <nav>
        <div class="social-links">
            <a href="https://instagram.com/Film_O_Eke" target="_blank">📷 @Film_O_Eke</a>
            <a href="https://instagram.com/Imxsajid" target="_blank">👤 @Imxsajid</a>
            <a href="https://facebook.com" target="_blank">🌐 Sajid Sk</a>
        </div>
        <div class="nav-actions">
            <button class="btn-action" onclick="openModal('uploadModal')">Submit Photo/Video</button>
            <button class="btn-admin" onclick="openModal('adminModal')">Owner Panel</button>
        </div>
    </nav>

    <div class="container">
        <h2 class="section-title">Approved Community & Showcase Gallery</h2>
        <div class="gallery-grid" id="publicGallery">
            <!-- Approved items display here -->
        </div>
    </div>

    <!-- SUBMIT PHOTO/VIDEO MODAL -->
    <div class="modal-overlay" id="uploadModal">
        <div class="modal-card">
            <button class="close-btn" onclick="closeModal('uploadModal')">&times;</button>
            <h3 style="color: #66fcf1; margin-bottom: 15px;">Submit Your Media</h3>
            <p style="font-size: 0.85rem; margin-bottom: 20px;">Submissions are stored in a pending queue and will only appear on the public gallery after review and approval.</p>
            
            <form id="submissionForm">
                <div class="form-group">
                    <label>Your Name / Social Handle</label>
                    <input type="text" id="uploaderName" placeholder="e.g., @alex_clicks" required>
                </div>
                <div class="form-group">
                    <label>Title / Caption</label>
                    <input type="text" id="mediaTitle" placeholder="e.g., Sunset over the hills" required>
                </div>
                <div class="form-group">
                    <label>Media Type</label>
                    <select id="mediaType" onchange="toggleTypeInput()">
                        <option value="image">Photo (URL / File)</option>
                        <option value="video">Video (URL / File)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Media Direct Link or Select File</label>
                    <input type="url" id="mediaUrl" placeholder="https://example.com/image.jpg">
                    <input type="file" id="mediaFile" accept="image/*,video/*" style="margin-top: 8px;" onchange="handleFileSelect(event)">
                </div>
                <button type="submit" class="btn-action" style="width: 100%; margin-top: 10px;">Send for Approval</button>
            </form>
        </div>
    </div>

    <!-- OWNER APPROVAL PANEL MODAL -->
    <div class="modal-overlay" id="adminModal">
        <div class="modal-card" style="max-width: 650px;">
            <button class="close-btn" onclick="closeModal('adminModal')">&times;</button>
            <h3 style="color: #66fcf1; margin-bottom: 15px;">Owner Approval Queue</h3>
            <p style="font-size: 0.85rem; margin-bottom: 15px;">Items pending approval before public display:</p>
            
            <div id="pendingList" style="max-height: 350px; overflow-y: auto;">
                <!-- Pending submissions render here -->
            </div>
        </div>
    </div>

    <footer>
        <p>&copy; 2026 Film O Eke | Managed by Sajid Sk. All rights reserved.</p>
    </footer>

    <script>
        // In-memory/LocalStorage Data Structure
        let mediaDatabase = JSON.parse(localStorage.getItem('film_o_eke_data')) || [
            {
                id: 1,
                title: 'Cinematic Sunset',
                uploader: 'Imxsajid',
                type: 'image',
                url: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80',
                status: 'approved'
            }
        ];

        let temporaryFileBase64 = "";

        function saveData() {
            localStorage.setItem('film_o_eke_data', JSON.stringify(mediaDatabase));
            renderGallery();
            renderPendingQueue();
        }

        function openModal(id) {
            document.getElementById(id).classList.add('active');
            if (id === 'adminModal') renderPendingQueue();
        }

        function closeModal(id) {
            document.getElementById(id).classList.remove('active');
        }

        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    temporaryFileBase64 = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        document.getElementById('submissionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('uploaderName').value.trim();
            const title = document.getElementById('mediaTitle').value.trim();
            const type = document.getElementById('mediaType').value;
            const urlInput = document.getElementById('mediaUrl').value.trim();
            
            const finalUrl = temporaryFileBase64 || urlInput;

            if (!finalUrl) {
                alert('Please provide either an image/video URL or select a file.');
                return;
            }

            const newSubmission = {
                id: Date.now(),
                title: title,
                uploader: name,
                type: type,
                url: finalUrl,
                status: 'pending'
            };

            mediaDatabase.push(newSubmission);
            saveData();

            alert('Your submission has been sent to Sajid Sk for approval!');
            document.getElementById('submissionForm').reset();
            temporaryFileBase64 = "";
            closeModal('uploadModal');
        });

        function renderGallery() {
            const gallery = document.getElementById('publicGallery');
            const approvedItems = mediaDatabase.filter(item => item.status === 'approved');

            if (approvedItems.length === 0) {
                gallery.innerHTML = `<div class="empty-msg"><h3>No public posts yet!</h3><p>Submit a photo or video to be featured here after approval.</p></div>`;
                return;
            }

            gallery.innerHTML = approvedItems.map(item => `
                <div class="media-card">
                    ${item.type === 'image' 
                        ? `<img src="${item.url}" alt="${item.title}" loading="lazy">` 
                        : `<video src="${item.url}" controls></video>`}
                    <div class="media-info">
                        <h4>${item.title}</h4>
                        <p>By ${item.uploader}</p>
                    </div>
                </div>
            `).join('');
        }

        function renderPendingQueue() {
            const pendingList = document.getElementById('pendingList');
            const pendingItems = mediaDatabase.filter(item => item.status === 'pending');

            if (pendingItems.length === 0) {
                pendingList.innerHTML = `<p style="text-align: center; color: #aaa; padding: 20px;">No pending submissions in queue.</p>`;
                return;
            }

            pendingList.innerHTML = pendingItems.map(item => `
                <div class="admin-item">
                    ${item.type === 'image' 
                        ? `<img src="${item.url}" class="admin-preview">` 
                        : `<video src="${item.url}" class="admin-preview"></video>`}
                    <div class="admin-details">
                        <strong style="color: #fff; font-size: 0.95rem;">${item.title}</strong>
                        <p style="font-size: 0.8rem; color: #66fcf1;">Submitted by: ${item.uploader}</p>
                    </div>
                    <div class="admin-actions">
                        <button class="btn-approve" onclick="approvePost(${item.id})">Approve</button>
                        <button class="btn-reject" onclick="rejectPost(${item.id})">Reject</button>
                    </div>
                </div>
            `).join('');
        }

        function approvePost(id) {
            const item = mediaDatabase.find(i => i.id === id);
            if (item) {
                item.status = 'approved';
                saveData();
            }
        }

        function rejectPost(id) {
            mediaDatabase = mediaDatabase.filter(i => i.id !== id);
            saveData();
        }

        // Initial render
        renderGallery();
    </script>
</body>
</html>
