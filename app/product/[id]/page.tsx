import PageContent from "./_components/PageContent";
import getProduct from "@/libs/getProduct";

interface ProductProps {
  params: {
    id: string;
  };
}

const Product: React.FC<ProductProps> = async ({ params: { id } }) => {
  const product = await getProduct(id);

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 mb-14">
      <PageContent product={product} />
    </section>
  );
};

export default Product;
