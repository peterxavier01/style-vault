"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import sanitizeHtml from "sanitize-html";
import { Product } from "@chec/commerce.js/types/product";
import { LineItem } from "@chec/commerce.js/types/line-item";
import { MdOutlineShoppingBag } from "react-icons/md";

import Button from "@/components/Button";
import Color from "@/components/Color";
import Size from "@/components/Size";
import Counter from "@/components/Counter";
import SimilarProduct from "@/components/SimilarProduct";
import clientOnly from "@/components/ClientOnly";

import addToCart from "@/libs/addToCart";
import useCartData from "@/hooks/useCartData";

type PageComponentProps = {
  product: Product;
};

const PageContent = ({ product }: PageComponentProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>("");

  const { cart } = useCartData();
  const [cartItem, setCartItem] = useState<Partial<LineItem>>({});

  useEffect(() => {
    cart?.line_items.map((item) => {
      setCartItem(item);
    });
  }, [cart]);

  useEffect(() => {
    if (!selectedImage) {
      setSelectedImage(product?.image?.url);
    }
  }, [product, selectedImage]);

  const handleImageSelected = (url: string) => {
    setSelectedImage(url);
  };

  const sanitizedContent = sanitizeHtml(product.description, {
    allowedTags: ["b", "i", "a", "p"], // allowed tags
    allowedAttributes: { a: ["href"] }, // allowed attributes
  });

  if (!product) return;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="flex flex-col gap-4">
          <div className="temporary w-full min-h-[350px] md:min-h-[400px] bg-gray-300 rounded-xl relative">
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
            {product.assets.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden flex items-center justify-center w-[150px] h-[140px] bg-gray-300 rounded-xl"
              >
                <Image
                  src={item.url}
                  fill
                  sizes="150px"
                  alt="image-name"
                  className="rounded-2xl object-cover bg-gray-300 block"
                  onMouseEnter={() => handleImageSelected(item.url)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-slate-500 text-base font-medium mb-2">
            {product.categories[0].name}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main-black mb-4">
            {product.name}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="text-slate-500 text-sm mb-8"
          />

          <Color colors={product.variant_groups[0]} />

          <Size sizes={product.variant_groups[1]} />

          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-main-black font-medium capitalize mb-2">
                total price
              </p>
              <p className="text-3xl text-main-black font-semibold">
                {product.price.formatted_with_symbol}
              </p>
            </div>
            {cartItem.quantity && (
              <div>
                <Counter
                  quantity={cartItem.quantity as number}
                  cartItem={cartItem as LineItem}
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="rounded-xl capitalize"
              onClick={() => addToCart(product.id, 1)}
            >
              <MdOutlineShoppingBag size={24} />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {product.related_products.length > 0 ? (
        <SimilarProduct product={product} />
      ) : null}
    </>
  );
};

export default clientOnly(PageContent);
