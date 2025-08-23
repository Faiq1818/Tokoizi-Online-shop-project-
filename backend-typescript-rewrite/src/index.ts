// Dependency
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import addItemsRoutes from "./routes/addItemsRoutes.js";
import cardsrootRoutes from "./routes/cardSectionRoutes.js";
import imgHandlerRoutes from "./routes/imgHandlerRoutes.js";

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


// Using routes from all file
app.use("/auth", authRoutes);
app.use("/user", userInfoRoutes);
app.use(addItemsRoutes);
app.use(cardsrootRoutes);
app.use(imgHandlerRoutes);

// Database Connect
configDB();

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
