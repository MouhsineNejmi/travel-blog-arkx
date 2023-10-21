const express = require('express');
const router = express.Router();
const {
  getAllPostsController,
  getUserPostsController,
  addPostController,
  updatePostController,
  deletePostController,
} = require('../controllers/post.controller');

router.get('/posts', getAllPostsController);
router.get('/posts', getUserPostsController);
router.post('/post', addPostController);
router.put('/post/:id', updatePostController);
router.delete('/post/:id', deletePostController);

module.exports = router;
