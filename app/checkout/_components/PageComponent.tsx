"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token";

import commerce from "@/utils/commerce";
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
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Checkout Form" },
    { label: "Order Summary" },
    { label: "Order Confirmation" },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return checkoutToken ? (
          <CheckoutForm
            checkoutToken={checkoutToken}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        ) : null;
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

    cart ? getToken(cart?.id) : null;
  }, [cart]);

  return (
    <div className="pt-12 pb-14">
      <section>
        <Link
          href="/shop"
          className="flex items-center text-primary mb-2 w-fit"
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
