import express from "express";
const router = express.Router();

import * as cardSectionController from "../controllers/cardSectionController.js";

// Routers
router.get("/getcardsroot", cardSectionController.cardsInfo);

export default router;
