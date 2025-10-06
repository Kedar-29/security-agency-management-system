const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  whatsapp: { type: String, required: true, unique: true }, 
  aadhar: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  designation: { 
    type: String, 
    required: true, 
    enum: ["Security Guard", "Supervisor", "Bouncer", "Housekeeping"] 
  },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  exArmy: { type: String, required: true, enum: ["Yes", "No"] },
  address: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Accepted", "Rejected"], 
    default: "Pending" 
  }, // NEW FIELD ADDED
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JobApplication", jobApplicationSchema);

