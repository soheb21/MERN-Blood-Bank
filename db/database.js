const mongoose = require("mongoose");
const colors = require("colors")

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database is running at ${mongoose.connection.host}`.bgGreen.white)
    } catch (e) {
        console.log(`Database Error ${e}`.bgRed.white);
    }
}