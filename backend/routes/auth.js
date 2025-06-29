// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = 'your_secret_key';

const User = require('../models/user');

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Cek apakah username sudah ada
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send('Username already taken');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 8);

  // Simpan user ke database
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  res.status(201).send('User created');
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ userId: user.email }, secretKey, { expiresIn: '1h' });
  res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });

  res.status(200).send({ token });
});

module.exports = router;
