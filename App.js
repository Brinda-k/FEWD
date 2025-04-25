import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Welcome to my site!');

  const handleClick = () => {
    setMessage('Thanks for clicking the button!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{message}</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
