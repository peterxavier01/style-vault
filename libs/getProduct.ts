import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getProduct(id: string) {
  const product = await commerce.products.retrieve(id, {
    type: "permalink",
  });

  if (!product) toast.error("Error fetching product details");

  return product;
}
