import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const showAlert = () => {
    alert(value);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={showAlert}>Show Alert</button>
    </div>
  );
}

export default App;
