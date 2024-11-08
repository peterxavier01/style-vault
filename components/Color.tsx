import { useState } from "react";

import { PRODUCT_QUERYResult } from "@/sanity/sanity.types";
import { cn, removeHyphen } from "@/utils";

type ColorProps = {
  product: PRODUCT_QUERYResult;
};

const Color = ({ product }: ColorProps) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const handleSelectedColor = (index: number) => {
    setSelectedColor(index);
  };

  return (
    <>
      {product ? (
        <div className="mb-8">
          <p className="text-main-black dark:text-gray-300 font-medium capitalize">
            Color
          </p>
          <div className="flex items-center gap-2 mt-2">
            {product.variants?.map((variant, index) => (
              <span
                title={variant.color?.name ?? ""}
                key={variant.color?._id}
                style={{
                  backgroundColor: removeHyphen(
                    variant.color?.hex?.toLowerCase() || ""
                  ),
                }}
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer block relative border border-gray-500 dark:border-gray-300",
                  selectedColor === index ? "color-selected" : ""
                )}
                onClick={() => handleSelectedColor(index)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Color;
