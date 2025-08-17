import express from 'express';
import 'dotenv/config'
import path from 'path';

const router = express.Router();

router.get("/imghandler", async (req, res) => {
  const { imgName } = req.query;
  const imgPath = path.resolve(__dirname, "../", imgName);
  try {
    res.sendFile(imgPath);
  } catch (e) {
    res.status(401).send("Error when additems");
  }
});

export default router;
