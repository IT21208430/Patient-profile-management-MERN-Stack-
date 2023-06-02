import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

function Camera() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.log('Error accessing camera:', error);
      });
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const capturePicture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      const imageData = canvas.toDataURL('image/png');
      // Use the image data to set the user's profile picture
      stopCamera();
    }
  };

  return (
    <>
      <video ref={videoRef} autoPlay />
      {!stream && <button onClick={startCamera}>Start Camera</button>}
      {stream && <button onClick={capturePicture}>Capture Picture</button>}
    </>

    
  );
}

export default Camera;
