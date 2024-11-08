"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbShoppingCartCheck } from "react-icons/tb";

import Button from "@/components/Button";

import useCartStore from "@/hooks/useCartStore";
import {
  PRODUCT_CATEGORY_QUERYResult,
  PRODUCT_QUERYResult,
} from "@/sanity/sanity.types";

interface ProductCardProps {
  product: PRODUCT_CATEGORY_QUERYResult[0];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const router = useRouter();

  const cart = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const [productInCart, setProductInCart] = useState<initialStateType>({
    product,
    inCart: false,
  });

  // // Check if a product is already in the cart
  useEffect(() => {
    try {
      const isInCart = cart?.some((item) => item._id === product._id);
      setProductInCart((prev) => ({ ...prev, inCart: isInCart }));
    } catch (error) {
      console.error(error);
    }
  }, [cart, product._id]);

  if (!product) return notFound();

  const src = product.image ? product.image.url : null;

  type initialStateType = {
    product: PRODUCT_CATEGORY_QUERYResult[0];
    inCart: boolean | undefined;
  };

  return (
    <div
      className={twMerge(
        `card card-compact w-full rounded-2xl my-4`,
        className
      )}
    >
      <div className="rounded-2xl bg-gray-300 group overflow-hidden w-full h-80 flex items-center justify-center relative">
        <Link href={`/product/${product.permalink}`}>
          <Image
            src={src as string}
            alt="product"
            fill
            loading="eager"
            sizes="calc(100vw - 32px)"
            className="object-cover w-full group-hover:scale-105 transition duration-500"
          />
        </Link>

        <div className="card-actions absolute top-4 right-4">
          <Button
            className="bg-white rounded-full border-none w-12 h-12 hover:scale-105 hover:bg-white transition flex justify-center items-center"
            title="Add to cart"
            onClick={() => {
              addToCart(product as PRODUCT_QUERYResult);
              router.refresh();
            }}
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
        <div className="flex flex-col text-slate-800 dark:text-gray-300 w-full">
          <Link href={`/product/${product.permalink}`}>
            <h2 className="card-title truncate text-sm md:text-base link-hover-custom">
              {product.name}
            </h2>
          </Link>
          <p className="card-title text-lg md:text-xl flex-grow-0">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
