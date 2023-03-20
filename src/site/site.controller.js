const res = require("express/lib/response");
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./user.service");

module.exports = {
  getUsers: async (_, args, ctx) => {
    try {
      const users = await getUsers();
      return res.json({
        data: users,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  getSingleUser: async (_, args, ctx, info) => {
    try {
      const { userId } = req.params;
      const user = await getSingleUser(userId);
      return res.json({
        data: user,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  createUser: async (req, res) => {
    try {
      const User = req.body;
      const user = await createUser(User);
      return res.json({
        data: user,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await updateUser(userId, req.body);
      return res.json({
        data: user,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await deleteUser(userId);
      return res.json({
        data: user,
      });
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR.code).json({
        message: INTERNAL_SERVER_ERROR.message,
      });
    }
  },
};
