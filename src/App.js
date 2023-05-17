import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as making an API call to authenticate the user
    console.log('Login submitted');
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form fields
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
