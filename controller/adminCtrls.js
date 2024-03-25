const userModel = require("../model/userModel")

const getDonerListbyAdmin = async (req, res) => {
    try {

        const donerList = await userModel.find({ role: "doner" })
        res.status(201).json({
            success: true,
            mssg: "Fetching Doner-List successfully",
            donerList
        })

    } catch (e) {
        console.log(`Doner-List Records error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch Doner-List Records",
            e
        })
    }
}

const gethospitalListbyAdmin = async (req, res) => {
    try {

        const hospitalList = await userModel.find({ role: "hospital" })
        res.status(201).json({
            success: true,
            mssg: "Fetching hospital-List successfully",
            hospitalList
        })

    } catch (e) {
        console.log(`hospital-List Records error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch hospital-List Records",
            e
        })
    }
}
const getorgListbyAdmin = async (req, res) => {
    try {

        const orgList = await userModel.find({ role: "organisation" })
        res.status(201).json({
            success: true,
            mssg: "Fetching org-List successfully",
            orgList
        })

    } catch (e) {
        console.log(`org-List Records error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch org-List Records",
            e
        })
    }
}

const deleteDonerbyAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            mssg: "doner deleted successfully",
            deletedID: user.id
        })


    } catch (e) {
        console.log(`delete doner Record error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to Delete doner ",
            e
        })
    }
}
const deleteOrgbyAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            mssg: "org deleted successfully",
            deletedID: user.id
        })


    } catch (e) {
        console.log(`delete org Record error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to Delete org ",
            e
        })
    }
}
const deleteHospitalbyAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            mssg: "hospital deleted successfully",
            deletedID: user.id
        })


    } catch (e) {
        console.log(`delete hospital Record error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to Delete hospital ",
            e
        })
    }
}
module.exports = {
    getDonerListbyAdmin,
    gethospitalListbyAdmin,
    getorgListbyAdmin,
    deleteDonerbyAdmin,
    deleteHospitalbyAdmin,
    deleteOrgbyAdmin

}