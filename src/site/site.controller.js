const res = require("express/lib/response");
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./user.service");

module.exports = {
  getSites: async (_, args, ctx) => {
    try {
      const users = await getUsers();
      return res.json({
        data: users,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSingleSite: async (_, args, ctx, info) => {
    try {
      const { userId } = req.params;
      const user = await getSingleUser(userId);
      return res.json({
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  createSite: async (req, res) => {
    try {
      const User = req.body;
      const user = await createUser(User);
      return res.json({
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateSite: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await updateUser(userId, req.body);
      return res.json({
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteSite: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await deleteUser(userId);
      return res.json({
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
