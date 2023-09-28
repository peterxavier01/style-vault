import Link from "next/link";

import { useEffect } from "react";

import { BsBagX } from "react-icons/bs";

import useCartSlider from "@/hooks/useCartSlider";
import useCartData from "@/hooks/useCartData";

import Slider from "./Slider";
import Button from "./Button";
import CartItem from "./CartItem";
import { Cart } from "@chec/commerce.js/types/cart";

const EmptyCart = () => {
  const cartSlider = useCartSlider();

  return (
    <div className="flex flex-col items-center mt-8">
      <span className="text-slate-800 mb-4">
        <BsBagX size={120} />
      </span>
      <p className="font-medium text-base md:text-lg text-slate-800 mb-4">
        Your shopping cart is empty
      </p>
      <Link href="/shop" className="w-full" onClick={cartSlider.onClose}>
        <Button className="w-full">Continue Shopping</Button>
      </Link>
    </div>
  );
};

type FilledCartProps = {
  cartData: Cart | null;
};

const FilledCart: React.FC<FilledCartProps> = ({ cartData: cart }) => {
  return (
    <div className="mt-8 grid gap-8">
      {cart?.line_items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

interface CartSliderProps {
  cartData: Cart | null;
}

const CartSlider: React.FC<CartSliderProps> = ({ cartData }) => {
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
    <Slider
      title="Your Cart"
      isOpen={isOpen}
      onClick={handleClose}
      className="cart-slider"
    >
      {!cartData?.line_items ? (
        <EmptyCart />
      ) : (
        <FilledCart cartData={cartData} />
      )}
    </Slider>
  );
};

export default CartSlider;
