import React, { useState } from 'react';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    });
    const data = await res.json();
    setUser(data);
  };

  return (
    <div>
      <h3>Login</h3>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
