require("dotenv").config();
const express = require("express");
const { connectDB } = require("./db/database");

const app = express();
const cors = require("cors")



//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

//Database
connectDB();

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running at port no ${port}`.bgYellow))