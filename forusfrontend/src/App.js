import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/create">New Post</Link>
      </nav>

      <hr />

      {!user ? (
        <LoginForm setUser={setUser} />
      ) : (
        <>
          <h2>Welcome, {user.username}!</h2>
          <Routes>
            <Route path="/" element={<PostList user={user} />} />
            <Route path="/create" element={<PostForm user={user} />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
