import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique:true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    products: [
      {

      type: mongoose.Schema.ObjectId,
      ref: "products",
      }
    ],
    cart_item: [{
      type: mongoose.Schema.ObjectId,
      ref: "products",
    }],
    order: [{
      type: mongoose.Schema.ObjectId,
      ref: "Order",
    }],
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User_Schema", User);

export default UserSchema;
