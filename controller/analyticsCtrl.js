const mongoose = require("mongoose");
const inventoryModel = require("../model/inventoryModel");

const getBloodRecordsAnalytics = async (req, res) => {
    try {
        const bloodGrps = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
        const bloodAnalyticsData = [];
        const organisaion = new mongoose.Types.ObjectId(req.body.userID)
        // get single blood grp
        await Promise.allSettled(bloodGrps.map(async (bloodgrp) => {
            //get total of In qunatity
            const totalIn = await inventoryModel.aggregate([
                {
                    $match: {
                        organisaion,
                        inventoryType: "in",
                        bloodGroup: bloodgrp,

                    }
                },
                {
                    $group: {
                        _id: null,
                        total: { $sum: '$quantity' }
                    },

                },
            ]);
            //get total of out qunatity
            const totalOut = await inventoryModel.aggregate([
                {
                    $match: {
                        bloodGroup: bloodgrp,
                        inventoryType: "out",
                        organisaion
                    }
                },
                {
                    $group: {
                        _id: null,
                        total: { $sum: "$quantity" }
                    }

                }
            ]);

            //calculate
            const availableBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0)
            //pushing each element as a obeject in form of group
            bloodAnalyticsData.push({
                tIn: totalIn[0]?.total || 0,
                tout: totalOut[0]?.total || 0,
                availableBlood,
                bloodgrp
            })
        }))
        return res.status(201).json({
            success: true,
            mssg: "Fetching Analyics Data Sucessfully",
            bloodAnalyticsData
        })

    } catch (e) {
        console.log(`Analyics error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to Fetch Analyics Data",
            e
        })
    }
}

module.exports = { getBloodRecordsAnalytics }