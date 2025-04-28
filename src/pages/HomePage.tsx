import { useState } from 'react';
// import { WebApp } from '@twa-dev/sdk';

const HomePage = () => {
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   // Initialize Telegram WebApp
  //   WebApp.ready();
  //   setIsReady(true);
  // }, []);

  const handleClick = () => {
    alert('Click')
  };

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
      <button
        onClick={handleClick}
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
        Click
      </button>
    </div>
  );
};

export default HomePage; 