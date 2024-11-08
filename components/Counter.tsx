"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCartStore, { CartProduct } from "@/hooks/useCartStore";

interface CounterProps {
  quantity: number;
  cartItem: CartProduct;
}

const Counter: React.FC<CounterProps> = ({ quantity, cartItem }) => {
  const incrementCart = useCartStore((state) => state.incrementCart);
  const decrementCart = useCartStore((state) => state.decrementCart);

  return (
    <div className="flex border border-slate-400 gap-4 h-9">
      <span
        className="text-slate-700 dark:text-slate-300 px-3 flex items-center h-full cursor-pointer bg-gray-400/10"
        onClick={() => decrementCart(cartItem._id)}
      >
        <AiOutlineMinus />
      </span>
      <span className="font-semibold px-2 text-slate-800 dark:text-gray-300 flex items-center">
        {quantity}
      </span>
      <span
        className="bg-primary h-full px-3 cursor-pointer flex items-center"
        onClick={() => incrementCart(cartItem._id)}
      >
        <AiOutlinePlus className="text-white" />
      </span>
    </div>
  );
};

Counter.displayName = "Counter";

export default Counter;
