import { create } from "zustand";

interface Store {
  isScrolled: boolean;
  setIsScrolled: (data: boolean) => void;
  openPopUp: boolean;
  handleOpenPopUp: (type?: string) => void;
  handleClosePopUp: () => void;
  popUpVariant: string;
  profileData: {
    image: string;
    gender: "male" | "female";
  };
  setProfileData: (data: any) => void;
}
export const useGlobalStore = create<Store>((set, get) => ({
  isScrolled: false,
  setIsScrolled: (data) => set({ isScrolled: data }),
  openPopUp: false,
  popUpVariant: "",
  handleOpenPopUp: (type) => set({ openPopUp: true, popUpVariant: type }),
  handleClosePopUp: () => set({ openPopUp: false }),
  profileData: { image: "", gender: "male" },
  setProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, [data.key]: data.value },
    })),
}));
