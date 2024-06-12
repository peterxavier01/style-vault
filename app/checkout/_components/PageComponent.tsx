"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";

import commerce from "@/utils/commerce";
import { steps } from "@/utils";
import useCartData from "@/hooks/useCartData";

import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./OrderConfirmation";

const Stepper = dynamic(() => import("./CustomStepper"), { ssr: false });

const PageComponent = () => {
  const cart = useCartData((state) => state.cart);
  const [checkoutToken, setCheckoutToken] = useState<CheckoutToken | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  function getSectionComponent() {
    if (isLoading) {
      return (
        <section className="grid md:grid-cols-2 max-w-4xl gap-4 mt-6 mb-8 mx-auto min-h-[500px] h-full w-full">
          {Array(10)
            .fill("")
            .map((index: number) => (
              <div key={index} className="skeleton w-full h-14 rounded-lg" />
            ))}
          <div className="skeleton w-full max-w-xs rounded-lg mt-4 mx-auto col-span-2 h-14" />
        </section>
      );
    }

    switch (activeStep) {
      case 0:
        return (
          <CheckoutForm
            checkoutToken={checkoutToken}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );

      case 1:
        return (
          <OrderSummary
            checkoutToken={checkoutToken}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 2:
        return <OrderConfirmation />;
      default:
        return null;
    }
  }

  useEffect(() => {
    const getToken = async (id: string) => {
      const token = await commerce.checkout.generateToken(id, { type: "cart" });
      if (token) setCheckoutToken(token);
    };

    if (cart) getToken(cart.id);
    setIsLoading(false);
  }, [cart]);

  return (
    <div className="pt-12 pb-14">
      <section>
        <Link
          href="/shop"
          className="flex items-center text-primary dark:text-gray-300 mb-2 w-fit"
        >
          <MdArrowBackIos />
          Back to shop
        </Link>

        <Stepper steps={steps} activeStep={activeStep} />

        <div className="mt-4">{getSectionComponent()}</div>
      </section>
    </div>
  );
};

export default PageComponent;
