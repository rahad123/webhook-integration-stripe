const Member = require("./members.model");

module.exports = {
  createUser: async (member) => {
    return Member.create(member);
  },
};
