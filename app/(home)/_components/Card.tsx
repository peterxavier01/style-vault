import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

import { Category } from "@/types";

interface CardProps {
  category: Category;
}

const Card: React.FC<CardProps> = ({ category }) => {
  const { name, slug, assets } = category;
  const [{ url }] = assets!;

  if (!category) return;

  return (
    <div className="h-80 bg-gray-300 rounded-2xl flex group justify-center items-center relative overflow-hidden">
      <div className="w-full h-full bg-black/10 absolute inset-0 z-10" />

      <div>
        <Image
          src={url}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover h-48 w-auto group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex flex-col justify-center gap-3">
        <h4 className="text-white uppercase text-2xl md:text-4xl font-semibold">
          {name}
        </h4>
        <Link href={`/${slug}`}>
          <Button className="bg-white text-main-black rounded-full max-w-[200px] w-full border-none capitalize hover:text-white transition">
            See details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
