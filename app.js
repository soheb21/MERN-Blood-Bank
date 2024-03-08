require("dotenv").config();
const express = require("express");
const { connectDB } = require("./db/database");
const app = express();


//middleware
app.use(express.json());

//routes
app.use("/api/v1/auth", require("./routes/auth"))

//Database
connectDB();

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running at port no ${port}`.bgYellow))