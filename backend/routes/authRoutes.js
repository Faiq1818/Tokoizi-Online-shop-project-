import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = express.Router();
const secretKey = process.env.SECRET_KEY;

import User from "../models/userModel.js";

// Signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Cek apakah username sudah ada
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Username already taken");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  // Simpan user ke database
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  res.status(201).send("User created");
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign({ userId: user.email }, secretKey, {
    expiresIn: "1h",
  });
  res.cookie("authcookie", token, {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  });

  res.status(200).send({ token });
});

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
