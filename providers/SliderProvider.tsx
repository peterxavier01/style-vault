"use client";

import { useEffect, useState } from "react";

import CartSlider from "@/components/CartSlider";
import LikedSlider from "@/components/LikedSlider";

const SliderProvider = () => {
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
