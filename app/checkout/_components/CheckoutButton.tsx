import { usePaystackPayment } from "react-paystack";
import { PaystackProps, callback } from "react-paystack/dist/types";

import Button from "@/components/Button";
import { IFormData } from "./CheckoutForm";

import { convertToSubunit } from "@/utils";
import { getCartSubtotal } from "@/hooks/useCartStore";

interface CheckoutButtonProps {
  checkoutData: IFormData | undefined;
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const CheckoutButton = ({
  checkoutData,
  activeStep,
  setActiveStep,
}: CheckoutButtonProps) => {
  const total = parseInt(getCartSubtotal());

  const config: PaystackProps | undefined = {
    reference: new Date().getTime().toString(),
    email: checkoutData?.email ?? "",
    amount: convertToSubunit(total ?? 0, "USD"),
    firstname: checkoutData?.firstName,
    lastname: checkoutData?.lastName,
    phone: checkoutData?.mobileNumber,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_API_KEY as string,
  };

  const onSuccess: callback | undefined = (reference: any) => {
    console.log(reference);
    setActiveStep(activeStep + 1);
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Button
      className="w-full max-w-xs focus-visible:outline focus-visible:outline-primary"
      type="submit"
      onClick={() => initializePayment({ onSuccess })}
    >
      Confirm Order
    </Button>
  );
};

export default CheckoutButton;
