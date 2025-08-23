import express from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
import Items from "../models/itemModel.js";

export const sendItems = async (req: express.Request, res: express.Response) => {
  const { itemName, price, description } = req.body;
  const gambar = req.files as Express.Multer.File[];

  const token = req.cookies['authcookie'];
  try {
    const user = jwt.verify(token, secretKey) as JwtPayload;
    const imagePaths = gambar.map((file) => file.path);
    const email = user['userId'];

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
};

