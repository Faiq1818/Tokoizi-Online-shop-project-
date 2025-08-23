import express from "express";
import "dotenv/config";
const router = express.Router();

import * as authController from "../controllers/authController.js";

// Router
router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.get("/verify", authController.verify);

// Debug
router.get("/deletecookie", function (res: express.Response) {
  res.clearCookie("authcookie");
  console.log("Cookie cleared");
});

export default router;
