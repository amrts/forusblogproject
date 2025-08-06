import React, { useEffect, useState } from 'react';

const PostList = ({ user }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts(); // refresh list
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h3>All Posts</h3>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid gray', margin: '10px 0', padding: '10px' }}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <p><i>By: {post.author?.username}</i></p>
          {post.author?._id === user._id && (
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
