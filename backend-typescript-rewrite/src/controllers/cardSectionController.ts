import express from "express";

import Items from "../models/itemModel.js";

export const cardsInfo = async (
  req: express.Request,
  res: express.Response,
) => {
  const user = await Items.find();
  res.json(user);
};
