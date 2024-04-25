"use client";

import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";

import { Product } from "@chec/commerce.js/types/product";

import ProductCard from "@/components/ProductCard";
import SlideContainer from "@/components/SlideContainer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";

import Card from "./Card";
import { Category } from "@chec/commerce.js/types/category";
import { categoryCardContainerVariants } from "@/utils/animations";

type PageContentProps = {
  products: Product[];
  categories: Category[];
};

const PageContent: React.FC<PageContentProps> = ({ products, categories }) => {
  return (
    <>
      <section>
        <SlideContainer title="Featured Products">
          {products.map((product) => (
            <SwiperSlide key={product.id} className="w-full">
              <ProductCard product={product} />
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <Newsletter />
      </div>
    </>
  );
};

export default PageContent;
