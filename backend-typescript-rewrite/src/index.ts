// Dependency
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// Middlewares
//import { authenticateToken } from "./middleware/authenticateTokenMiddleware.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import addItemsRoutes from "./routes/addItemsRoutes.js";
import cardsrootRoutes from "./routes/cardSectionRoutes.js";
import imgHandlerRoutes from "./routes/imgHandlerRoutes.js";

// Database
import configDB from "./config/dbConfig.js";

// Config
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

// Using routes from all file
app.use("/auth", authRoutes);
app.use("/user", userInfoRoutes);
app.use(addItemsRoutes);
app.use(cardsrootRoutes);
app.use(imgHandlerRoutes);

// Protected route example, this is some piece of sh..
//app.get("/dashboard", authenticateToken, (req, res) => {
//  res.status(200).send("Welcome to the dashboard, " + req.user.userId);
//});

// Database Connect
configDB();

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
