const User = require("./user.model.js");
module.exports = {
  getUsers: async () => {
    return User.find({});
  },

  getSingleUser: async (id) => {
    return User.findById(id);
  },

  createUser: async (user) => {
    return User.create(user);
  },

  updateUser: async (id, ...args) => {
    return User.findByIdAndUpdate(id, { args });
  },

  deleteUser: async (id) => {
    return User.findOneAndDelete({ id });
  },
};
