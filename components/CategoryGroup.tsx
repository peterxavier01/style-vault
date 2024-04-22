"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    src: "/category.png",
    category: "Shoes",
    href: "/men/shoes",
  },
  {
    id: 2,
    src: "/category.png",
    category: "Shirts",
    href: "/men/shirts",
  },
  {
    id: 3,
    src: "/category.png",
    category: "Accessories",
    href: "/men/accessories",
  },
];

interface CategoryCardProps {
  src: string;
  alt: string;
  category: string;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  src,
  alt,
  category,
  href,
}) => {
  return (
    <figure className="flex flex-col items-start">
      <Link
        href={href}
        className="bg-gray-300 hover:bg-gray-400 transition duration-300 w-full h-full"
      >
        <Image
          className="h-full w-full object-cover block min-h-[300px]"
          width={200}
          height={200}
          src={src}
          alt={alt}
          priority={true}
        />
      </Link>
      <Link href={href} className="link-hover-c">
        <figcaption className="text-lg font-medium text-slate-800 mt-3">
          {category}
        </figcaption>
      </Link>
    </figure>
  );
};

const CategoryGroup = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 my-12 md:my-24">
      <h2 className="text-2xl text-slate-800 font-bold mb-8">
        Shop the Essentials
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            src={category.src}
            alt={category.category}
            category={category.category}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryGroup;
