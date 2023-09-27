import commerce from "@/utils/commerce";

export default async function getProducts() {
  const { data } = await commerce.products.list();

  if (!data) throw new Error("Error fetching products");

  return data;
}
