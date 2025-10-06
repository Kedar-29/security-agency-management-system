const express = require("express");
const Admin = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Admin Login Route (Without Hashing)
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            console.log("❌ Admin not found:", email);
            return res.status(404).json({ error: "Admin not found" });
        }

        console.log("🔑 Checking password for:", admin.email);
        if (password !== admin.password) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
