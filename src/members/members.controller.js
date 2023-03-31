const { inviteMember, getMembers } = require("./members.service");

module.exports = {
  members: async (req, res) => {
    try {
      const member = await getMembers();
      return res.json({
        data: member,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
  inviteMember: async (req, res) => {
    try {
      const memberInput = req.body;
      const member = await inviteMember(memberInput);
      return res.json({
        data: member,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
