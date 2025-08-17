// Dependencies
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes and Middleware
import { authenticateToken } from "./middleware/authenticateToken.js";
import authRoutes from "./routes/auth.js";
import addItemsRoutes from "./routes/addItemsRoutes.js";
import cardsrootRoutes from "./routes/cardSection-root.js";
import imgHandler from "./routes/imgHandler.js";
import user from "./routes/user.js";
import sendItemsData from "./controllers/sendItems.controllers.js";

// Config
import configDB from "./config/dbConfig.js";
const app = express();
const port = 3000;

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

// Database Connect
configDB();

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
