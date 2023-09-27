import commerce from "@/utils/commerce";

export default async function getCategories() {
  const { data } = await commerce.categories.list();

  if (!data) throw new Error("Error fetching products");

  return data;
}
