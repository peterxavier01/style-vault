import Link from "next/link";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { removeItem } from "@/libs/updateCart";
import Counter from "./Counter";

interface CartItemProps {
  cartItem: LineItem;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const {
    image,
    name,
    price: { formatted_with_symbol },
  } = cartItem;
  const src = image ? image.url : "";

  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="bg-gray-300 h-24 hover:bg-gray-400 duration-200 transition rounded-lg flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={60}
          height={60}
          className="object-contain w-auto h-auto"
        />
      </div>

      <div className="col-span-2">
        <div className="flex justify-between items-center mb-1">
          <Link href={`/${name.toLowerCase()}`}>
            <p className="text-slate-800 font-semibold text-base link-hover-c">
              {name}
            </p>
          </Link>
          <span
            className="cursor-pointer"
            onClick={() => removeItem(cartItem.id)}
          >
            <AiOutlineClose />
          </span>
        </div>

        <div className="flex justify-between items-center">
          <Counter quantity={cartItem.quantity} cartItem={cartItem} />
          <p className="text-slate-800 text-sm md:text-base">
            {formatted_with_symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
