import mongoose from "mongoose";

const orderStatusEnum = [
  "CREATED",
  "PROCESSING",
  "SHIPPED",
  "DELIVERED",
  "CANCELLED",
];

const Order_schema = mongoose.Schema({
  products: [{
    type: mongoose.Schema.ObjectId,
    ref: "products",
  }],
  total: {
    type: Number,
  },
  status: {
    type: String,
    enum: orderStatusEnum,
    default: "CREATED",
  },
});
const Order_Schema = mongoose.model("Order", Order_schema);
export default Order_Schema;
