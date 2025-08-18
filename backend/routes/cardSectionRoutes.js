import express from "express";
const router = express.Router();

import Items from "../models/itemModel.js";

router.get("/getcardsroot", async (req, res) => {
  const user = await Items.find();
  res.json(user);
});

export default router;
