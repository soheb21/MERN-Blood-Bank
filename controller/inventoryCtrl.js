const mongoose = require("mongoose");
const inventoryModel = require("../model/inventoryModel");
const userModel = require("../model/userModel");

const createInventory = async (req, res) => {
    try {
        const { email, quantity, bloodGroup, userID } = req.body;
        //validation
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User Not Found");
        }
        // if (inventoryType === "in" && user.role !== "doner") {
        //     throw new Error("Not Donar Account");
        // }
        // if (inventoryType === "out" && user.role !== "hospital") {
        //     throw new Error("Not Hospital Account");
        // }

        if (req.body.inventoryType === "out") {
            const requestBloodGrp = bloodGroup;
            const requestQuantity = quantity;
            const organisaion = new mongoose.Types.ObjectId(userID)
            //calculate Blood Quantity
            const totalInofRequestBlood = await inventoryModel.aggregate([
                {
                    $match: {
                        organisaion,
                        inventoryType: 'in',
                        bloodGroup: requestBloodGrp
                    }
                },
                {
                    $group: {
                        _id: '$bloodGroup',
                        total: { $sum: '$quantity' }
                    }
                }
            ])
            // console.log("total in", totalInofRequestBlood)
            const totalIn = totalInofRequestBlood[0]?.total || 0;

            const totalOutofRequestBloodGroup = await inventoryModel.aggregate([
                {
                    $match: {
                        organisaion,
                        inventoryType: 'out',
                        bloodGroup: requestBloodGrp
                    }
                },
                {
                    $group: {
                        _id: '$bloodGroup',
                        total: { $sum: '$quantity' }
                    }
                }
            ])


            const totalOut = totalOutofRequestBloodGroup[0]?.total || 0;
            // in & Out Calc
            const availableQuanityOfBloodGroup = totalIn - totalOut;
            // quantity validation
            if (availableQuanityOfBloodGroup < requestQuantity) {
                return res.status(500).send({
                    success: false,
                    mssg: `Only ${availableQuanityOfBloodGroup}ML of ${requestBloodGrp.toUpperCase()} is available`,
                });
            }
            req.body.hospital = user?._id;

        }
        else {
            req.body.doner = user?._id;
        }
        const inventory = await inventoryModel.create(req.body);
        res.status(201).json({
            success: true,
            mssg: "Craete a new Inventory",
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
const getBloodRecords = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const bloodRecord = await inventoryModel.find({ organisaion: req.body.userID }).populate("doner").populate("hospital").sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit)
        const totalItems = await inventoryModel.find({ organisaion: req.body.userID }).countDocuments();
        res.status(201).json({
            success: true,
            mssg: "Fetch Blood Record successfully",
            totalItems,
            bloodRecord,


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
const getDonersbyOrganisation = async (req, res) => {
    try {
        //Tarika -1
        // const donerRecords = await inventoryModel.find({ organisaion: req.body.userID }).populate("doner").sort({ createdAt: -1 });
        // let doners = [];
        // donerRecords.map((item) => doners.push(item.doner))

        //Tarika -2  find donars

        const donorId = await inventoryModel.distinct("doner", { organisaion: req.body.userID });
        const doners = await userModel.find({ _id: { $in: donorId } })
        res.status(201).json({
            success: true,
            mssg: "Fetch doner Record successfully",
            doners
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

const getHospitalssbyOrganisation = async (req, res) => {
    try {

        const hospitalId = await inventoryModel.distinct("hospital", { organisaion: req.body.userID });
        const hospitals = await userModel.find({ _id: { $in: hospitalId } })
        res.status(201).json({
            success: true,
            mssg: "Fetch Hospitals Record By Organisation successfully",
            hospitals
        })

    } catch (e) {
        console.log(`Hsopitals Records error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch Hospitals Records",
            e
        })
    }
}
const getOrganisationByDoner = async (req, res) => {
    try {

        const orgID = await inventoryModel.distinct("organisaion", { doner: req.body.userID });
        const organisation = await userModel.find({ _id: { $in: orgID } })
        res.status(201).json({
            success: true,
            mssg: "Fetch Organisation Record successfully",
            organisation
        })

    } catch (e) {
        console.log(`Organisation by doner error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch Organisation by doner",
            e
        })
    }
}
const getOrganisationByHospital = async (req, res) => {
    try {

        const orgID = await inventoryModel.distinct("organisaion", { hospital: req.body.userID });
        const organisation = await userModel.find({ _id: { $in: orgID } })
        res.status(201).json({
            success: true,
            mssg: "Fetch Organisation Record successfully",
            organisation
        })

    } catch (e) {
        console.log(`Organisation by doner error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch Organisation by doner",
            e
        })
    }
}
const getInandOutBloodRecords = async (req, res) => {
    try {
        console.log("fil", req.body.filter)
        const inandOut = await inventoryModel.find(req.body.filter).populate("doner").populate("hospital").populate("organisaion").sort({ createdAt: -1 });
        res.status(201).json({
            success: true,
            mssg: "Fetch Blood Records successfully",
            inandOut
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
module.exports = { createInventory, getBloodRecords, getDonersbyOrganisation, getHospitalssbyOrganisation, getOrganisationByDoner, getInandOutBloodRecords, getOrganisationByHospital };