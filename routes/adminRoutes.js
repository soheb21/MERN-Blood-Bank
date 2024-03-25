const express = require("express");
const { getDonerListbyAdmin, gethospitalListbyAdmin, getorgListbyAdmin, deleteOrgbyAdmin, deleteDonerbyAdmin, deleteHospitalbyAdmin } = require("../controller/adminCtrls");
const router = express.Router();

router.get("/admin-donerlist", getDonerListbyAdmin)
    .get("/admin-hospitallist", gethospitalListbyAdmin)
    .get("/admin-orglist", getorgListbyAdmin)
    .delete("/admin-org/:id", deleteOrgbyAdmin)
    .delete("/admin-doner/:id", deleteDonerbyAdmin)
    .delete("/admin-hospital/:id", deleteHospitalbyAdmin)

module.exports = router;