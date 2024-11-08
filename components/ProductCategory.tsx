"use client";

import { useRouter } from "next/navigation";

import ProductCard from "./ProductCard";
import Dropdown from "./Dropdown";
import Paging from "./Paging";

import { menCategories, womenCategories } from "@/utils";
import {
  CATEGORY_BY_SLUG_QUERYResult,
  PRODUCT_CATEGORY_QUERYResult,
} from "@/sanity/sanity.types";

type ProductCatgory = {
  products: PRODUCT_CATEGORY_QUERYResult;
  category?: CATEGORY_BY_SLUG_QUERYResult;
  isShopPage?: boolean;
};

const ProductCategory: React.FC<ProductCatgory> = ({
  products,
  category,
  isShopPage,
}) => {
  const router = useRouter();

  let isMobile;
  if (typeof window !== "undefined") {
    isMobile = window.matchMedia("(max-width: 767px)").matches;
  }

  const handleFilterProduct = (slug: string) => {
    if (typeof window !== "undefined") {
      if (!window.location.href.includes("category")) {
        router.push(`/category/${slug}`);
      } else {
        router.push(slug);
      }
    }
  };

  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto mb-8">
      <div className="bg-primary rounded-2xl w-full min-h-[250px] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl text-center tracking-wide font-semibold">
          {!isShopPage ? category?.name : "Shop"}
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11">
        <div className="col-span-1">
          <h4 className="text-xl font-semibold text-primary dark:text-gray-300 mb-2 uppercase">
            Categories
          </h4>
          <div className="flex flex-row sm:flex-col gap-3">
            <Dropdown
              title="men"
              checked={!isMobile}
              content={menCategories}
              onClick={handleFilterProduct}
            />
            <Dropdown
              title="women"
              content={womenCategories}
              onClick={handleFilterProduct}
            />
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <ul className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {products
              ? products.map((product) => {
                  return (
                    <li key={product._id}>
                      <ProductCard product={product} />
                    </li>
                  );
                })
              : null}
          </ul>

          <div className="flex items-center justify-center shadow-md p-4 rounded-lg w-full">
            <Paging total={products.length} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
