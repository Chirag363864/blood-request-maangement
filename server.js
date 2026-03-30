const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// 🔥 THESE MUST MATCH EXACTLY
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/request", require("./routes/requestRoutes"));
app.use("/api/donation", require("./routes/donationRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));