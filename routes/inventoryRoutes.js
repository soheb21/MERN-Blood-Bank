const express = require("express");
const authMiddleware = require("../middleware/authCheck");
const { createInventory, getBloodRecords, } = require("../controller/inventoryCtrl");
const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventory)
    .get("/", authMiddleware, getBloodRecords)

module.exports = router;