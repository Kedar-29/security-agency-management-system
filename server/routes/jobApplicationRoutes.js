const express = require("express");
const router = express.Router();
const JobApplication = require("../models/JobApplication");

// Get all job applications
router.get("/viewapplications", async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Submit a new job application
router.post("/apply", async (req, res) => {
  try {
    const newApplication = new JobApplication(req.body);
    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
});


// ✅ Update job application status
router.put("/updateapplication/:id", async (req, res) => {
  try {
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ error: "Application not found" });
    }

    res.json(updatedApplication);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
