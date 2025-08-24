import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  alamat: { type: String, required: true },
  profile: { type: Number, required: true },
});

export default mongoose.model("users", userschema);
