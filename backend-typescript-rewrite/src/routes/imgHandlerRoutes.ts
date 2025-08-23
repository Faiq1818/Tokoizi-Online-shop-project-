import express from "express";
const router = express.Router();

import * as imgHandlerController from "../controllers/imgHandlerController.js";

// Routers
router.get("/imghandler", imgHandlerController.imgHandler);

export default router;
