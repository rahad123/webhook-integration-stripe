const Site = require("./site.model");
module.exports = {
  getSites: async () => {
    return Site.find({});
  },

  getSingleSite: async (id) => {
    return Site.findById(id);
  },

  createSite: async (site) => {
    return Site.create(site);
  },

  updateSite: async (id, args) => {
    return Site.findOneAndUpdate({ _id: id }, args, { new: true });
  },

  deleteSite: async (id) => {
    return Site.findOneAndDelete({ _id: id });
  },
};
