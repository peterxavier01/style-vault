import ProductCategory from "@/components/ProductCategory";

import { Category } from "@chec/commerce.js/types/category";
import { Product } from "@chec/commerce.js/types/product";

import getCategoryBySlug from "@/libs/getCategoryBySlug";
import getProductsByCategory from "@/libs/getProductsByCategory";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
  const products: Product[] = await getProductsByCategory(slug);
  const category: Category = await getCategoryBySlug(slug);

  return (
    <main>
      <ProductCategory products={products} category={category} />
    </main>
  );
};

export default Page;
