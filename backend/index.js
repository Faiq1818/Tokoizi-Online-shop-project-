const express = require('express');
const mongoose = require('mongoose');
const port = 3000
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/dbTokoizi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connection to Mongodb Successful"))
  .catch((err) => console.error("Connection to Mongodb Error:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
