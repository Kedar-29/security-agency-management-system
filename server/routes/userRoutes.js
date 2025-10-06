const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");

// @route   POST /api/users/signup
// @desc    Register a new user
router.post("/signup", async (req, res) => {
  try {
    const { fullName, whatsapp, dob, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ whatsapp });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    user = new User({
      fullName,
      whatsapp,
      dob,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
