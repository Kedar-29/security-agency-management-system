const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan"); // Logger middleware

// Load environment variables
dotenv.config();

// Import Routes
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing
app.use(morgan("dev")); // Logger for requests

// Check required environment variables
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not set in .env file");
  process.exit(1);
}

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};

// Initialize DB Connection
connectDB();

// Routes
app.use("/api/servicerequests", serviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobApplicationRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admin", adminRoutes); 

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("\n🛑 SIGINT received. Closing server...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("🔻 Server & DB connection closed.");
    process.exit(0);
  });
});

process.on("SIGTERM", async () => {
  console.log("\n🛑 SIGTERM received. Shutting down...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("🔻 Server & DB connection closed.");
    process.exit(0);
  });
});
