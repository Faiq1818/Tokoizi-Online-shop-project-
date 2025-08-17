import mongoose from 'mongoose';

const itemsschema = new mongoose.Schema({
  itemName: { type: String, required: true },
  email: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
});

export default mongoose.model("items", itemsschema);
