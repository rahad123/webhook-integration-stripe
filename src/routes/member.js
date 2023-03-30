const {
  authMiddleware,
  authPublicMiddleware,
} = require("../../middlewares/auth.middleware");
const { Router, json } = require("express");
const router = Router();

const { addMember } = require("../members/members.controller");

// members
router.post("member", addMember);
