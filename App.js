import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFocused, setIsFocused] = useState(false);

  const handleTextClick = () => {
    setIsFocused(true);
  };

  return (
    <div className="container">
      {/* Clickable Text */}
      <p
        className={`clickable-text ${isFocused ? 'focused' : ''} hover-blur`}
        onClick={handleTextClick}
        tabIndex={0}
      >
        Click me to focus with color
      </p>

      {/* Hoverable Text */}
      <p className="hover-blur">Hover over me to blur</p>

      {/* Hoverable Image */}
      <img
        className="hover-blur"
        src="https://via.placeholder.com/200"
        alt="Example"
      />
    </div>
  );
}

export default App;
