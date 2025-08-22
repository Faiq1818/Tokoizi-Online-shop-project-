// Dependency
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

// Import routes
import authRoutes from "./routes/authRoutes.js";

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



// Database Connect
configDB();

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
