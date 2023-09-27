import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { LineItem } from "@chec/commerce.js/types/line-item";

import Counter from "./Counter";
import Link from "next/link";

interface CartItemProps {
  product: LineItem;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const {
    image,
    name,
    price: { formatted_with_symbol },
  } = product;
  const src = image ? image.url : "";

  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="bg-gray-300 hover:bg-gray-400 duration-200 transition rounded-lg flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={50}
          height={50}
          className="object-contain w-full h-auto"
        />
      </div>

      <div className="col-span-2">
        <div className="flex justify-between items-center mb-1">
          <Link href={`/${name.toLowerCase()}`}>
            <p className="text-slate-800 font-semibold text-base link-hover-c">
              {name}
            </p>
          </Link>
          <span className="cursor-pointer">
            <AiOutlineClose />
          </span>
        </div>

        {/* <p className="text-xs md:text-sm text-slate-700 line-clamp-1 md:line-clamp-2 mb-4">
          {description}
        </p> */}

        <div className="flex justify-between items-center">
          <Counter quantity={1} />
          <p className="text-slate-800 text-sm md:text-base">
            {formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
