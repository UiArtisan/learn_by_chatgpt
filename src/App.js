import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("I'm pressed now");
  }

  function clearCount() {
    setCount(0);
    console.log("Count has been reset");
  }

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
      <h1 style={titleStyle}>Welcome to My App</h1>
      
      <button 
        style={buttonStyle}
        onClick={handleClick}
        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
      >
        Press Me
      </button>
      <p style={counterStyle}>Button pressed: {count} times</p>

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