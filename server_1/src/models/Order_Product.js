import mongoose from "mongoose";

const Order_Products_Data = mongoose.Schema({
  product: [{
    type: mongoose.Schema.ObjectId,
    ref: "products",
  }],
  quantity: {
    type: Number,
  },
});

const Order_Schema_data = mongoose.model("Order_Product", Order_Products_Data);
export default Order_Schema_data;
