// Dependency
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";


// Config
import configDB from "./config/dbConfig.js";
const app = express();
const port = 3000;



// Database Connect
configDB();

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
