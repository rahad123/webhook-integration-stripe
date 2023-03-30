const res = require("express/lib/response");
const {
  getSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
} = require("./site.service");
const logger = require("../utils/logger");

module.exports = {
  getSites: async (req, res) => {
    try {
      const sites = await getSites();
      return res.json({
        data: sites,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSingleSite: async (req, res) => {
    try {
      const { siteId } = req.params;
      const site = await getSingleSite(siteId);
      return res.json({
        data: site,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  createSite: async (req, res) => {
    try {
      const siteInput = req.body;
      const site = await createSite(siteInput);
      return res.json({
        data: site,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateSite: async (req, res) => {
    try {
      const { id: siteId } = req.params;
      const site = await updateSite(siteId, req.body);
      return res.json({
        data: site,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteSite: async (req, res) => {
    try {
      const { id: siteId } = req.params;
      const site = await deleteSite(siteId);
      return res.json({
        data: site,
      });
    } catch (err) {
      logger.error(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
