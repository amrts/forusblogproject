import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ user }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, userId: user._id })
    });

    navigate('/');
  };

  return (
    <div>
      <h3>Create Post</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <br />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PostForm;
