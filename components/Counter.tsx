import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { decrementQuantity, incrementQuantity } from "@/libs/updateCart";

interface CounterProps {
  quantity: number;
  cartItem: LineItem;
}

const Counter: React.FC<CounterProps> = ({ quantity, cartItem }) => {
  return (
    <div className="flex items-center border-2 border-slate-400 text-slate-500 gap-4 px-2 py-1">
      <span
        className="text-red-500 cursor-pointer"
        onClick={() => decrementQuantity(cartItem.id, quantity)}
      >
        <AiOutlineMinus />
      </span>
      <span className="font-semibold text-slate-800">{quantity}</span>
      <span
        className="text-green-500 cursor-pointer"
        onClick={() => incrementQuantity(cartItem.id, quantity)}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default Counter;
