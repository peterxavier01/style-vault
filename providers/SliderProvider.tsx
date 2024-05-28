"use client";

import { useEffect, useState } from "react";

import CartSlider from "@/components/CartSlider";

import useCartData from "@/hooks/useCartData";

const SliderProvider = () => {
  const { cart: cartData } = useCartData();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CartSlider cartData={cartData} />
    </>
  );
};

export default SliderProvider;
