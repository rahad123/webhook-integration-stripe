const {
  addMember
} = require("./members.service");

module.exports = {
  addMember: async (req, res) => {
    try {
      const member = await addMember();
      return res.json({
        data: member,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
