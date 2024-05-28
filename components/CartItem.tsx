import Link from "next/link";
import Image from "next/image";

import { AiOutlineClose } from "react-icons/ai";
import { LineItem } from "@chec/commerce.js/types/line-item";

import Counter from "./Counter";

interface CartItemProps {
  cartItem: LineItem;
  onRemoveItem: (id: string) => void;
  showCloseBtn: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onRemoveItem,
  showCloseBtn,
}) => {
  const {
    image,
    name,
    price: { formatted_with_symbol },
  } = cartItem;
  const src = image ? image.url : "";

  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="bg-gray-300 h-24 relative overflow-hidden w-full hover:bg-gray-400 duration-200 transition rounded-lg flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          fill
          sizes="100%"
          className="object-cover w-auto h-auto"
        />
      </div>

      <div className="col-span-2">
        <div className="flex justify-between items-center mb-1">
          <Link href={`/${name.toLowerCase()}`}>
            <p className="text-slate-800 font-semibold text-base link-hover-c">
              {name}
            </p>
          </Link>
          {showCloseBtn ? (
            <span
              className="cursor-pointer"
              onClick={() => onRemoveItem(cartItem.id)}
            >
              <AiOutlineClose />
            </span>
          ) : null}
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
