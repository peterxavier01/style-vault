import Link from "next/link";

import React, { useEffect, useState } from "react";
import { BsBagX } from "react-icons/bs";

import useCartSlider from "@/hooks/useCartSlider";
import useCartStore, {
  CartProduct,
  getCartSubtotal,
} from "@/hooks/useCartStore";

import Slider from "./Slider";
import Button from "./Button";
import CartItem from "./CartItem";

const EmptyCart = () => {
  const cartSlider = useCartSlider();

  return (
    <div className="flex flex-col items-center mt-8">
      <span className="text-slate-800 dark:text-gray-300 mb-4">
        <BsBagX size={120} />
      </span>
      <p className="font-medium text-base md:text-lg text-slate-800 dark:text-gray-300 mb-4">
        Your shopping cart is empty
      </p>
      <Link href="/shop" className="w-full" onClick={cartSlider.onClose}>
        <Button className="w-full">Continue Shopping</Button>
      </Link>
    </div>
  );
};

type FilledCartProps = {
  cartData: CartProduct[] | null;
};

const FilledCart: React.FC<FilledCartProps> = React.memo(
  ({ cartData: cart }) => {
    const cartSlider = useCartSlider();
    const [isDeleting, setIsDeleting] = useState(false);
    const { cartItems, removeFromCart, clearCart } = useCartStore();

    const [optimisticCart, setOptimisticCart] = useState<
      CartProduct[] | undefined
    >(cartItems);

    useEffect(() => {
      setOptimisticCart(cartItems); // set value of optimisticCart to the cart items when component mounts to prevent undefined
    }, [cart, cartItems]);

    const handleRemoveItem = async (id: string) => {
      try {
        setIsDeleting(true); // set state for pending ui
        removeFromCart(id);
        setIsDeleting(false); // remove state for pending ui

        const newCartArr = optimisticCart?.filter(
          (product) => product._id !== id
        );
        setOptimisticCart(newCartArr);
      } catch (error) {
        console.error(error);
        setOptimisticCart(cartItems); // Revert to the original cart if the removal fails
      }
    };

    return (
      <div className="mt-8 grid gap-8">
        {optimisticCart?.map((product) => (
          <CartItem
            key={product._id}
            cartItem={product}
            onRemoveItem={handleRemoveItem}
            showCloseBtn={true}
            isDeleting={isDeleting}
          />
        ))}

        {cart && cartItems.length > 0 ? (
          <Button onClick={clearCart} className="w-full">
            Clear Shopping Cart
          </Button>
        ) : null}

        <div className="border-t border-slate-300 pt-4 sticky bottom-0 bg-white dark:bg-dark-secondary pb-8">
          <p className="flex items-center justify-between text-xl">
            <span className="font-bold text-slate-800 dark:text-gray-300">
              Subtotal
            </span>
            <span className="font-bold text-slate-800 dark:text-gray-300">
              $ {getCartSubtotal()}
            </span>
          </p>
          <p className="flex items-center gap-2 mt-4">
            <span className="block w-2 h-2 bg-primary rounded-full" />
            <span className="text-slate-800 dark:text-gray-100">
              Shipping rates and taxes are calculated at checkout
            </span>
          </p>
          <Link href="/checkout">
            <Button className="w-full mt-4" onClick={cartSlider.onClose}>
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    );
  }
);

FilledCart.displayName = "FilledCart";

interface CartSliderProps {
  cartData: CartProduct[] | null;
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
      className="scrollbar-width-0"
    >
      {cartData?.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart cartData={cartData} />
      )}
    </Slider>
  );
};

export default CartSlider;
