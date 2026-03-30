const router = require("express").Router();
const { getDonations, createDonation } = require("../controllers/donationController");

router.get("/", getDonations);
router.post("/", createDonation);

module.exports = router;