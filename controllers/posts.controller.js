const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  res.status(200).json(post);
  //   console.log(req.params);
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);

  //console.log(req.body);
  //   res.send("Post Created");
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);

  //logic
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);

  //logic
  if (!post) {
    return res.status(404).json({ msg: "Post deleted" });
  }
  await Post.findByIdAndDelete(postId);
  res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
