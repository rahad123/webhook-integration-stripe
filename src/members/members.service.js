const Member = require("./members.model");

module.exports = {
  inviteMember: async (member) => {
    return Member.create(member);
  },
  getMembers: async () => {
    return Member.find({});
  },
};
