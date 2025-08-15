// Dependencies
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Routes and Middleware
const authenticateToken = require("./middleware/authenticateToken");
const authRoutes = require("./routes/auth");
const addItemsRoutes = require("./routes/addItemsRoutes");
const cardsrootRoutes = require("./routes/cardSection-root");
const imgHandler = require("./routes/imgHandler");
const user = require("./routes/user");
const sendItemsData = require("./controllers/sendItems.controllers");

// Config
const port = 3000;
const uri = process.env.MONGO_URI_DEV;

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", user);
app.use("/controller", sendItemsData);
app.use(addItemsRoutes);
app.use(cardsrootRoutes);
app.use(imgHandler);

// Protected route example
app.get("/dashboard", authenticateToken, (req, res) => {
  res.status(200).send("Welcome to the dashboard, " + req.user.userId);
});

console.log("MONGO_URI:", uri);
// Database Connect
async function connectDB() {
  try {
    mongoose.connect(uri, {
      dbName: "TokoiziDB",
    });
    console.log("Connection to Mongodb Successful");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
}
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
