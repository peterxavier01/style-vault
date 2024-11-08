"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./OrderConfirmation";

import { steps } from "@/utils";

const Stepper = dynamic(() => import("./CustomStepper"), { ssr: false });

const PageComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <CheckoutForm activeStep={activeStep} setActiveStep={setActiveStep} />
        );

      case 1:
        return (
          <OrderSummary activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 2:
        return <OrderConfirmation />;
      default:
        return null;
    }
  }

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
