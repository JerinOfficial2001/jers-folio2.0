import { create } from "zustand";

interface Store {
  isScrolled: boolean;
  setIsScrolled: (data: boolean) => void;
  openPopUp: boolean;
  handleOpenPopUp: (type?: string, id?: any) => void;
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
  userData: any;
  setUserData: (value: any) => void;
  setIsAuthenticated: (state: boolean) => void;
  isAuthenticated: boolean;
  id: any;
  resetGlobalStore: (value: string) => void;
}
const initialStates: any = {
  isScrolled: false,
  openPopUp: false,
  popUpVariant: "",
  id: "",
  profileData: { image: "", gender: "male", links: [], resumes: [] },
  isLoading: true,
  userData: null,
  isAuthenticated: false,
};
export const useGlobalStore = create<Store>((set, get) => ({
  ...initialStates,
  setIsScrolled: (data) => set({ isScrolled: data }),
  handleOpenPopUp: (type, id) =>
    set({ openPopUp: true, popUpVariant: type, id }),
  handleClosePopUp: () => set({ openPopUp: false, popUpVariant: "", id: "" }),
  setProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, [data.key]: data.value },
    })),
  setIsLoading: (state) => set({ isLoading: state }),
  setUserData: (value) => set({ userData: value }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  resetGlobalStore: (form) => set({ [form]: initialStates[form] }),
}));
