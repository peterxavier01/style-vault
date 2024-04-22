import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getCategory(slug: string) {
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  if (!category) toast.error("Error fetching product categories");

  return category;
}
