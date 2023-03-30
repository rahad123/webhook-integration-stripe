const {
  authMiddleware,
  authPublicMiddleware,
} = require("../../middlewares/auth.middleware");
const { Router, json } = require("express");
const router = Router();

const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../user/user.controller");

// User
router.post("/user", authPublicMiddleware, createUser);
router.get("/user", authPublicMiddleware, json(), getUsers);
router.get("/user/:id", authPublicMiddleware, json(), getSingleUser);
router.put("/user/:id", authPublicMiddleware, json(), updateUser);
router.delete("/user/:id", authPublicMiddleware, json(), deleteUser);

module.exports = router;
