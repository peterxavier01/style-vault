"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { LineItem } from "@chec/commerce.js/types/line-item";

import { decrementQuantity, incrementQuantity } from "@/libs/updateCart";

interface CounterProps {
  quantity: number;
  cartItem: LineItem;
}

const Counter: React.FC<CounterProps> = React.memo(({ quantity, cartItem }) => {
  const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);

  useEffect(() => {
    setOptimisticQuantity(quantity);
  }, [quantity]);

  const handleIncrement = async () => {
    setOptimisticQuantity(optimisticQuantity + 1);
    try {
      await incrementQuantity(cartItem.id, optimisticQuantity);
    } catch (error) {
      setOptimisticQuantity(optimisticQuantity);
    }
  };

  const handleDecrement = async () => {
    if (optimisticQuantity > 0) {
      setOptimisticQuantity(optimisticQuantity - 1);
      try {
        await decrementQuantity(cartItem.id, optimisticQuantity);
      } catch (error) {
        setOptimisticQuantity(optimisticQuantity);
      }
    }
  };

  return (
    <div className="flex border border-slate-400 gap-4 h-9">
      <span
        className="text-slate-700 dark:text-slate-300 px-3 flex items-center h-full cursor-pointer bg-gray-400/10"
        onClick={handleDecrement}
      >
        <AiOutlineMinus />
      </span>
      <span className="font-semibold px-2 text-slate-800 dark:text-gray-300 flex items-center">
        {optimisticQuantity}
      </span>
      <span
        className="bg-primary h-full px-3 cursor-pointer flex items-center"
        onClick={handleIncrement}
      >
        <AiOutlinePlus className="text-white" />
      </span>
    </div>
  );
});

Counter.displayName = "Counter";

export default Counter;
