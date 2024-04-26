"use client";

import { useRouter } from "next/navigation";

import { Product } from "@chec/commerce.js/types/product";
import { Category } from "@chec/commerce.js/types/category";
import { Cart } from "@chec/commerce.js/types/cart";

import ProductCard from "./ProductCard";
import Dropdown from "./Dropdown";
import Paging from "./Paging";

type ProductCatgory = {
  cart: Cart;
  products: Product[];
  category: Category;
};

const ProductCategory: React.FC<ProductCatgory> = ({
  products,
  category,
  cart,
}) => {
  const router = useRouter();

  const handleFilterProduct = (slug: string) => {
    router.push(slug);
  };

  return (
    <section className="px-4 md:px-8 max-w-[1440px] mx-auto mb-8">
      <div className="bg-primary rounded-2xl w-full min-h-[250px] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl text-center tracking-wide font-semibold">
          {category.name}
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-11">
        <div className="col-span-1">
          <h4 className="text-xl font-semibold text-primary mb-2 uppercase">
            Categories
          </h4>
          <div className="flex flex-row sm:flex-col gap-3">
            <Dropdown
              title="men"
              content={["shirts", "shoes", "accessories"]}
              onClick={handleFilterProduct}
            />
            <Dropdown
              title="women"
              content={["shirts", "shoes", "accessories"]}
              onClick={handleFilterProduct}
            />
            <Dropdown
              title="kids"
              content={["shirts", "shoes", "accessories"]}
              onClick={handleFilterProduct}
            />
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <ul className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {products &&
              products.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCard product={product} cart={cart} />
                  </li>
                );
              })}
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
