const Post = require('../models/post.model');

exports.getAllPostsController = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({ status: 200, data: posts });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};

exports.getUserPostsController = async (req, res) => {
  try {
    const user = await extractUserFromToken();
    const userPosts = await Post.find({ author: user._id });

    return res.status(200).json({ status: 200, data: userPosts });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};

exports.getPostByIdController = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ status: 404, message: 'Post not found!' });
    }

    return res.status(200).json({ status: 200, data: post });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};

exports.addPostController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, content } = req.body;
    const post = await Post.create({
      author: userId,
      title,
      content,
    });

    return res.status(201).json({ status: 201, data: post });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};

exports.updatePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const updateFields = {
      title,
      content,
    };
    const updatedPost = await Post.findByIdAndUpdate(postId, updateFields);

    if (!updatedPost) {
      return res.status(404).json({ status: 404, message: 'Post not found!' });
    }

    return res.status(200).json({ status: 200, data: updatedPost });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};

exports.deletePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletePost = await Post.findByIdAndDelete(postId);

    if (!deletePost) {
      return res.status(404).json({ status: 4040, message: 'Post not found!' });
    }

    return res
      .status(200)
      .json({ status: 200, message: 'Post deleted successfully!' });
  } catch (err) {
    return res.json({ message: err?.message });
  }
};
