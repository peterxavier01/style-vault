import commerce from "@/utils/commerce";
import toast from "react-hot-toast";

export default async function getCategories() {
  const { data } = await commerce.categories.list();

  if (!data) toast.error("Error fetching categories");

  return data;
}
