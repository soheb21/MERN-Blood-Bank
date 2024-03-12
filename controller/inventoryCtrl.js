const inventoryModel = require("../model/inventoryModel");
const userModel = require("../model/userModel");

const createInventory = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        //validation
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User Not Found");
        }
        if (inventoryType === "in" && user.role !== "doner") {
            throw new Error("Not Donar Account");
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            throw new Error("Not Hospital Account");
        }
        const inventory = await inventoryModel.create(req.body);
        res.status(201).json({
            success: true,
            mssg: "Craete a new Inventory",
            inventory
        })




    } catch (e) {
        console.log(`Inventory error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to create Inventory",
            e
        })

    }
}
const getBloodRecords = async (req,res) => {
    try {
        const bloodRecord = await inventoryModel.find({ organisaion: req.body.userID }).populate("doner").populate("hospital")
        res.status(201).json({
            success: true,
            mssg: "Fetch Blood Record successfully",
            bloodRecord
        })

    } catch (e) {
        console.log(`Blood Records error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch Blood Records",
            e
        })
    }
}
module.exports = { createInventory, getBloodRecords };