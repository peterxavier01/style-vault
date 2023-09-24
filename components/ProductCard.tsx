import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./Button";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  description: string;
  src: string;
  price: string;
  className?: string;
  productId?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  name,
  description,
  src,
  price,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `card card-compact shadow-md rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300 my-4`,
        className
      )}
    >
      <Link href={`/product/${productId}`}>
        <figure className="bg-gray-300 group">
          <Image
            src={src}
            alt="product"
            width={220}
            height={220}
            className="object-contain group-hover:scale-125 group-hover:rotate-45 transition duration-500"
          />
        </figure>
      </Link>

      <div className="card-body">
        <div className="flex justify-between items-center text-slate-800 w-full">
          <Link href={`/product/${productId}`}>
            <h2 className="card-title text-lg md:text-xl link-hover-c">
              {name}
            </h2>
          </Link>
          <p className="card-title text-lg md:text-xl flex-grow-0">{price}</p>
        </div>
        <p className="truncate text-slate-500 font-medium">{description}</p>
        <div className="card-actions justify-end mt-2">
          <Button
            className="bg-transparent text-primary hover:text-white"
            title="Add to cart"
          >
            <AiOutlineShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
