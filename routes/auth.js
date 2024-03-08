const express = require("express");
const { registerCtrl, loginCtrl, currentUserCtrl } = require("../controller/authCtrl");
const authMiddleware = require("../middleware/authCheck");
const router = express.Router();

router.post("/register", registerCtrl)
    .post("/", loginCtrl)
    .get("/", authMiddleware, currentUserCtrl)

module.exports = router;