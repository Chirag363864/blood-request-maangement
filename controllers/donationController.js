const Donation = require("../models/Donation");

// 🔴 CREATE DONATION
exports.createDonation = async (req, res) => {
  try {
    console.log("Incoming Data:", req.body); // debug

    const { bloodGroup, quantity } = req.body;

    // ✅ Basic validation
    if (!bloodGroup || !quantity) {
      return res.status(400).json({ msg: "All fields required" });
    }

    // ✅ Create donation (NO user for now)
    const donation = await Donation.create({
  bloodGroup: req.body.bloodGroup,
  quantity: Number(req.body.quantity),
  city: req.body.city,
  bloodBank: req.body.bloodBank   // ✅
});

    res.status(201).json({
      msg: "Donation added successfully",
      donation
    });

  } catch (err) {
    console.error("Donation Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// 🔵 GET ALL DONATIONS
exports.getDonations = async (req, res) => {
  try {
    const result = await Donation.aggregate([
      {
        $group: {
          _id: "$bloodGroup",          // ✅ CORRECT FIELD
          totalQuantity: { $sum: "$quantity" }
        }
      }
    ]);

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};