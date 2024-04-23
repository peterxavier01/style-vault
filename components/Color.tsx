import { cn } from "@/utils";
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
    <div className="mb-8">
      <p className="text-main-black font-medium capitalize">Color</p>
      <div className="flex items-center gap-2 mt-2">
        {colors &&
          colors.options.map((color, index) => (
            <span
              key={color.id}
              style={{ backgroundColor: color.name.toLowerCase() }}
              className={cn(
                "w-4 h-4 rounded-full block relative",
                selectedColor === index ? "color-selected" : ""
              )}
              onClick={() => handleSelectedColor(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default Color;
