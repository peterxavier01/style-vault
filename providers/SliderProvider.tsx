"use client";

import { useEffect, useState } from "react";
import { Cart } from "@chec/commerce.js/types/cart";

import CartSlider from "@/components/CartSlider";
import LikedSlider from "@/components/LikedSlider";
import useCartData from "@/hooks/useCartData";

// type SliderProviderProps = {
//   cart: Cart;
// };

const SliderProvider = () => {
  // const { setCart } = useCartData();
  // setCart(cart);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CartSlider />
      <LikedSlider />
    </>
  );
};

export default SliderProvider;
