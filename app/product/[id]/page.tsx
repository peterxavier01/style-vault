import getProduct from "@/libs/getProduct";

interface ProductProps {
  params: {
    id: string;
  };
}

const Product: React.FC<ProductProps> = async ({ params: { id } }) => {
  const product = await getProduct(id);

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
