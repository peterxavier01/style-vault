import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getProducts() {
  const { data } = await commerce.products.list();

  if (!data) toast.error("Error fetching products");

  return data;
}
