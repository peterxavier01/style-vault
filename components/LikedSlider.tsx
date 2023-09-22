import { useEffect } from "react";

import useLikedSlider from "@/hooks/useLikedSlide";

import Slider from "./Slider";

const LikedSlider = () => {
  const { isOpen, onClose } = useLikedSlider();

  useEffect(() => {
    onClose();
  }, [onClose]);

  const handleClose = () => {
    if (isOpen) {
      onClose();
    }
  };
  
  return (
    <Slider title="Liked Products" isOpen={isOpen} onClick={handleClose}>
      <h1>LikedSlider</h1>
    </Slider>
  );
};

export default LikedSlider;
