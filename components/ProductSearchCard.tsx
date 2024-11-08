import Image from "next/image";
import Link from "next/link";

import { PRODUCTS_QUERYResult as Product } from "@/sanity/sanity.types";

interface ProductSearchCardProps {
  product: Product[0];
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearchCard = ({
  product,
  modalRef,
  setSearchQuery,
}: ProductSearchCardProps) => {
  const src = product.image ? product.image.url : null;

  const handleClick = () => {
    modalRef.current?.close();
    setSearchQuery("");
  };

  return (
    <Link href={`/product/${product.permalink}`} onClick={handleClick}>
      <div className="flex w-full gap-4 mb-4 hover:bg-black/5 dark:hover:bg-white/5 p-4 rounded-xl">
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <Image
            src={src as string}
            alt={product.name?.toLowerCase() as string}
            className="rounded-xl object-cover bg-gray-300 block"
            fill
            sizes="96px"
          />
        </div>

        <div className="flex flex-col items-start h-max">
          <h2 className="text-slate-800 dark:text-white text-base md:text-lg font-semibold text-ellipsis line-clamp-1">
            {product.name}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductSearchCard;
