import { SetStateAction } from "react";

import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import CheckoutButton from "./CheckoutButton";

import useCartStore, { getCartSubtotal } from "@/hooks/useCartStore";
import useCheckoutData from "@/hooks/useCheckoutData";

interface OrderSummaryProps {
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const OrderSummary = ({ activeStep, setActiveStep }: OrderSummaryProps) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const checkoutData = useCheckoutData((state) => state.checkoutData);

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <section className="col-span-1 h-full max-w-xl mx-auto">
          <div className="bg-white dark:bg-dark-secondary rounded-md px-4 py-8 flex flex-col gap-6 h-full">
            {cartItems.map((product) => (
              <CartItem
                key={product._id}
                cartItem={product}
                showCloseBtn={false}
                onRemoveItem={() => {}}
              />
            ))}

            <div className="mt-auto">
              <div className="border-y border-slate-300 py-2">
                <p className="flex items-center justify-between text-slate-800 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>$ {getCartSubtotal()}</span>
                </p>
                <p className="flex items-center justify-between mt-4 text-slate-800 dark:text-gray-300">
                  <span>Shipping</span>
                  <span>{"-"}</span>
                </p>
              </div>

              <p className="flex items-center justify-between mt-4 text-slate-800 dark:text-gray-300">
                <span>Total (USD)</span>
                <span>$ {getCartSubtotal()}</span>
              </p>
            </div>

            <div className="flex items-center flex-wrap sm:flex-nowrap w-full justify-between gap-4">
              <Button
                onMouseDown={() => setActiveStep(activeStep - 1)}
                className="w-full sm:max-w-[200px]"
              >
                Prev
              </Button>

              <CheckoutButton
                checkoutData={checkoutData}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OrderSummary;
