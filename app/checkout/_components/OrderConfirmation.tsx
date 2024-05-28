import { useEffect } from "react";
import Link from "next/link";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import useCheckoutData from "@/hooks/useCheckoutData";
import { refreshCart } from "@/libs/updateCart";

import Button from "@/components/Button";

const OrderConfirmation = () => {
  const { width, height } = useWindowSize();
  const checkoutData = useCheckoutData((state) => state.checkoutData);

  useEffect(() => {
    const onCheckoutSuccess = async () => {
      return await refreshCart();
    };

    onCheckoutSuccess();
  }, []);

  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center gap-4">
      <Confetti
        width={width}
        height={height}
        gravity={0.12}
        numberOfPieces={2000}
        recycle={false}
      />
      <h1 className="text-4xl font-semibold text-slate-800 text-center">
        Thank you{" "}
        <span className="capitalize font-bold">{checkoutData?.firstName}</span>!
        Your Order is Confirmed and On Its Way
      </h1>
      <p className="text-center text-slate-800 md:text-lg">
        Thank you for shopping with us. Your purchase has been successfully
        processed and your items will be with you shortly.
      </p>

      <Link href="/shop">
        <Button className="uppercase mt-4">Continue Shopping</Button>
      </Link>
    </section>
  );
};

export default OrderConfirmation;
