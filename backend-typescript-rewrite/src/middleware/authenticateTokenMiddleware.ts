import jwt from "jsonwebtoken";
import express from "express";

const secretKey = process.env.SECRET_KEY;

export const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("Token required");

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).send("Invalid or expired token");
    req.user = user;
    next();
  });
};
