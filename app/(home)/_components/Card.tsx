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
    <div className="hover:-translate-y-4 transition duration-300">
      <div className="bg-gray-300 rounded-md flex justify-center items-center h-52">
        <Link href={`/${href}`}>
          <Image
            src={src}
            alt={category}
            width={150}
            height={150}
            className="object-contain h-auto"
          />
        </Link>
      </div>
      <Link
        href={`/${href}`}
        className="flex items-center gap-3 text-slate-800 mt-4 w-fit"
      >
        <p className="font-semibold text-base link-hover-c">{category}</p>
        <AiOutlineArrowRight size={18} />
      </Link>
    </div>
  );
};

export default Card;
