const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/clgProject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

module.exports = mongoose;
