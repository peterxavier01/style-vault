import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import Counter from "./Counter";

import { CartProduct } from "@/hooks/useCartStore";

interface CartItemProps {
  cartItem: CartProduct;
  onRemoveItem: (id: string) => void;
  showCloseBtn: boolean;
  isDeleting?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onRemoveItem,
  showCloseBtn,
  isDeleting,
}) => {
  const { image, name, price } = cartItem;
  const src = image ? image.url : null;

  return (
    <div className="grid grid-cols-3 gap-x-4 relative">
      {isDeleting ? (
        <div className="bg-white/40 absolute h-full w-full" />
      ) : null}

      <div className="bg-gray-300 h-24 relative overflow-hidden w-full hover:bg-gray-400 duration-200 transition rounded-lg flex items-center justify-center">
        <Image
          src={src as string}
          alt={name || ""}
          fill
          sizes="100%"
          className="object-cover w-auto h-auto"
        />
      </div>

      <div className="col-span-2">
        <div className="flex justify-between items-center mb-1">
          <Link href={`/${name?.toLowerCase()}`}>
            <p className="text-slate-800 dark:text-gray-300 font-semibold text-base link-hover-c text-ellipsis line-clamp-1">
              {name}
            </p>
          </Link>
          {showCloseBtn ? (
            <span
              className="cursor-pointer text-slate-800 dark:text-gray-300"
              onClick={() => onRemoveItem(cartItem._id)}
            >
              <AiOutlineClose />
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2 sm:flex-nowrap justify-between items-center">
          <Counter quantity={cartItem.quantity} cartItem={cartItem} />
          <p className="text-slate-800 dark:text-gray-300 text-sm md:text-base">
            $ {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
