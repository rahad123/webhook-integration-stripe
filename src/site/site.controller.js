const res = require("express/lib/response");
const {
  getSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
} = require("./site.service");

module.exports = {
  getSites: async (_, args, ctx) => {
    try {
      const users = await getSites();
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
      const user = await getSingleSite(userId);
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
      const user = await createSite(User);
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
      const user = await updateSite(userId, req.body);
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
      const user = await deleteSite(userId);
      return res.json({
        data: user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
