const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
const path = require("path");

const IMAGES_DIR = path.resolve(__dirname, "../assets/profile_pictures");
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

router.get("/profileimg", async (req, res) => {
  try {
    //take the query
    const { imgName } = req.query;

    //check is there any imgName?
    if (!imgName) {
      return res.status(400).send("Image name required");
    }

    //get the basename of the file to prevent path traversal
    const baseFileName = path.basename(imgName);

    //check file extention
    const ext = path.extname(baseFileName).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return res.status(400).send("Invalid file type")
    }

    //build safe path
    const imgPath = path.join(IMAGES_DIR, baseFileName);
    
    // Send file with error handling that doesn't expose paths
    res.sendFile(imgPath, (err) => {
      if (err) {
        res.status(404).send('Image not found');
      }
    });

  } catch (e) {
    res.status(404).send("Image not found");
  }
});

module.exports = router;
