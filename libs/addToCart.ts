import toast from "react-hot-toast";

import commerce from "@/utils/commerce";
import useCartData from "@/hooks/useCartData";

const addToCart = async (productId: string, quantity: number) => {
  const setCart = useCartData.getState().setCart;

  try {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    toast.success("Product added to cart successfully");
  } catch (error) {
    toast.error("Error adding product to cart");
  }
};

export default addToCart;
