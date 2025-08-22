import express from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = express.Router();
const secretKey = process.env.SECRET_KEY;

import * as authController from '../controllers/authController.js'

// Signup route
router.post("/signup", authController.signUp)

// Login route
router.post("/login", authController.login)

router.get("/verify", (req, res) => {
  const token = req.cookies.authcookie;
  if (!token) return res.status(401).json({ loggedIn: false });

  try {
    const user = jwt.verify(token, secretKey);
    res.json({ loggedIn: true, user });
  } catch (e) {
    res.status(401).json({ loggedIn: false });
  }
});

router.get("/deletecookie", function (req, res) {
  res.clearCookie("authcookie");
  console.log("Cookie cleared");
});

export default router;
