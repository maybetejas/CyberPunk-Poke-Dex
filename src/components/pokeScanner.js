import React from "react";
import Webcam from "react-webcam";

function PokeScanner() {
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // Logs base64 image
  }

  return (
    <div>
      <h1>Poke Scanner</h1>
      <p style={{ textAlign: 'center' }}>Scan your Pokemon!</p>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button style={{position: 'absolute', top: '70%'}} onClick={capture}>Capture</button>
    </div>
  );
}

export default PokeScanner;
