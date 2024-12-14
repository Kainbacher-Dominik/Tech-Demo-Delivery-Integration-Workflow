document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('File upload failed');
        })
        .then(data => {
            document.getElementById('response').innerText = 'Upload successful: ' + data;
        })
        .catch(error => {
            document.getElementById('response').innerText = 'Error: ' + error.message;
        });
    });