const {
    authMiddleware,
    authPublicMiddleware,
  } = require("../../middlewares/auth.middleware");
  const { Router, json } = require("express");
  const router = Router();

  const {
    createPost,
    getPosts,
    getSinglePost,
    updatePost,
    deletePost,
  } = require("../post/post.controller");
  
  // Post
  router.post("/post", authPublicMiddleware, createPost);
  router.get("/post", authPublicMiddleware, json(), getPosts);
  router.get("/post/:id", authPublicMiddleware, json(), getSinglePost);
  router.put("/post/:id", authPublicMiddleware, json(), updatePost);
  router.delete("/post/:id", authPublicMiddleware, json(), deletePost);
  
  module.exports = router;