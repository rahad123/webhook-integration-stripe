const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("./post.service");

module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await getPosts();
      return res.json({
        data: posts,
      });
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSinglePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await getSinglePost(id);
      return res.json({
        data: post,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  createPost: async (req, res) => {
    try {
      const postInput = req.body;
      const post = await createPost(postInput);
      return res.json({
        data: post,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await updatePost(id, req.body);
      return res.json({
        data: post,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await deletePost(id);
      if (!post) return false;
      return res.json({
        data: true,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
