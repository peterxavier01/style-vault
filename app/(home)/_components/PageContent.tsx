"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";

import SlideContainer from "@/components/SlideContainer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import clientOnly from "@/components/ClientOnly";
import Card from "./Card";

import { categoryCardContainerVariants } from "@/utils/animations";
import {
  PRODUCTS_QUERYResult as Product,
  CATEGORY_QUERYResult as Category,
} from "@/sanity/sanity.types";

type PageContentProps = {
  products: Product;
  categories: Category;
};

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <div className="skeleton h-80 w-full rounded-2xl"></div>,
});

const PageContent: React.FC<PageContentProps> = ({ products, categories }) => {
  return (
    <>
      <section>
        <SlideContainer title="Featured Products">
          {products.map((product) => (
            <SwiperSlide key={product._id} className="w-full">
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
            {categories
              .filter((item) => !item.parentCategory)
              .map((category) => (
                <Card key={category._id} category={category} />
              ))}
          </motion.div>
        )}
      </section>

      <section className="mt-12 md:mt-20 select-none">
        <Header title="Best-selling Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product} />
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
