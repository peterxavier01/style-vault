import commerce from "@/utils/commerce";

export const incrementQuantity = async (
  productId: string,
  quantity: number
) => {
  try {
    await commerce.cart.update(productId, { quantity: quantity + 1 });
    handleUpdateCart();
  } catch (error) {
    // Handle errors if necessary
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
      // Handle errors if necessary
    }
  } else {
    removeItem(productId);
  }
};

function handleUpdateCart() {
  commerce.cart.retrieve();
}

export async function removeItem(productId: string) {
  await commerce.cart.remove(productId);
}
