import CategoryGroup from "@/components/CategoryGroup";
import Jumbotron from "@/components/Jumbotron";

export default async function Men() {
  return (
    <main className="">
      <Jumbotron
        header="For Men"
        subheader="Explore Our Collection of High-Quality Shirts for Every Occasion"
        src="/shirt-hero.jpg"
        alt="A Stylish Shirt"
      />

      <CategoryGroup />
    </main>
  );
}
