// Dependencies
import express from 'express';
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Routes and Middleware
import { authenticateToken } from './middleware/authenticateToken.js';
import authRoutes from './routes/auth.js';
import addItemsRoutes from './routes/addItemsRoutes.js';
const cardsrootRoutes = require("./routes/cardSection-root");
const imgHandler = require("./routes/imgHandler");
const user = require("./routes/user");
const sendItemsData = require("./controllers/sendItems.controllers");

// Config
const app = express();
const configDB = require("./config/dbConfig");
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
