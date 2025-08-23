import express from "express";
const router = express.Router();

import * as userInfoController from "../controllers/userInfoController.js";

// Router
router.get("/profileimg", userInfoController.profileImage)

export default router;
