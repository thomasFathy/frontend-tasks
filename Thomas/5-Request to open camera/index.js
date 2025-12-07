const button = document.getElementById("start-camera");
const video = document.getElementById("camera-stream");

button.addEventListener("click", function() {
    // Request access to camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Display camera stream in video element
                video.srcObject = stream;
            })
            .catch(function(err) {
                console.error("Error accessing camera: ", err);
                alert("Camera access denied or not available.");
            });
    } else {
        alert("getUserMedia is not supported in this browser.");
    }
});
