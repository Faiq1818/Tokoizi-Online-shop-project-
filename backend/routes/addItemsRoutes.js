import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import "dotenv/config";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const secretKey = process.env.SECRET_KEY;

import Items from "../models/itemModel.js";

router.post("/additems", upload.array("images", 4), async (req, res) => {
  const { itemName, price, description } = req.body;
  const gambar = req.files;

  const token = req.cookies.authcookie;
  try {
    const user = jwt.verify(token, secretKey);
    const imagePaths = gambar.map((file) => file.path);
    const email = user.userId;

    const newItem = new Items({
      itemName,
      email,
      price,
      description,
      images: imagePaths,
    });

    await newItem.save();

    res.status(201).send("add items success");
  } catch (e) {
    res.status(401).send("Error when additems");
  }
});

export default router;
