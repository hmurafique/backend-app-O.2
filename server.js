const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample endpoint
app.get("/", (req, res) => {
  res.send("High-Level Backend is running! 🚀");
});

// Example endpoint for testing
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

