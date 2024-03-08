const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ["doner", "admin", "organisation", "hospital"]
    },
    name: {
        type: String,
        required: () => {
            if (this.role === "doner" || this.role === "admin") {
                return true;
            }
            return false;
        }
    },
    organisationName: {
        type: String,
        required: () => {
            if (this.role === "organisation") {
                return true;
            }
            return false;
        }
    },
    hospitalName: {
        type: String,
        required: () => {
            if (this.role === "hospital") {
                return true;
            }
            return false;
        }
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "address is required"]
    },
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);