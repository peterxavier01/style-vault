"use client";

import { useEffect, useState } from "react";
import { Cart } from "@chec/commerce.js/types/cart";

import CartSlider from "@/components/CartSlider";
import LikedSlider from "@/components/LikedSlider";

import useCartData from "@/hooks/useCartData";

interface SliderProviderProps {
  cart: Cart;
}

const SliderProvider = ({ cart }: SliderProviderProps) => {
  const { cart: cartData, setCart } = useCartData();

  useEffect(() => {
    cart && setCart(cart);
  }, [cart, setCart]);

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
