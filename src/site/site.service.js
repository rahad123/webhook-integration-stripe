const Site = require("./site.model");
module.exports = {
  getSites: async () => {
    return Site.find({});
  },

  getSingleSite: async (id) => {
    return Site.findById(id);
  },

  createSite: async (Site) => {
    return Site.create(Site);
  },

  updateSite: async (id, ...args) => {
    return Site.findByIdAndUpdate(id, { args });
  },

  deleteSite: async (id) => {
    return Site.findOneAndDelete({ id });
  },
};
