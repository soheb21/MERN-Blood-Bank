const express = require("express");
const authMiddleware = require("../middleware/authCheck");
const { createInventory, getBloodRecords, getDonersbyOrganisation, getHospitalssbyOrganisation, getOrganisationByDoner, getInandOutBloodRecords, getOrganisationByHospital, } = require("../controller/inventoryCtrl");
const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventory)
    .get("/", authMiddleware, getBloodRecords)
    .get("/doner", authMiddleware, getDonersbyOrganisation)
    .get("/hospital", authMiddleware, getHospitalssbyOrganisation)
    .get("/org", authMiddleware, getOrganisationByDoner)
    .post("/inandOut", authMiddleware, getInandOutBloodRecords)
    .get("/org-hospital", authMiddleware, getOrganisationByHospital)

module.exports = router;