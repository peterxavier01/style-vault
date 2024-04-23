"use client";

import { SwiperSlide } from "swiper/react";

import { Product } from "@chec/commerce.js/types/product";

import ProductCard from "@/components/ProductCard";
import SlideContainer from "@/components/SlideContainer";
import Header from "@/components/Header";

import Card from "./Card";
import { Category } from "@chec/commerce.js/types/category";

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
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </SlideContainer>
      </section>

      <section className="mt-12 md:mt-24 select-none">
        <Header title="Product Categories" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 gap-y-11">
          {categories.map((category) => (
            <Card key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-24 select-none">
        <SlideContainer title="Bestselling Products">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </SlideContainer>
      </section>
    </>
  );
};

export default PageContent;
