import Hero from "@/components/Hero";
import PageContent from "./_components/PageContent";

import { Product } from "@chec/commerce.js/types/product";

import getProducts from "@/libs/getProducts";
import getCategories from "@/libs/getCategories";

export default async function Home() {
  const products: Product[] = await getProducts();
  const categories = await getCategories();

  return (
    <main className="">
      <Hero />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 my-12 md:my-24">
        <PageContent products={products} categories={categories} />
      </div>
    </main>
  );
}
