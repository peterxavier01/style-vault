"use client";

import { useEffect, useState } from "react";

import CartSlider from "@/components/CartSlider";

import useCartStore from "@/hooks/useCartStore";

const SliderProvider = () => {
  const { cartItems: cartData } = useCartStore();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <CartSlider cartData={cartData} />;
};

export default SliderProvider;
