import express from "express";
import multer from "multer";
import "dotenv/config";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
import * as addItemsController from '../controllers/addItemsController.js';

router.post("/additems", upload.array("images", 4), addItemsController.sendItems)

export default router;
