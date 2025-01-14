import { create } from "zustand";

interface Store {
  profileData: {
    image: any;
    gender: "male" | "female";
    links: [];
    resumes: [];
    name: string;
    username: string;
    role: string;
    email: string;
    about: string;
    resumeIds: [];
  };
  setProfileData: (data: any) => void;
  workFormData: any;
  setWorkFormData: (key: string, value: any) => void;
  skillFormData: any;
  setSkillFormData: (value: any) => void;
  resetWorkForm: () => void;
}
export const useFormDatatore = create<Store>((set, get) => ({
  profileData: {
    image: "",
    gender: "male",
    links: [],
    resumes: [],
    name: "",
    username: "",
    role: "",
    email: "",
    about: "",
    resumeIds: [],
  },
  setProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, [data.key]: data.value },
    })),
  workFormData: { images: [], primaryImage: 0 },
  setWorkFormData: (key, value) =>
    set((state) => ({
      workFormData: { ...state.workFormData, [key]: value },
    })),
  resetWorkForm: () =>
    set({
      workFormData: { images: [], primaryImage: 0 },
    }),
  skillFormData: [],
  setSkillFormData: (value) =>
    set((state) => ({
      skillFormData: [...state.skillFormData, value],
    })),
  resetskillForm: () =>
    set({
      skillFormData: [],
    }),
}));
