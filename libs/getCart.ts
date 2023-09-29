import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getCart() {
  const cart = await commerce.cart.retrieve();

  if (!cart) toast.error("Error fetching cart items");

  return cart;
}
