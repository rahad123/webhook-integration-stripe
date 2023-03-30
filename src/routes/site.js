const {
  authMiddleware,
  authPublicMiddleware,
} = require("../../middlewares/auth.middleware");
const { Router, json } = require("express");
const router = Router();

const {
  createSite,
  getSites,
  getSingleSite,
  updateSite,
  deleteSite,
} = require("../site/site.controller");

// Site
router.post("/site", createSite);
router.get("/site", getSites);
router.get("/site/:id", getSingleSite);
router.put("/site/:id", updateSite);
router.delete("/site/:id", deleteSite);

module.exports = router;
