import Image from "next/image";
import Link from "next/link";

import { Category } from "@chec/commerce.js/types/category";

import { AiOutlineArrowRight } from "react-icons/ai";

interface CardProps {
  category: Category;
}
const Card: React.FC<CardProps> = ({ category }) => {
  return (
    <div className="hover:-translate-y-4 transition duration-300">
      <div className="bg-gray-300 rounded-md flex justify-center items-center h-52">
        <Link href={`/${category.id}`}>
          {/* <Image
            src={src}
            alt={category}
            width={150}
            height={150}
            className="object-contain aspect-auto"
          /> */}
        </Link>
      </div>
      <Link
        href={`/${category.id}`}
        className="flex items-center gap-3 text-slate-800 mt-4 w-fit"
      >
        <p className="font-semibold text-base link-hover-c">{category.name}</p>
        <AiOutlineArrowRight size={18} />
      </Link>
    </div>
  );
};

export default Card;
