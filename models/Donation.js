const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  bloodGroup: String,
  quantity: Number,
  city: String,
  bloodBank: String   // 🔥 NEW FIELD
});

module.exports = mongoose.model("Donation", donationSchema);