import { notFound } from "next/navigation";

import PageContent from "./_components/PageContent";

import { getProduct } from "@/libs/getProduct";

interface ProductProps {
  params: {
    slug: string;
  };
}

const Product: React.FC<ProductProps> = async ({ params }) => {
  const product = await getProduct(params);

  if (!product) notFound();

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-14">
      <PageContent product={product} />
    </section>
  );
};

export default Product;
