const express = require("express");
const router = express.Router();

const {
  createRequest,
  getRequests,
  findBloodBanks
} = require("../controllers/requestController");

// create request
router.post("/", createRequest);

// get all requests
router.get("/", getRequests);

// 🔥 find blood banks
router.post("/find-blood", findBloodBanks);

module.exports = router;