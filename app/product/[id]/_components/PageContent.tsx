"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import sanitizeHtml from "sanitize-html";
import { Product } from "@chec/commerce.js/types/product";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";

import Button from "@/components/Button";
import Color from "@/components/Color";
import Size from "@/components/Size";
import Counter from "@/components/Counter";
import clientOnly from "@/components/ClientOnly";

import addToCart from "@/libs/addToCart";
import useCartData from "@/hooks/useCartData";
import { LineItem } from "@chec/commerce.js/types/line-item";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <div className="flex flex-col gap-4">
        <div className="temporary w-full min-h-[350px] md:min-h-[400px] bg-gray-300 rounded-xl relative">
          <Image
            src={selectedImage as string}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="w-full block rounded-2xl object-contain"
            alt="image-name"
          />
        </div>
        <div className="flex items-center gap-4 w-fit rounded-xl">
          {product.assets.map((item) => (
            <div key={item.id} className="relative bg-gray-300 rounded-xl">
              <Image
                src={item.url}
                width={item.image_dimensions.width}
                height={item.image_dimensions.height}
                alt="image-name"
                className="rounded-2xl w-full max-w-[100px] md:max-w-[130px] h-auto object-contain bg-gray-300 block"
                onMouseEnter={() => handleImageSelected(item.url)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
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
          <Button className="bg-transparent rounded-xl border group border-main-black">
            <AiOutlineHeart
              size={24}
              className="text-main-black group-hover:text-white transition"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default clientOnly(PageContent);
