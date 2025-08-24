import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGES_DIR = path.resolve(__dirname, "../assets/profile_pictures");
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

const secretKey = process.env.SECRET_KEY;
import User from "../models/userModel.js";

export const userName = async (
  req: express.Request,
  res: express.Response,
) => {
  const token = req.cookies["authcookie"];
  try {
    const decoded = jwt.verify(token, secretKey) as string;
    const user = await User.find(token.);

  res.json(user);


  } catch (e) {
  }

};

// get the profile image
export const profileImage = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    //take the query
    const { imgName } = req.query;

    //check is there any imgName?
    if (!imgName || typeof imgName !== "string") {
      return res.status(400).send("Image name required");
    }

    //get the basename of the file to prevent path traversal
    const baseFileName = path.basename(imgName);

    //check file extention
    const ext = path.extname(baseFileName).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return res.status(400).send("Invalid file type");
    }

    //build safe path
    const imgPath = path.join(IMAGES_DIR, baseFileName);

    // Send file with error handling that doesn't expose paths
    res.sendFile(imgPath, (err) => {
      if (err) {
        res.status(404).send("Image not found");
      }
    });
  } catch (e) {
    res.status(404).send("Image not found");
  }
};
