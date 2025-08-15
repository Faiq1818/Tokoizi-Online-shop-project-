const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY;
const path = require('path');

const IMAGES_DIR = path.resolve(__dirname, '../uploads/images');
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

router.get('/profileimg', async (req, res) => {
  try {
    //take the query
    const { imgName } = req.query;
    
    //check is there any imgName?
    if(!imgName){
      return res.status(400).send('Image name required');
    }

    const imgPath = path.resolve(__dirname, '../', imgName);
    res.sendFile(imgPath);
  } catch (e) {
    res.status(401).send('Error when additems');
  }
});

module.exports = router;
