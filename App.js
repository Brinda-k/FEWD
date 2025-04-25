import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('You hovered over the element!');
  };

  const handleMouseLeave = () => {
    setMessage('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block', cursor: 'pointer' }}
      >
        Hover over me
      </h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
