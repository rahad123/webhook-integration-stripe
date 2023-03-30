const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./user.service");
const logger = require("../utils/logger");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await getUsers();
      return res.json({
        data: users,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getSingleUser(id);
      return res.json({
        data: user,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
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
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await updateUser(id, req.body);
      return res.json({
        data: user,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await deleteUser(id);
      if (!user) return false;
      return res.json({
        data: true,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
