import { useEffect } from "react";

import useCartSlider from "@/hooks/useCartSlider";

import Slider from "./Slider";

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

  return (
    <Slider title="Your Cart" isOpen={isOpen} onClick={handleClose}>
      <h1>CartSlider</h1>
    </Slider>
  );
};

export default CartSlider;
