const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, trim: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
  bouncers: { type: Number, default: 0, min: 0 },
  guards: { type: Number, default: 0, min: 0 },
  housekeeping: { type: Number, default: 0, min: 0 },
  supervisors: { type: Number, default: 0, min: 0 },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  notes: { type: String, trim: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending", index: true },
  finalizedDeal: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema);
