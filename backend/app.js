const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

/* Middleware */
app.use(express.json());
app.use(cors({
  origin: "https://task-manager-1-aoss.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/* MongoDB */
mongoose.connect(process.env.MONGODB_URL, err => {
  if (err) throw err;
  console.log("MongoDB connected...");
});

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

/* Port */
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
