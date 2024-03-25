const express = require("express");
const authMiddleware = require("../middleware/authCheck");
const { getBloodRecordsAnalytics } = require("../controller/analyticsCtrl");
const router = express.Router();

router.get("/", authMiddleware, getBloodRecordsAnalytics)


module.exports = router;