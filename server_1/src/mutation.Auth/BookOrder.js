import Order from "../models/Order.js";
import UserSchema from "../models/UserSchema.js";
import {
  publisher,
  subscriber,
} from "../../../Delievery_Server_2/redis-client/index.js";

export const BookOrder = async (_, args) => {
  try {
    const { id, data } = args;
    const user = await UserSchema.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    const Order_Data = await new Order({
      total: data.length,
    });
    for (let i = 0; i < data.length; i++) {
      Order_Data.products.push(data[i]);
    }
    await Order_Data.save();
    const order_id = Order_Data._id;
    const User_update = await user.order.push(order_id);
    const sending_Data = {
      array: data,
      user: user,
    };
    const stringifiedData = JSON.stringify(sending_Data);
    console.log(stringifiedData);
    publisher.publish("sending_to_delievery", stringifiedData);
    await user.save();
    console.log("hua");
    return "hogya";
  } catch (error) {
    console.log(error);
  }
};
