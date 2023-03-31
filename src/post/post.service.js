const Post = require("./post.model");
module.exports = {
  getPosts: async () => {
    return Post.find({});
  },

  getSinglePost: async (id) => {
    return Post.findById(id);
  },

  createPost: async (post) => {
    return Post.create(post);
  },

  updatePost: async (id, args) => {
    return Post.findOneAndUpdate({ _id: id }, args, { new: true });
  },

  deletePost: async (id) => {
    return Post.findOneAndDelete({ id });
  },
  isSlugExists: async (siteId, slug, id = null) => {
    return Post.exists({ siteId: siteId, slug: slug, _id: { $ne: id } });
  },
};
