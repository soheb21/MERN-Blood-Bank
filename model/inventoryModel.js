const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, "inventory type require"],
        enum: ["in", "out"]
    },
    bloodGroup: {
        type: String,
        required: [true, "blood group is require"],
        enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity is require"],

    },
    email: {
        type: String,
        required: [true, "Donar Email is Required"],
    },
    organisaion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "organisation is require"],
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        // required: function () {
        //     return this.inventoryType === "out";
        // },
    },
    doner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }

}, { timestamps: true });

module.exports = mongoose.model("Inventory", inventorySchema);