import express from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
import User from "../models/userModel.js";

// Change username in user account
export const changeUsername = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const token = req.cookies["authcookie"];
    if (!token) return res.status(401).json({ loggedIn: false });

    const user = jwt.verify(token, secretKey) as JwtPayload; //Verify the token using secretkey
    const email = user["userId"];

    console.log(email);
    let doc = await User.findOne({ email: email });

    if (!doc) return res.status(404).json({ message: "User not found" });

    doc.username = "konz";
    await doc.save();

    console.log(doc.username);

    return res.status(200).json({ success: true, username: doc.username });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ e, error: "Internal server error" });
  }
};
