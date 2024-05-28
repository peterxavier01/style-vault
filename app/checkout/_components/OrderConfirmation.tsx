import Button from "@/components/Button";
import Link from "next/link";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const OrderConfirmation = () => {
  const { width, height } = useWindowSize();

  return (
    <section className="max-w-2xl mx-auto flex flex-col items-center gap-4">
      <Confetti
        width={width}
        height={height}
        gravity={0.2}
        numberOfPieces={1000}
        recycle={false}
      />
      <h1 className="text-4xl font-bold text-slate-800 text-center">
        Success! Your Order is Confirmed and On Its Way
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
