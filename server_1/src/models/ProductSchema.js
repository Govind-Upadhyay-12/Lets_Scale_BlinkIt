import mongoose from "mongoose";

const Product_schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "good product",
  },
  price: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  manufacturer: {
    type: String,
  },
  userId: [{
    type: mongoose.Schema.ObjectId,
    ref: "User_Schema",
  }],
});
const Product_Detail = mongoose.model("products", Product_schema);

export default Product_Detail;
