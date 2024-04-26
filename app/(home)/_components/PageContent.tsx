"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";

import { Product } from "@chec/commerce.js/types/product";
import { Category } from "@chec/commerce.js/types/category";
import { Cart } from "@chec/commerce.js/types/cart";

import SlideContainer from "@/components/SlideContainer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import clientOnly from "@/components/ClientOnly";
import Card from "./Card";

import { categoryCardContainerVariants } from "@/utils/animations";

type PageContentProps = {
  products: Product[];
  categories: Category[];
  cart: Cart;
};

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <div className="skeleton h-80 w-full rounded-2xl"></div>,
});

const PageContent: React.FC<PageContentProps> = ({
  products,
  categories,
  cart,
}) => {
  return (
    <>
      <section>
        <SlideContainer title="Featured Products">
          {products.map((product) => (
            <SwiperSlide key={product.id} className="w-full">
              <ProductCard product={product} cart={cart} />
            </SwiperSlide>
          ))}
        </SlideContainer>
      </section>

      <section className="mt-10 select-none">
        <Header title="Product Categories" />
        {categories && (
          <motion.div
            variants={categoryCardContainerVariants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 gap-y-11"
          >
            {categories.map((category) => (
              <Card key={category.id} category={category} />
            ))}
          </motion.div>
        )}
      </section>

      <section className="mt-12 md:mt-20 select-none">
        <Header title="Best-selling Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} cart={cart} />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Newsletter />
      </div>
    </>
  );
};

export default clientOnly(PageContent);
