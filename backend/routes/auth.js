// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = 'your_secret_key';

const User = require('../models/User');

// Signup route
router.post('/auth/signup', async (req, res) => {
  const { username, password } = req.body;

  // Cek apakah username sudah ada
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).send('Username already taken');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  // Simpan user ke database
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.status(201).send('User created');
});

// Login route
router.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.username }, secretKey, { expiresIn: '1h' });
  res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });

  res.status(200).send({ token });
});

module.exports = router;
