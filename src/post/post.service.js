const Post = require("./post.model");
module.exports = {
  getPosts: async () => {
    return Post.find({});
  },

  getSinglePost: async (id) => {
    return Post.findById(id);
  },

  createPost: async (Post) => {
    return Post.create(Post);
  },

  updatePost: async (id, ...args) => {
    return Post.findByIdAndUpdate(id, { args });
  },

  deletePost: async (id) => {
    return Post.findOneAndDelete({ id });
  },
};
