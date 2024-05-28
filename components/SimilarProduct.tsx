import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";
import { Product } from "@chec/commerce.js/types/product";

import SlideContainer from "./SlideContainer";

interface SimilarProductProps {
  product: Product;
}

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <div className="skeleton h-80 w-full rounded-2xl"></div>,
});

const SimilarProduct = ({ product }: SimilarProductProps) => {
  return (
    <section className="mt-20">
      <SlideContainer title="Similar Product">
        {product?.related_products?.map((product) => (
          <SwiperSlide key={product.id} className="w-full">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </SlideContainer>
    </section>
  );
};

export default SimilarProduct;
