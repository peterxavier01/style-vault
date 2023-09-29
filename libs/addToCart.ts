import toast from "react-hot-toast";

import commerce from "@/utils/commerce";

const addToCart = async (productId: string, quantity: number) => {
  try {
    const data = await commerce.cart.add(productId, quantity);
    toast.success("Product added to cart successfully");
    return data;
  } catch (error) {
    toast.error("Error adding product to cart");
  }
};

export default addToCart;
