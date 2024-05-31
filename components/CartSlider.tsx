import Link from "next/link";

import { useEffect, useState } from "react";
import { BsBagX } from "react-icons/bs";
import { Cart } from "@chec/commerce.js/types/cart";

import useCartSlider from "@/hooks/useCartSlider";

import Slider from "./Slider";
import Button from "./Button";
import CartItem from "./CartItem";
import { emptyCart as clearCart, removeItem } from "@/libs/updateCart";
import { LineItem } from "@chec/commerce.js/types/line-item";

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
  cartData: Cart | null;
};

const FilledCart: React.FC<FilledCartProps> = ({ cartData: cart }) => {
  // const [optimisticCart, setOptimisticCart] = useState<LineItem[] | undefined>(
  //   undefined
  // );

  // useEffect(() => {
  //   setOptimisticCart(cart?.line_items);
  // }, [cart?.line_items]);

  // console.log(optimisticCart);

  // const handleRemoveItem = async (id: string) => {
  //   const newCartArr = optimisticCart?.filter((product) => {
  //     return product.id !== id;
  //   });

  //   if (newCartArr) {
  //     setOptimisticCart(newCartArr);
  //     try {
  //       await removeItem(id);
  //     } catch (error) {
  //       setOptimisticCart(cart?.line_items);
  //     }
  //   }
  // };

  const cartSlider = useCartSlider();

  const [optimisticCart, setOptimisticCart] = useState<LineItem[] | undefined>(
    cart?.line_items
  );
  const [optimisticUpdateInProgress, setOptimisticUpdateInProgress] =
    useState(false);

  useEffect(() => {
    // Only update optimisticCart from cart?.line_items if there's no optimistic update in progress
    if (!optimisticUpdateInProgress) {
      setOptimisticCart(cart?.line_items);
    }
  }, [cart?.line_items, optimisticUpdateInProgress]);

  const handleRemoveItem = async (id: string) => {
    const newCartArr = optimisticCart?.filter((product) => {
      return product.id !== id;
    });

    if (newCartArr) {
      setOptimisticUpdateInProgress(true);
      setOptimisticCart(newCartArr);
      try {
        await removeItem(id);
      } catch (error) {
        setOptimisticCart(cart?.line_items);
      } finally {
        setOptimisticUpdateInProgress(false);
      }
    }
  };

  return (
    <div className="mt-8 grid gap-8">
      {optimisticCart?.map((product) => (
        <CartItem
          key={product.id}
          cartItem={product}
          onRemoveItem={handleRemoveItem}
          showCloseBtn={true}
        />
      ))}

      {cart && cart?.line_items.length > 0 ? (
        <Button onClick={clearCart} className="w-full">
          Clear Shopping Cart
        </Button>
      ) : null}

      <div className="border-t border-slate-300 pt-4 sticky bottom-0 bg-white dark:bg-dark-secondary pb-8">
        <p className="flex items-center justify-between text-xl">
          <span className="font-bold text-slate-800 dark:text-gray-300">Subtotal</span>
          <span className="font-bold text-slate-800 dark:text-gray-300">
            {cart?.subtotal.formatted_with_symbol}
          </span>
        </p>
        <p className="flex items-center gap-2 mt-4">
          <span className="block w-2 h-2 bg-primary rounded-full" />
          <span>Shipping rates and taxes are calculated at checkout</span>
        </p>
        <Link href="/checkout">
          <Button className="w-full mt-4" onClick={cartSlider.onClose}>
            Proceed to Checkout
          </Button>
        </Link>
      </div>
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
      {cartData?.line_items.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart cartData={cartData} />
      )}
    </Slider>
  );
};

export default CartSlider;
