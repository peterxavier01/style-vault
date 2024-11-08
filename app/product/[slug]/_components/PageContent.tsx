"use client";

import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { PRODUCT_QUERYResult } from "@/sanity/sanity.types";
import { MdOutlineShoppingBag } from "react-icons/md";

import Button from "@/components/Button";
import Color from "@/components/Color";
import Size from "@/components/Size";
import Counter from "@/components/Counter";
import SimilarProduct from "@/components/SimilarProduct";
import clientOnly from "@/components/ClientOnly";

import useCartData, { CartProduct } from "@/hooks/useCartStore";

type PageComponentProps = {
  product: PRODUCT_QUERYResult;
};

const PageContent = ({ product }: PageComponentProps) => {
  const router = useRouter();
  const { cartItems, addToCart } = useCartData();
  const [cartItem, setCartItem] = useState<CartProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>("");

  const url = product?.image ? product.image.url : null;

  useEffect(() => {
    cartItems.map((item) => {
      setCartItem(item);
    });
    router.refresh();
  }, [cartItems, router]);

  useEffect(() => {
    if (!selectedImage) {
      setSelectedImage(url ?? "");
    }
  }, [product, selectedImage, url]);

  if (!product) return notFound();

  if (!url) return "";

  const handleImageSelected = (url: string) => {
    setSelectedImage(url);
  };

  function isProductInCart() {
    return cartItems.find((item) => item._id === product?._id);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="flex flex-col gap-4">
          <div className="temporary w-full min-h-[350px] md:min-h-[400px] overflow-hidden rounded-xl relative">
            <Image
              src={selectedImage as string}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="w-full block rounded-2xl object-cover"
              alt="image-name"
            />
          </div>

          <div className="flex items-center gap-4 w-fit rounded-xl">
            {product.gallery?.map((item) => (
              <div
                key={item.asset?._id}
                className="relative overflow-hidden flex items-center justify-center w-[150px] h-[140px] rounded-xl"
              >
                <Image
                  src={item.asset?.url || ""}
                  fill
                  sizes="150px"
                  alt="image-name"
                  className="rounded-2xl object-cover bg-gray-300 block"
                  onMouseEnter={() =>
                    handleImageSelected(item.asset?.url || "")
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium mb-2">
            {product.categories?.[0]?.name}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main-black dark:text-gray-100 mb-4">
            {product.name}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            {product.description}
          </p>

          {product.variants?.[0].color && <Color product={product} />}

          {product.variants?.[0].size && <Size product={product} />}

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-main-black dark:text-gray-300 font-medium capitalize mb-2">
                total price
              </p>
              <p className="text-3xl text-main-black dark:text-gray-100 font-semibold">
                ${product.price}
              </p>
            </div>
            {isProductInCart() ? (
              <div>
                <Counter
                  quantity={cartItem?.quantity || 1}
                  cartItem={cartItem as CartProduct}
                />
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="rounded-xl capitalize"
              onClick={() => addToCart(product)}
            >
              <MdOutlineShoppingBag size={24} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {product.relatedProducts && product.relatedProducts.length > 0 ? (
        <SimilarProduct product={product} />
      ) : null}
    </>
  );
};

export default clientOnly(PageContent);
