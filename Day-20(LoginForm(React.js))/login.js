import React, { useState } from 'react';
import './App.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
 

  return (
    <>
    <body style={{backgroundColor: 'gold' ,margin:'0' ,padding: '0'}}>
  <h1 style={{ textAlign: 'center' }}>Login Here</h1>
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }} >
          Login
        </button>
      </form>
    </div>
    </body>
    </>
  );
};
export default LoginForm;
