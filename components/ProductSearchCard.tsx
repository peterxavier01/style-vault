import Image from "next/image";
import Link from "next/link";

import { Product } from "@chec/commerce.js/types/product";

interface ProductSearchCardProps {
  product: Product;
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearchCard = ({
  product,
  modalRef,
  setSearchQuery,
}: ProductSearchCardProps) => {
  const src = product.image ? product.image.url : "";

  const handleClick = () => {
    modalRef.current?.close();
    setSearchQuery("");
  };

  return (
    <Link href={`/product/${product.permalink}`} onClick={handleClick}>
      <div className="flex w-full gap-4 mb-4 hover:bg-black/5 dark:hover:bg-white/5 p-4 rounded-xl">
        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <Image
            src={src}
            alt={product.name.toLowerCase()}
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
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductSearchCard;
