"use client";

import { SwiperSlide } from "swiper/react";

import ProductCard from "@/components/ProductCard";
import SlideContainer from "@/components/SlideContainer";
import Header from "@/components/Header";

import { Product } from "@chec/commerce.js/types/product";

import Card from "./Card";

type PageContentProps = {
  products: Product[];
};

const PageContent: React.FC<PageContentProps> = ({ products }) => {
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
          {products.map((product) => (
            <div key={product.id}>
              <Card
                src={product.image!.url}
                category={product.id}
                href={product.id}
              />
            </div>
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

export const products = [
  {
    id: 1,
    name: "Headsets",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp1.webp",
    price: "$45.99",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Speakers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp2.webp",
    price: "$84.99",
    category: "Shirts",
  },
  {
    id: 3,
    name: "Headsets",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp3.webp",
    price: "$57.00",
    category: "Socks",
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp4.webp",
    price: "$67.99",
    category: "Men's clothing",
  },
  {
    id: 5,
    name: "Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp3.webp",
    price: "$67.99",
    category: "Women's wear",
  },
  {
    id: 6,
    name: "Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp2.webp",
    price: "$67.99",
    category: "Women's clothing",
  },
  {
    id: 7,
    name: "Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp1.webp",
    price: "$67.99",
    category: "Men's wear",
  },
  {
    id: 8,
    name: "Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: "/temp4.webp",
    price: "$67.99",
    category: "Accessories",
  },
];
