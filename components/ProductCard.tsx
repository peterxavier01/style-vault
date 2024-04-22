import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

import { twMerge } from "tailwind-merge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbShoppingCartCheck } from "react-icons/tb";

import Button from "./Button";
import addToCart from "@/libs/addToCart";
import getCart from "@/libs/getCart";
import { Product } from "@chec/commerce.js/types/product";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const {
    name,
    price: { formatted_with_symbol },
    id: productId,
    permalink,
    image,
  } = product;

  const src = image ? image.url : "";

  type initialStateType = {
    product: Product;
    inCart: boolean;
  };

  const [productInCart, setproductInCart] = useState<initialStateType>({
    product,
    inCart: false,
  });

  const debouncedFunction = debounce(() => {
    getCart()
      .then((cart) => {
        const isInCart = cart.line_items.some(
          (item) => item.product_id === productId
        );
        setproductInCart((prev) => ({ ...prev, inCart: isInCart }));
      })
      .catch((err) => console.error(err));
  }, 300);

  const isProductInCart = useCallback(() => {
    debouncedFunction();
  }, [debouncedFunction]);

  useEffect(() => {
    isProductInCart();
  }, [isProductInCart]);

  return (
    <div
      className={twMerge(
        `card card-compact w-full rounded-2xl my-4`,
        className
      )}
    >
      <div className="bg-gray-300 rounded-2xl group overflow-hidden w-full h-80 flex items-center justify-center relative">
        <Link href={`/product/${permalink}`}>
          <figure className="relative">
            <Image
              src={src}
              alt="product"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-contain h-auto group-hover:scale-125 transition duration-500"
            />
          </figure>
        </Link>

        <div className="card-actions absolute top-4 right-4">
          <Button
            className="bg-white rounded-full border-none w-12 h-12 hover:bg-white flex justify-center items-center"
            title="Add to cart"
            onClick={() => addToCart(productId, 1)}
          >
            {!productInCart.inCart ? (
              <AiOutlineShoppingCart size={28} className="text-slate-800" />
            ) : (
              <TbShoppingCartCheck size={28} className="text-green-800" />
            )}
          </Button>
        </div>
      </div>

      <div className="card-body">
        <div className="flex flex-col text-slate-800 w-full">
          <Link href={`/product/${permalink}`}>
            <h2 className="card-title text-sm md:text-base link-hover-custom">
              {name}
            </h2>
          </Link>
          <p className="card-title text-lg md:text-xl flex-grow-0">
            {formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
