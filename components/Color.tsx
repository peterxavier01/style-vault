import { cn, removeHyphen } from "@/utils";
import { ProductVariantGroup } from "@chec/commerce.js/types/product-variant-group";
import { useState } from "react";

type ColorProps = {
  colors: ProductVariantGroup;
};

const Color = ({ colors }: ColorProps) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const handleSelectedColor = (index: number) => {
    setSelectedColor(index);
  };

  return (
    <>
      {colors ? (
        <div className="mb-8">
          <p className="text-main-black dark:text-gray-300 font-medium capitalize">
            Color
          </p>
          <div className="flex items-center gap-2 mt-2">
            {colors.options.map((color, index) => (
              <span
                title={color.name}
                key={color.id}
                style={{
                  backgroundColor: removeHyphen(color.name.toLowerCase()),
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
