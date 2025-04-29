// import { useState } from 'react';
// import { WebApp } from '@twa-dev/sdk';

import CameraComponent from "@/components/CameraComponent"

const HomePage = () => {
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   // Initialize Telegram WebApp
  //   WebApp.ready();
  //   setIsReady(true);
  // }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to PGTA</h1>
      <CameraComponent />
    </div>
  );
};

export default HomePage; 