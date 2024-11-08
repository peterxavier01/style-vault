import ProductCategory from "@/components/ProductCategory";

import { getProducts } from "@/libs/getProducts";

import { PRODUCT_CATEGORY_QUERYResult as Product } from "@/sanity/sanity.types";

export default async function Shop() {
  const products: Product = await getProducts();

  return (
    <main>
      <ProductCategory products={products} isShopPage={true} />
    </main>
  );
}
