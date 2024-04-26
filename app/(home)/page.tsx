import Hero from "@/components/Hero";
import PageContent from "./_components/PageContent";

import { Product } from "@chec/commerce.js/types/product";

import getProducts from "@/libs/getProducts";
import getCategories from "@/libs/getCategories";
import getCart from "@/libs/getCart";

export default async function Home() {
  const products: Product[] = await getProducts();
  const categories = await getCategories();
  const cart = await getCart();

  return (
    <main className="max-w-[1440px] mx-auto px-4 md:px-8">
      <div>
        <Hero />
      </div>
      <div className="my-12 md:mt-20 md:mb-14">
        <PageContent products={products} categories={categories} cart={cart} />
      </div>
    </main>
  );
}
