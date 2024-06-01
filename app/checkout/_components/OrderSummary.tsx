import { SetStateAction, useEffect } from "react";

import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";

import commerce from "@/utils/commerce";
import useCheckoutData from "@/hooks/useCheckoutData";

import CartItem from "@/components/CartItem";
import Button from "@/components/Button";
import CheckoutButton from "./CheckoutButton";

interface OrderSummaryProps {
  checkoutToken: CheckoutToken | null;
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

const OrderSummary = ({
  checkoutToken,
  activeStep,
  setActiveStep,
}: OrderSummaryProps) => {
  const checkoutLiveObject = useCheckoutData(
    (state) => state.checkoutLiveObject
  );
  const checkoutData = useCheckoutData((state) => state.checkoutData);

  useEffect(() => {
    const setCheckoutLiveObject =
      useCheckoutData.getState().setCheckoutLiveObject;

    const getLiveObject = async (tokenId: string) => {
      const object = await commerce.checkout.getLive(tokenId);
      setCheckoutLiveObject(object);
    };

    if (checkoutToken) {
      getLiveObject(checkoutToken?.id);
    }
  }, [checkoutToken]);

  return (
    <>
      {checkoutLiveObject && checkoutLiveObject?.line_items.length > 0 ? (
        <section className="col-span-1 h-full max-w-xl mx-auto">
          <div className="bg-white dark:bg-dark-secondary rounded-md px-4 py-8 flex flex-col gap-6 h-full">
            {checkoutLiveObject?.line_items.map((product) => (
              <CartItem
                key={product.id}
                cartItem={product}
                showCloseBtn={false}
                onRemoveItem={() => {}}
              />
            ))}

            <div className="mt-auto">
              <div className="border-y border-slate-300 py-2">
                <p className="flex items-center justify-between text-slate-800 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>
                    {checkoutLiveObject?.subtotal.formatted_with_symbol}
                  </span>
                </p>
                <p className="flex items-center justify-between mt-4 text-slate-800 dark:text-gray-300">
                  <span>Shipping</span>
                  <span>
                    {checkoutLiveObject?.shipping?.price
                      ?.formatted_with_symbol || "-"}
                  </span>
                </p>
              </div>

              <p className="flex items-center justify-between mt-4 text-slate-800 dark:text-gray-300">
                <span>
                  Total ({checkoutLiveObject.currency.code.toUpperCase()})
                </span>
                <span>{checkoutLiveObject.subtotal.formatted_with_symbol}</span>
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
