"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "lodash.debounce";
import { Product } from "@chec/commerce.js/types/product";

import ProductSearchCard from "./ProductSearchCard";

import getProducts from "@/libs/getProducts";
import { shuffleArray } from "@/utils";

const Search = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [shuffledProducts, setShuffledProducts] = useState<Product[] | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);

  // Show a shuffled list of products when there is no search query
  useEffect(() => {
    if (products) {
      let newArray = [...products];
      newArray = newArray.slice(0, 3); // limit shuffled products list to 3
      newArray = shuffleArray(newArray);
      setShuffledProducts(newArray);
    }
  }, [products]);

  // Show search modal when CTRL + K keys are pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault(); // prevent the browser's default behaviour, in this case, bringing the browser search bar into focus
        modalRef.current?.showModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    debouncedProductFilter();
  };

  const debouncedProductFilter = debounce(() => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    const filteredProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchQuery)
    );

    setFilteredProducts(filteredProducts);
  }, 500);

  return (
    <>
      <div className="tooltip tooltip-bottom" data-tip="Ctrl + K">
        <button
          className="cursor-pointer text-slate-600 dark:text-gray-300 hover:text-slate-900 hover:dark:text-white active:scale-90"
          onClick={openModal}
        >
          <AiOutlineSearch size={24} />
        </button>
      </div>

      <dialog className="modal" ref={modalRef}>
        <div className="modal-box bg-white dark:bg-dark-secondary">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full input bg-black/5 dark:bg-dark-primary rounded-xl text-slate-800 dark:text-gray-300 mb-6 py-8 placeholder:text-slate-500 dark:placeholder:text-slate-300"
          />

          <ul>
            {(searchQuery.length === 0
              ? shuffledProducts
              : filteredProducts
            )?.map((product) => (
              <ProductSearchCard
                key={product.id}
                product={product}
                modalRef={modalRef}
                setSearchQuery={setSearchQuery}
              />
            ))}
          </ul>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default Search;
