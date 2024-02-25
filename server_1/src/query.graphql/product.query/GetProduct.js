import Product_Detail from "../../models/ProductSchema.js";

export const GetProduct = async (_, args) => {
  const { id } = args;
  try {
    const Product_Find = await Product_Detail.findById(id);
    if (Product_Find) {
      return Product_Find;
    } else {
      throw new Error("product is not available");
    }
  } catch {
    console.log(error);
    throw new Error(error);
  }
};
