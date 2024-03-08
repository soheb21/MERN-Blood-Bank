const userModel = require("../model/userModel");

const createInventory =async(req,res) => {
    try {
        const { email } = req.body;
        //validation
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User Not Found");
        }

    } catch (e) {
        console.log(`Inventory error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to create Inventory",
            e
        })

    }
}
module.exports={createInventory};