const express = require("express");
const controller = express.Router();

controller.post("/sendItemsData", async (req, res) => {
  const { email, password } = req.body;

  const token = req.cookies.authcookie;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = jwt.verify(token, secretKey);
    res.json({ loggedIn: true, user });
  } catch (e) {
    res.status(401).json({ loggedIn: false });
  }

  res.status(200).send({ token });
});

module.exports = controller;
