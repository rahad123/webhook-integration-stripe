const { createUser } = require("./user.service");

module.exports = {
  createUser: async (req, res) => {
    const User = req.body;
    const user = await createUser(User);
    res.send(user);
  },
  getUsers: async (_, args, ctx) => {
    try {
    } catch (err) {
      logger.error(err);
      return errors.withApolloError("INTERNAL_SERVER_ERROR");
    }
  },
  getSingleUser: async (_, args, ctx, info) => {
    try {
    } catch (err) {
      logger.error(err);
      return errors.withApolloError("INTERNAL_SERVER_ERROR");
    }
  },
};
