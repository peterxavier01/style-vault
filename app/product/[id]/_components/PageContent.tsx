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

type PageComponentProps = {
  product: Product;
};

const srcs = ["/hero.jpg", "/hero.jpg", "/hero.jpg"];

const PageContent = ({ product }: PageComponentProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>("");

  useEffect(() => {
    if (!selectedImage) {
      setSelectedImage(product?.image?.url);
    }
  }, [product, selectedImage]);

  console.log(product);

  const sanitizedContent = sanitizeHtml(product.description, {
    allowedTags: ["b", "i", "a", "p"], // allowed tags
    allowedAttributes: { a: ["href"] }, // allowed attributes
  });

  if (!product) return;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <div className="flex flex-col gap-4">
        <div className="temporary bg-gray-300 rounded-xl">
          <Image
            src={selectedImage as string}
            width={300}
            height={300}
            priority
            className="w-full block rounded-2xl object-cover"
            alt="image-name"
          />
        </div>
        <div className="flex items-center gap-4 w-fit bg-gray-300 rounded-xl">
          {product.assets.map((item) => (
            <Image
              key={item.id}
              src={item.url}
              width={100}
              height={100}
              alt="image-name"
              className="rounded-2xl object-contain h-auto block"
            />
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

        <Color />

        <Size />

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-main-black font-medium capitalize mb-2">
              total price
            </p>
            <p className="text-3xl text-main-black font-semibold">
              {product.price.formatted_with_symbol}
            </p>
          </div>
          <div>
            Counter
            {/* <Counter /> */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="rounded-xl capitalize">
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
