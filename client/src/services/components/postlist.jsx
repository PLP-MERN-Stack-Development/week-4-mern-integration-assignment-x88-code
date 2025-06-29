import React, { useEffect, useState } from 'react';
import api from '../api';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          All Posts
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">No posts available.</p>
        ) : (
          posts.map(post => (
            <div key={post._id} className="bg-white p-5 mb-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
