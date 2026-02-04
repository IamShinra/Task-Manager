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
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,                   // enable TLS/SSL
  tlsAllowInvalidCertificates: false // optional: strict SSL
})
.then(() => console.log("MongoDB connected"))
.catch(err => {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
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
