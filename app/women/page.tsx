import Jumbotron from "@/components/Jumbotron";
import ProductCategory from "@/components/ProductCategory";
import getProductsByCategory from "@/libs/getProductsByCategory";

export default async function Women() {
  const products = await getProductsByCategory("womens-shirts");

  return (
    <main className="">
      <Jumbotron
        header="Stylish Shirts"
        subheader="Explore Our Collection of High-Quality Shirts for Every Occasion"
        src="/shirt-hero.jpg"
        alt="A Stylish Shirt"
      />
      <ProductCategory products={products} />
    </main>
  );
}
