import dynamic from "next/dynamic";
import { SwiperSlide } from "swiper/react";

import SlideContainer from "./SlideContainer";

import { PRODUCT_QUERYResult } from "@/sanity/sanity.types";

interface SimilarProductProps {
  product: PRODUCT_QUERYResult;
}

const ProductCard = dynamic(() => import("@/components/ProductCard"), {
  loading: () => <div className="skeleton h-80 w-full rounded-2xl"></div>,
});

const SimilarProduct = ({ product }: SimilarProductProps) => {
  return (
    <section className="mt-20">
      <SlideContainer title="Similar Product">
        {product?.relatedProducts?.map((product) => (
          <SwiperSlide key={product._id} className="w-full">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </SlideContainer>
    </section>
  );
};

export default SimilarProduct;
