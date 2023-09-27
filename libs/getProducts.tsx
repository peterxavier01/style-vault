import commerce from "@/utils/commerce";

export default async function getProducts() {
  const { data } = await commerce.products.list();

  if (!data) throw new Error("Error fetching products");
  
  return data;
}

// const merchant = await commerce.merchants.about();
// const { data: categories } = await commerce.categories.list();
// const { data: products } = await commerce.products.list();
// const response = await fetch(`https://fakestoreapi.com/products`);
