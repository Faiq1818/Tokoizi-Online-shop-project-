import express from "express";
const router = express.Router();

import * as userInfoController from "../controllers/userInfoController.js";
import * as userInfoChangeController from "../controllers/userInfoChangeController.js";

// Router
router.get("/profileimg", userInfoController.profileImage);
router.put("/change/username", userInfoChangeController.changeUsername);

export default router;
