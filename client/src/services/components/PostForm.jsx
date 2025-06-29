// client/src/components/PostForm.jsx

import React, { useState } from 'react'; 
import api from "../api";

export default function PostForm() {
  const [post, setPost] = useState({ title: '', content: '' });

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/posts', post);
      alert('Post created!');
      setPost({ title: '', content: '' });
    } catch (err) {
      console.error(err);
      alert('Error creating post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create a New Post</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={post.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="content"
          placeholder="Enter content"
          value={post.content}
          onChange={handleChange}
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Post
        </button>
      </form>
    </div>
  );
}
