import { useEffect } from "react";
import { create } from "zustand";

import { PRODUCT_QUERYResult as Product } from "@/sanity/sanity.types";

// Extend Product type to include a quantity field
export type CartProduct = Product & {
  quantity: number;
};

interface CartDataStore {
  cartItems: CartProduct[];
  setCartItems: (items: CartProduct[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementCart: (productId: string) => void;
  decrementCart: (productId: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartDataStore>((set) => ({
  cartItems: [],
  setCartItems: (items) => set({ cartItems: items }),

  // Action to add item to cart or increase quantity if it already exists
  addToCart: (product: Product) =>
    set((state) => {
      if (!product?._id) {
        console.error("Product must have a valid _id to be added to the cart.");
        return state; // Return the current state if product._id is undefined
      }

      const existingProduct = state.cartItems.find(
        (item) => item._id === product?._id
      );

      let updatedCart;
      if (existingProduct) {
        updatedCart = state.cartItems.map((item) =>
          item._id === product?._id
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity if product is already in cart
            : item
        );
      } else {
        updatedCart = [...state.cartItems, { ...product, quantity: 1 }];
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart in localStorage
      }

      return { cartItems: updatedCart };
    }),

  // Action to remove item from cart
  removeFromCart: (productId: string) =>
    set((state) => {
      const updatedCart = state.cartItems.filter(
        (item) => item._id !== productId
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist cart in localStorage
      }
      return { cartItems: updatedCart };
    }),

  // Increment the quantity of a cart item
  incrementCart: (productId: string) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return { cartItems: updatedCart };
    }),

  // Decrement the quantity of a cart item
  decrementCart: (productId: string) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item._id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return { cartItems: updatedCart };
    }),

  // Clear the cart
  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    set({ cartItems: [] });
  },
}));

// Load cart data from localStorage when the app initializes
export const useCartInitialization = () => {
  const setCartItems = useCartStore((state) => state.setCartItems);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const cartItems = JSON.parse(storedCart);
        if (Array.isArray(cartItems)) {
          setCartItems(cartItems); // Replace all current cart items
        }
      }
    }
  }, [setCartItems]);
};

/**
 * Returns the price subtotal of all items in the cart
 * @returns string
 */
export const getCartSubtotal = () => {
  let subTotal = 0;

  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const cartItems: CartProduct[] = JSON.parse(storedCart);
    subTotal = cartItems.reduce(
      (subtotal, item) => subtotal + item.price! * item.quantity,
      0
    );
  }

  return subTotal.toFixed(2);
};

export default useCartStore;
