const express = require('express');
const router = express.Router();
const postcontroller = require('../controllers/postcontroller');

//CRUD routes for posts
router.post('/', postcontroller.createPost);
router.get('/', postcontroller.getPosts);
router.get('/:id', postcontroller.getPostById);
router.put('/:id', postcontroller.updatePost);
router.delete('/:id', postcontroller.deletePost);

module.exports = router;