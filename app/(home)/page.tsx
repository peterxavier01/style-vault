import Hero from "@/components/Hero";
import PageContent from "./_components/PageContent";

import getProducts from "@/libs/getProducts";
import { Product } from "@chec/commerce.js/types/product";

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main className="">
      <Hero />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 my-12 md:my-24">
        <PageContent products={products} />
      </div>
    </main>
  );
}
