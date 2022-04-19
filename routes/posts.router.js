const { Router } = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getSinglePost,
} = require("../controllers/posts.controller");

const postRouter = Router();

postRouter.route("/").get(getAllPosts).post(createPost);

postRouter
  .route("/:postId")
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = {
  postRouter,
};
