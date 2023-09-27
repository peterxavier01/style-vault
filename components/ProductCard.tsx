import Image from "next/image";
import Link from "next/link";

import { twMerge } from "tailwind-merge";
import { Markup } from "interweave";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./Button";
import addToCart from "@/libs/addToCart";
import { Product } from "@chec/commerce.js/types/product";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const {
    name,
    description,
    price: { formatted_with_symbol },
    id: productId,
    image,
  } = product;
  const src = image ? image.url : "";

  return (
    <div
      className={twMerge(
        `card card-compact shadow-md rounded-lg overflow-hidden hover:-translate-y-4 transition duration-300 my-4 h-[400px]`,
        className
      )}
    >
      <Link href={`/product/${productId}`}>
        <figure className="bg-gray-300 group w-full h-52">
          <Image
            src={src}
            alt="product"
            width={150}
            height={150}
            className="object-contain h-auto group-hover:scale-125 group-hover:rotate-45 transition duration-500"
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
          <p className="card-title text-lg md:text-xl flex-grow-0">
            {formatted_with_symbol}
          </p>
        </div>
        <p className="truncate text-slate-500 font-medium">
          <Markup content={description} noHtml />
        </p>
        <div className="card-actions justify-end mt-2">
          <Button
            className="bg-transparent text-primary hover:text-white"
            title="Add to cart"
            onClick={() => addToCart(productId, 1)}
          >
            <AiOutlineShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
