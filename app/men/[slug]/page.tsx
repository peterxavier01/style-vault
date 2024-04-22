import ProductCategory from "@/components/ProductCategory";
import getProductsByCategory from "@/libs/getProductsByCategory";
import { Product } from "@chec/commerce.js/types/product";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = async ({ params: { slug } }) => {
  const products: Product[] = await getProductsByCategory(slug);
  return (
    <main>
      <ProductCategory products={products} />
    </main>
  );
};

export default Page;
