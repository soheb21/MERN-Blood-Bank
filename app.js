require("dotenv").config();
const express = require("express");
const { connectDB } = require("./db/database");
const app = express();
const cors = require("cors")
const path = require("path")



//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoute"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//Database
connectDB();

//Static build file
app.use(express.static(path.join(__dirname, "./client/dist")))
//static route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"))
})
const port = process.env.PORT;
app.listen(port, () => console.log(`server is running at port no ${port}`.bgYellow))