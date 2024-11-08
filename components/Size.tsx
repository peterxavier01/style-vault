import { useState } from "react";

import { PRODUCT_QUERYResult } from "@/sanity/sanity.types";

import { cn } from "@/utils";

type SizeProps = {
  product: PRODUCT_QUERYResult;
};

const Size = ({ product }: SizeProps) => {
  const [selectedSize, setSelectedSize] = useState<number>(0);

  return (
    <>
      {product ? (
        <div className="mb-8">
          <p className="text-main-black dark:text-gray-300 font-medium capitalize">
            size
          </p>
          <div className="flex items-center gap-2 mt-2 relative">
            {product.variants?.map((variant, index) => (
              <span
                key={variant.size?._id}
                className={cn(
                  "uppercase w-full max-w-[45px] cursor-pointer h-10 rounded-xl text-sm flex items-center justify-center text-main-black dark:text-gray-300 hover:text-white hover:bg-primary transition border border-main-black dark:hover:border-primary",
                  selectedSize === index
                    ? "bg-primary border-primary text-white"
                    : "dark:border-gray-300"
                )}
                onClick={() => setSelectedSize(index)}
              >
                {variant.size?.name}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Size;
