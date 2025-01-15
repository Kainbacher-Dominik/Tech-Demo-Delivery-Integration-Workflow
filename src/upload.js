
/*
document.getElementById('uploadForm').addEventListener('submit', function(event) {
*/

function upload(){
        event.preventDefault();
        const formData = new FormData(this);
        console.log("test")
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(Network response was not ok ' + response.statusText);
            }
        })
        .then(data => {
            document.getElementById('response').innerText = 'Upload successful: ' + data;
        })
        .catch(error => {
            document.getElementById('response').innerText = 'Error: ' + error.message;
        });
    });