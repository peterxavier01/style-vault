import { create } from "zustand";

import { Live } from "@chec/commerce.js/types/live";
import { IFormData } from "@/app/checkout/_components/CheckoutForm";

interface CheckoutDataStore {
  checkoutLiveObject: Live | null;
  setCheckoutLiveObject: (checkoutLiveObject: Live | null) => void;
  checkoutData: IFormData | undefined;
  setCheckoutData: (checkoutData: IFormData | undefined) => void;
  isOrderConfirmed: boolean;
  setIsOrderConfirmed: (isOrderConfirmed: boolean) => void;
}

const useCheckoutData = create<CheckoutDataStore>((set) => ({
  checkoutLiveObject: null,
  setCheckoutLiveObject: (liveObject) =>
    set({ checkoutLiveObject: liveObject }),
  checkoutData: undefined,
  setCheckoutData: (data) => set({ checkoutData: data }),
  isOrderConfirmed: false,
  setIsOrderConfirmed: (orderConfirmed) =>
    set({ isOrderConfirmed: orderConfirmed }),
}));

export default useCheckoutData;
