import Link from "next/link";

import { useEffect } from "react";

import { BsBagX } from "react-icons/bs";

import useCartSlider from "@/hooks/useCartSlider";

import Slider from "./Slider";
import Button from "./Button";

const EmptyCart = () => (
  <div className="flex flex-col items-center mt-8">
    <span className="text-slate-800 mb-4">
      <BsBagX size={120} />
    </span>
    <p className="font-medium text-base md:text-lg text-slate-800 mb-4">
      Your shopping cart is empty
    </p>
    <Link href="/shop" className="w-full">
      <Button className="w-full">Continue Shopping</Button>
    </Link>
  </div>
);

const FilledCart = () => {
  return (
    <div className="mt-8">
      <p>Your shopping cart has items</p>
    </div>
  );
};

const CartSlider = () => {
  const { isOpen, onClose } = useCartSlider();

  useEffect(() => {
    onClose();
  }, [onClose]);

  const handleClose = () => {
    if (isOpen) {
      onClose();
    }
  };

  const isEmpty = true;

  return (
    <Slider title="Your Cart" isOpen={isOpen} onClick={handleClose}>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Slider>
  );
};

export default CartSlider;
