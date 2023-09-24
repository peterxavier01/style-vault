import Image from "next/image";
import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai";

interface CardProps {
  src: string;
  category: string;
  href: string;
}
const Card: React.FC<CardProps> = ({ src, category, href }) => {
  return (
    <div>
      <div className="bg-gray-300 rounded-md flex justify-center items-center">
        <Link href={`/${href}`}>
          <Image
            src={src}
            alt={category}
            width={220}
            height={220}
            className="object-contain"
          />
        </Link>
      </div>
      <Link
        href={`/${href}`}
        className="flex items-center gap-3 text-slate-800 mt-4 w-fit"
      >
        <p className="font-semibold text-base border-b-transparent border-b-2 hover:border-b-slate-800 transition">
          {category}
        </p>
        <AiOutlineArrowRight size={18} />
      </Link>
    </div>
  );
};

export default Card;
