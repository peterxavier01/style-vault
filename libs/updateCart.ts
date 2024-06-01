import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

import useCartData from "@/hooks/useCartData";

export const incrementQuantity = async (
  productId: string,
  quantity: number
) => {
  try {
    await commerce.cart.update(productId, { quantity: quantity + 1 });
    handleUpdateCart();
  } catch (error) {
    toast.error("Error updating cart");
  }
};

export const decrementQuantity = async (
  productId: string,
  quantity: number
) => {
  if (quantity > 1) {
    try {
      await commerce.cart.update(productId, { quantity: quantity - 1 });
      handleUpdateCart();
    } catch (error) {
      toast.error("Error updating cart");
    }
  } else {
    removeItem(productId);
  }
};

async function handleUpdateCart() {
  try {
    await commerce.cart.retrieve();
  } catch (error) {
    toast.error("Error fetching cart");
  }
}

export async function removeItem(productId: string) {
  try {
    await commerce.cart.remove(productId);
  } catch (error) {
    toast.error("Error removing item from cart");
  }
}

export async function emptyCart() {
  try {
    await commerce.cart.empty();
  } catch (error) {
    toast.error("Error clearing cart");
  }
}

export async function refreshCart() {
  const setCart = useCartData.getState().setCart;

  try {
    await commerce.cart.refresh();
    setCart(null);
  } catch (error) {
    toast.error("Error clearing cart");
  }
}
