const express = require('express');
const router = express.Router();

const Items = require('../models/items');

router.get('/getcardsroot', async (req, res) => {
  const token = req.cookies.authcookie;
  const user = await Items.find();
  res.json(user);
});

module.exports = router;
