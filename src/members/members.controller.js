

module.exports = {
  addMember: async (req, res) => {
    try {
      const users = await getUsers();
      return res.json({
        data: users,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};
