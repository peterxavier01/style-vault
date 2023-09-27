import commerce from "@/utils/commerce";

const addToCart = async (productId: string, quantity: number) => {
  const data = await commerce.cart.add(productId, quantity);
  return data;
};

export default addToCart;
