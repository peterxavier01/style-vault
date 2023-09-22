import { create } from "zustand";

interface CartSliderStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCartSlider = create<CartSliderStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCartSlider;
