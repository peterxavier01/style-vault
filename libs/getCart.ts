import commerce from "@/utils/commerce";

export default async function getCart() {
  const cart = await commerce.cart.retrieve();

  if (!cart) throw new Error("Error fetching cart items");

  return cart;
}
