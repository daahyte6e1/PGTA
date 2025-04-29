import React, { useRef, useState } from 'react';

function CameraComponent() {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (err) {
      console.error('Ошибка доступа к камере:', err);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={startCamera}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#0088cc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#006699'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0088cc'}
      >
        Открыть камеру
      </button>

      {cameraOn && (
        <div className="mt-4">
          <video ref={videoRef} autoPlay playsInline className="rounded shadow-md w-full max-w-md" />
        </div>
      )}
    </div>
  );
}

export default CameraComponent;
