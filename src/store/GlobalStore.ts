import { create } from "zustand";

interface Store {
  isScrolled: boolean;
  setIsScrolled: (data: boolean) => void;
  openPopUp: boolean;
  handleOpenPopUp: (type?: string) => void;
  handleClosePopUp: () => void;
  popUpVariant: string;
  profileData: {
    image: any;
    gender: "male" | "female";
    links: [];
    resumes: [];
  };
  setProfileData: (data: any) => void;
  isLoading: boolean;
  setIsLoading: (state: any) => void;
}
export const useGlobalStore = create<Store>((set, get) => ({
  isScrolled: false,
  setIsScrolled: (data) => set({ isScrolled: data }),
  openPopUp: false,
  popUpVariant: "",
  handleOpenPopUp: (type) => set({ openPopUp: true, popUpVariant: type }),
  handleClosePopUp: () => set({ openPopUp: false, popUpVariant: "" }),
  profileData: { image: "", gender: "male", links: [], resumes: [] },
  setProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, [data.key]: data.value },
    })),
  isLoading: true,
  setIsLoading: (state) => set({ isLoading: state }),
}));
