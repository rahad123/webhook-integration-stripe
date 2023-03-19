const User = require("./user.model.js");
module.exports = {
  getUsers: async () => {
    await totalUser();
    return User.find({});
  },
  getSingleUser: async ({ id: _id }) => {
    return User.findById({ _id });
  },
  createUser: async (user) => {
    return User.create(user);
  },
};
