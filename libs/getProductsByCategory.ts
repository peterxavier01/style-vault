import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getProductsByCategory(slug: string) {
  const { data: products } = await commerce.products.list({
    category_slug: slug,
  });

  if (!products) toast.error("Error fetching products");

  return products;
}
