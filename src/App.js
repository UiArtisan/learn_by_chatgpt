import React, { useState } from 'react';

function App() {
  // State to hold the number of button presses
  const [count, setCount] = useState(0);

  // Function to handle the button click
  function handleClick() {
    setCount(count + 1); // Increment the count
    console.log("I'm pressed now");
  }

  // Function to clear/reset the count
  function clearCount() {
    setCount(0); // Reset the count to 0
    console.log("Count has been reset");
  }

  // Inline styles
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px'
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3'
  };

  const counterStyle = {
    fontSize: '2rem',
    color: '#28a745',
    marginTop: '10px'
  };

  return (
    <div style={appStyle}>
      {/* Title */}
      <h1 style={titleStyle}>Welcome to My App</h1>
      
      {/* Press Me Button */}
      <button 
        style={buttonStyle}
        onClick={handleClick}
        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
      >
        Press Me
      </button>

      {/* Counter Display */}
      <p style={counterStyle}>Button pressed: {count} times</p>

      {/* Clear Count Button */}
      <button 
        style={buttonStyle}
        onClick={clearCount}
        onMouseOver={e => e.target.style.backgroundColor = '#d9534f'}
        onMouseOut={e => e.target.style.backgroundColor = '#f44336'}
      >
        Clear Count
      </button>
    </div>
  );
}

export default App;
