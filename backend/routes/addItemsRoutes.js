const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;


router.post('/additems', async (req, res) => {
  const { itemName, price, description } = req.body;

  const token = req.cookies.authcookie;
  try {
    const user = jwt.verify(token, secretKey);
    UserId: user.userId;
    

    res.json({ UserId: user.userId, itemName, price, description });
  } catch (e) {
    res.status(401).send('Error when additems');
  }
});

module.exports = router;
