async function startUpload() {
    const fileInput = document.getElementById('mediaFile');
    const uploadBtn = document.getElementById('uploadBtn');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const status = document.getElementById('status');

    if (fileInput.files.length === 0) {
        alert("Please select a photo or video first!");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("media", file); // Raw file appended with zero alterations or downscaling

    uploadBtn.disabled = true;
    progressBar.style.display = 'block';
    status.innerText = "Preparing upload...";

    try {
        // Using XMLHttpRequest to track exact upload speeds and progress smoothly
        await uploadWithProgress(formData, (percent) => {
            progressFill.style.width = percent + '%';
            status.innerText = `Uploading... ${percent}%`;
        });

        status.innerText = "Upload complete! Saved at 100% original quality.";
        status.style.color = "#16a34a";
    } catch (error) {
        console.error(error);
        status.innerText = "Upload failed. Please try again.";
        status.style.color = "#dc2626";
    } finally {
        uploadBtn.disabled = false;
    }
}

function uploadWithProgress(formData, onProgress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        // Replace with your backend upload endpoint URL (e.g., Node.js, Python, PHP, or Cloud Storage handler)
        xhr.open('POST', '/api/upload', true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                onProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Server responded with status ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error("Network error occurred during upload."));

        xhr.send(formData);
    });
}
