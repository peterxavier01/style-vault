"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Button from "./Button";
import clientOnly from "./ClientOnly";

import {
  heroBtnVariants,
  heroSubtitleVariants,
  heroTitleVariants,
} from "@/utils/animations";

const Hero = () => {
  return (
    <div
      className="hero rounded-2xl overflow-hidden min-h-[80vh] md:min-h-screen bg-base-200 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-[.65]" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl md:max-w-2xl flex flex-col items-center">
          <motion.h1
            variants={heroTitleVariants}
            initial="initial"
            animate="visible"
            className="text-4xl text-white sm:text-[40px] leading-[50px] md:text-5xl font-bold"
          >
            Elevate Your Wardrobe with Our Premium Shirts
          </motion.h1>
          <motion.p
            variants={heroSubtitleVariants}
            initial="initial"
            animate="visible"
            className="py-6 text-white max-w-sm text-center"
          >
            Discover the Perfect Fit and Style for Every Occasion
          </motion.p>
          <motion.div
            variants={heroBtnVariants}
            initial="initial"
            animate="visible"
          >
            <Link href="/category/shirts">
              <Button className="rounded-full w-full hover:text-white max-w-[200px] bg-white text-main-black">
                Shop Shirts Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default clientOnly(Hero);
