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
    delivery_taken:{
        type:mongoose.Schema.ObjectId,
        ref:"User_Schema"

    },
    check_status:{
        type:Boolean,
        default:false
    }
  },
  { timestamps: true }
);

const UserSchema = mongoose.model("User_Schema", User);

export default UserSchema;
