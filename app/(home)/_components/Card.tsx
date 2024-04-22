import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai";

interface CardProps {
  category: Category;
}
const Card: React.FC<CardProps> = ({ category }) => {
  const { name, slug, assets } = category;
  const [{ url }] = assets!;

  if (!category) return;

  return (
    <div className="hover:-translate-y-4 transition duration-300">
      <div className="bg-gray-300 rounded-md flex justify-center items-center h-52">
        <Link href={`/${slug}`}>
          <Image
            src={url}
            alt={name}
            width={150}
            height={150}
            className="object-cover h-48"
          />
        </Link>
      </div>
      <Link
        href={`/${slug}`}
        className="flex items-center gap-3 text-slate-800 mt-4 w-fit"
      >
        <p className="font-semibold text-base link-hover-c">{name}</p>
        <AiOutlineArrowRight size={18} />
      </Link>
    </div>
  );
};

export default Card;
