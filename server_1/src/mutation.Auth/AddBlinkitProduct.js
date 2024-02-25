import Product_Detail from "../models/ProductSchema.js";

 const Addproduct = async (_, args) => {
    console.log(args);
    try {
        const { name, description, price, inStock, manufacturer } = args;
        const product = new Product_Detail({
            name,
            description,
            price,
            inStock,
            manufacturer
        });
        const newProduct = await product.save();
        console.log("Product created:", newProduct);
        return newProduct;
    } catch (error) {
        console.error("Error occurred:", error);
        throw new Error("Error occurred while adding product");
    }
}
export {Addproduct}
