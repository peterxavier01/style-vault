import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] md:min-h-screen bg-base-200 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-[.65]" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="text-4xl text-white sm:text-[40px] leading-[50px] md:text-5xl font-bold">
            Elevate Your Wardrobe with Our Premium Shirts
          </h1>
          <p className="py-6">
            Discover the Perfect Fit and Style for Every Occasion
          </p>
          <Link href="/shirts">
            <Button>Shop Shirts Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
