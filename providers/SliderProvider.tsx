"use client";

import { useEffect, useState } from "react";

import CartSlider from "@/components/CartSlider";
import LikedSlider from "@/components/LikedSlider";
import getCart from "@/libs/getCart";
import useCartData from "@/hooks/useCartData";

const SliderProvider = () => {
  const { cart: cartData, setCart } = useCartData();
  getCart()
    .then((data) => setCart(data))
    .catch((err) => console.error(err));

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CartSlider cartData={cartData} />
      <LikedSlider />
    </>
  );
};

export default SliderProvider;
