const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const port = 3000
const app = express();
const uri = "mongodb+srv://ghozyerlanggafaiq:TlxeHdKsicBGpWIr@faiqdb.ffsw00w.mongodb.net/?retryWrites=true&w=majority&appName=FaiqDB";

const authenticateToken = require('./middleware/authenticateToken');
const authRoutes = require('./routes/auth');
const sendItemsData = require('./controllers/sendItems.controllers');

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/controller', sendItemsData);

// Protected route example
app.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).send('Welcome to the dashboard, ' + req.user.userId);
});

// Database Connect
mongoose.connect(uri, {
  dbName: 'TokoiziDB'
})
  .then(() => console.log("Connection to Mongodb Successful"))
  .catch((err) => console.error("Connection to Mongodb Error:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
