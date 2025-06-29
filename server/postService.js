// server/services/postService.js
const Post = require('./models/Post');


const createPost = async (data) => {
  return await Post.create(data);
};

const getPosts = async () => {
  return await Post.find();
};

const getPostById = async (id) => {
  return await Post.findById(id);
};

const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true });
};

const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
