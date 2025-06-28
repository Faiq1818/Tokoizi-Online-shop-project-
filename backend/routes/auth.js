// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = 'your_secret_key';

let users = [];

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);
  // Store user
  users.push({ username, password: hashedPassword });
  res.status(201).send('User created');
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  // Generate token
  const token = jwt.sign({ userId: user.username }, secretKey, { expiresIn: '1h' });
  res.cookie('authcookie',token,{maxAge:900000,httpOnly:true}) 

  res.status(200).send({ token });
});

module.exports = router;
