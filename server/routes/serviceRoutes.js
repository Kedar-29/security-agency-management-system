const express = require("express");
const router = express.Router();
const ServiceRequest = require("../models/ServiceRequest");

// GET all service requests
router.get("/view", async (req, res) => {
  try {
    const requests = await ServiceRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service requests", error: error.message });
  }
});

// POST new service request
router.post("/send", async (req, res) => {
  try {
    console.log("📥 Received Data:", req.body);
    const newRequest = new ServiceRequest(req.body);
    await newRequest.save();
    res.status(201).json({ message: "✅ Service request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting service request", error: error.message });
  }
});

// PATCH to update service request status
router.patch("/update-status/:id", async (req, res) => {
  try {
    const updatedRequest = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ message: "✅ Status updated successfully", updatedRequest });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
});

// PATCH to finalize deal
router.patch("/finalize-deal", async (req, res) => {
  try {
    const updatedRequest = await ServiceRequest.findOneAndUpdate(
      { email: req.body.email },
      { finalizedDeal: true },
      { new: true }
    );
    res.json({ message: "✅ Deal finalized successfully!", updatedRequest });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// GET finalized deals
router.get("/finalized", async (req, res) => {
  try {
    const finalizedRequests = await ServiceRequest.find({ finalizedDeal: true });
    res.json(finalizedRequests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching finalized deals", error: error.message });
  }
});

module.exports = router;
