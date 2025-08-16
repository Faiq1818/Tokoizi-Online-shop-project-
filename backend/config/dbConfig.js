const mongoose = require("mongoose");
const uri = process.env.MONGO_URI_DEV;
//import mongoose from 'mongoose';

async function connectDB() {
  try {
    mongoose.connect(uri, {
      dbName: "TokoiziDB",
    });
    console.log("Connection to Mongodb Successful");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
