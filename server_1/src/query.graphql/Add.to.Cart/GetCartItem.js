import UserSchema from "../../models/UserSchema.js";

export const GetCartItem = async (_, args,parent) => {
  const { id } = args;
  try {
    const user = await UserSchema.findById(id).populate("cart_item");
    const cartItems = user.cart_item;
    console.log(parent)
    return cartItems; 
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error", error);
  }
};


