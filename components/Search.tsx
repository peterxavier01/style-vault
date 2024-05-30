"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import debounce from "lodash.debounce";
import { Product } from "@chec/commerce.js/types/product";

import ProductSearchCard from "./ProductSearchCard";

import getProducts from "@/libs/getProducts";

const Search = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);

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
    const filteredProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, 500);

  return (
    <>
      <button
        className="cursor-pointer text-slate-600 hover:text-slate-900 active:scale-90"
        onClick={openModal}
      >
        <AiOutlineSearch size={24} />
      </button>

      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full input bg-gray-100 rounded-xl text-slate-800 mb-6 py-8 placeholder:text-slate-600"
          />

          <ul>
            {searchQuery.length > 0
              ? filteredProducts?.map((product) => (
                  <ProductSearchCard
                    key={product.id}
                    product={product}
                    modalRef={modalRef}
                    setSearchQuery={setSearchQuery}
                  />
                ))
              : null}
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
