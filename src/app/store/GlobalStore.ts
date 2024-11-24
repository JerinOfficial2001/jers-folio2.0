import { create } from "zustand";

interface Store {
  isScrolled: boolean;
  setIsScrolled: (data: boolean) => void;
  openPopUp: boolean;
  handleOpenPopUp: () => void;
  handleClosePopUp: () => void;
}
export const useGlobalStore = create<Store>((set, get) => ({
  isScrolled: false,
  setIsScrolled: (data) => set({ isScrolled: data }),
  openPopUp: false,
  handleOpenPopUp: () => set({ openPopUp: true }),
  handleClosePopUp: () => set({ openPopUp: false }),
}));
