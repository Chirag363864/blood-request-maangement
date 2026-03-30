const Donation = require("../models/Donation");
const Request = require("../models/Request");

exports.createRequest = async (req, res) => {
  try {
    const { bloodGroup, quantity, urgency, location } = req.body;
    const newRequest = new Request({
      bloodGroup,
      quantity,
      urgency,
      location,
      requester: req.user.id
    });
    await newRequest.save();
    res.json(newRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('requester', 'name email');
    res.json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.findBloodBanks = async (req, res) => {
  try {
    const { bloodGroup } = req.body;

    const data = await Donation.aggregate([
      { $match: { bloodGroup } },
      {
        $group: {
          _id: {
            bloodBank: "$bloodBank",
            city: "$city"
          },
          totalUnits: { $sum: "$quantity" }
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error" });
  }
};