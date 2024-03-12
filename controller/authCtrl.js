const userModel = require("../model/userModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registerCtrl = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(201).json({ success: false, mssg: "user already registered" })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const doc = await userModel.create({ ...req.body, password: hashPassword });
        res.status(201).json({ success: true, mssg: "user registered successfully", doc })

    } catch (e) {
        console.log(`Register error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to register",
            e
        })
    }
}

const loginCtrl = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const doc = await userModel.findOne({ email });
        if (!doc) {
            return res.status(404).json({ success: false, mssg: "user not registered" })
        }
        //check role
        if (doc.role !== role) {
            return res.status(500).json({
                success: false,
                message: "role dosent match",
            });
        }

        const isMatch = await bcrypt.compare(password, doc.password)
        if (!isMatch) {
            return res.status(403).json({ success: false, mssg: "password is wrong" })
        }
        const token = jwt.sign({ userID: doc._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        res.status(201).json({ success: true, mssg: "user login successfully", token, doc })

    } catch (e) {
        console.log(`login error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to login",
            e
        })
    }
}

const currentUserCtrl = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userID });

        res.status(201).json({ success: true, mssg: "user fetch successfully", user })

    } catch (e) {
        console.log(`testUserCtrl error ${e}`.bgRed.white)
        res.status(500).json({
            success: "false",
            mssg: "Failed to fetch testUserCtrl",
            e
        })
    }

}

module.exports = { registerCtrl, loginCtrl, currentUserCtrl }