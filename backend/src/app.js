const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const healthRoutes = require("./routes/health.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

// Routes
app.use("/health", healthRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

module.exports = app; // ✅ IMPORTANT
