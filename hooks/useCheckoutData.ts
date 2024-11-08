import { create } from "zustand";

import { IFormData } from "@/app/checkout/_components/CheckoutForm";

interface CheckoutDataStore {
  checkoutData: IFormData | undefined;
  setCheckoutData: (checkoutData: IFormData | undefined) => void;
}

const useCheckoutData = create<CheckoutDataStore>((set) => ({
  checkoutData: undefined,
  setCheckoutData: (data) => set({ checkoutData: data }),
}));

export default useCheckoutData;
