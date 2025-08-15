const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
const path = require("path");

router.get("/imghandler", async (req, res) => {
  const { imgName } = req.query;
  const imgPath = path.resolve(__dirname, "../", imgName);
  try {
    res.sendFile(imgPath);
  } catch (e) {
    res.status(401).send("Error when additems");
  }
});

module.exports = router;
