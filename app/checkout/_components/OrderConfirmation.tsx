import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import Button from "@/components/Button";

import useCheckoutData from "@/hooks/useCheckoutData";
import useCartStore from "@/hooks/useCartStore";

const OrderConfirmation = () => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const checkoutData = useCheckoutData((state) => state.checkoutData);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const onCheckoutSuccess = () => {
      clearCart();
      router.refresh();
    };

    onCheckoutSuccess();
  }, [router, clearCart]);

  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center gap-4 scrollbar-width-0">
      <Confetti
        width={width}
        height={height}
        gravity={0.1}
        numberOfPieces={1000}
        recycle={false}
      />
      <h1 className="text-4xl font-semibold text-slate-800 dark:text-gray-100 text-center">
        Success! Your Order is Confirmed and On Its Way
      </h1>
      <p className="text-center text-slate-800 dark:text-gray-300 md:text-lg">
        Thank you{" "}
        <span className="capitalize font-bold">{checkoutData?.firstName}</span>{" "}
        for shopping with us. Your purchase has been successfully processed and
        your items will be with you shortly.
      </p>

      <Link href="/shop">
        <Button className="uppercase mt-4">Continue Shopping</Button>
      </Link>
    </section>
  );
};

export default OrderConfirmation;
