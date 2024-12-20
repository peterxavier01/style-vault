import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/Button";

import { CATEGORY_QUERYResult } from "@/sanity/sanity.types";
import { categoryCardItemVariants } from "@/utils/animations";

interface CardProps {
  category: CATEGORY_QUERYResult[0];
}

const Card: React.FC<CardProps> = ({ category }) => {
  const { name, slug, image } = category;

  const url = image ? image.url : null;

  if (!name || !url) return;

  if (!category) return;

  return (
    <motion.div
      variants={categoryCardItemVariants}
      className="h-80 bg-gray-300 rounded-2xl flex group justify-center items-center relative overflow-hidden"
    >
      <div className="w-full h-full bg-black/10 absolute inset-0 z-10" />

      <div>
        <Image
          src={url}
          alt={name}
          fill
          loading="eager"
          sizes="(min-width: 1520px) 332px, (min-width: 1040px) 21.74vw, (min-width: 640px) 45.79vw, calc(100vw - 32px)"
          className="object-cover h-48 w-auto group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex flex-col justify-center gap-3">
        <h4 className="text-white uppercase text-2xl md:text-4xl font-semibold">
          {name}
        </h4>
        <Link href={`/category/${slug?.current}`}>
          <Button className="bg-white text-main-black rounded-full max-w-[200px] w-full border-none capitalize hover:text-white transition">
            See details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
