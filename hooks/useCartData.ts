import { create } from "zustand";

import { Cart } from "@chec/commerce.js/types/cart";

interface CartDataStore {
  cart: Cart | null;
  setCart: (value: Cart | null) => void;
}

const useCartData = create<CartDataStore>((set) => ({
  cart: null,
  setCart: (value) => set({ cart: value }),
}));

export default useCartData;
