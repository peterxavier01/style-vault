import { create } from "zustand";

interface LikedSliderStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLikedSlider = create<LikedSliderStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLikedSlider;
