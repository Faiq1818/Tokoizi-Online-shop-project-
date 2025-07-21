const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;


router.post('/additems', upload.array('images', 4), (req, res) => {
  const { itemName, price, description } = req.body;
  const gambar = req.files;

  const token = req.cookies.authcookie;
  try {
    const user = jwt.verify(token, secretKey);

    res.json({ UserId: user.userId, gambar: gambar[0], gambar2: gambar[3], itemName, price, description });
  } catch (e) {
    res.status(401).send('Error when additems');
  }
});

module.exports = router;
