import ProductCategory from "@/components/ProductCategory";

import { getCategoryBySlug } from "@/libs/getCategoryBySlug";
import { getProductsByCategory } from "@/libs/getProductsByCategory";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
  const products = await getProductsByCategory({ slug });
  const category = await getCategoryBySlug({ slug });

  return (
    <main>
      <ProductCategory products={products} category={category} />
    </main>
  );
};

export default Page;
