import UserSchema from "../../models/UserSchema.js";

export const AddToCart = async (_, args) => {
  const { id, items } = args;
  try {
    const user = await UserSchema.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const cartItems = user.cart_item;
    for (let i = 0; i < items.length; i++) {
      cartItems.push(items[i]);
    }
    await user.save();
    return "Items added to the cart successfully";
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add items to the cart");
  }
};
