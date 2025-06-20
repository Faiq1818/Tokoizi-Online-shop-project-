const express = require('express');
const mongoose = require('mongoose');
const port = 3000
const app = express();

const authenticateToken = require('./middleware/authenticateToken');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/auth', authRoutes);


// Protected route example
app.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).send('Welcome to the dashboard, ' + req.user.userId);
});

// Database Connect
mongoose.connect('mongodb://127.0.0.1:27017/dbTokoizi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connection to Mongodb Successful"))
  .catch((err) => console.error("Connection to Mongodb Error:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
