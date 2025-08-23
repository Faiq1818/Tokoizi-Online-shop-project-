import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const imgHandler = async (req: express.Request, res: express.Response) => {
  const imgName = req.query["imgName"] as string;

  if (!imgName || Array.isArray(imgName) || typeof imgName === "object") {
    return res.status(400).send("Invalid image name parameter");
  }

  const imgPath = path.resolve(__dirname, "../", imgName);
  try {
    res.sendFile(imgPath);
  } catch (e) {
    res.status(401).send("Error when additems");
  }
}
