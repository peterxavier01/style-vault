import Hero from "@/components/Hero";
import PageContent from "./_components/PageContent";

import { getProducts } from "@/libs/getProducts";
import { getCategories } from "@/libs/getCategories";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8">
      <div>
        <Hero />
      </div>

      <div className="my-12 md:mt-20 md:mb-14">
        <PageContent products={products} categories={categories} />
      </div>
    </main>
  );
}
