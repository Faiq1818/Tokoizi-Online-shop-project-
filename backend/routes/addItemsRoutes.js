const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;

const Items =  require("../models/items");

router.post('/additems', upload.array('images', 4), async (req, res) => {
  const { itemName, price, description } = req.body;
  const gambar = req.files;

  const token = req.cookies.authcookie;
  try {
    const user = jwt.verify(token, secretKey);
    const imagePaths = gambar.map(file => file.path);
    const email = user.userId;

    const newItem = new Items({
      itemName,
      email,
      price,
      description,
      images: imagePaths
    });
    
    await newItem.save();

    res.status(201).send('add items success');
  } catch (e) {
    res.status(401).send('Error when additems');
  }
});

module.exports = router;
