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
  workFormData: {
    images: any[];
    icon: any;
    title: string;
    about: string;
    description: string;
    primaryImage: number | string;
    projectType: "website" | "application";
    link: string;
    isVisible: boolean;
    imageIds: any[];
  };
  setWorkFormData: (key: string, value: any) => void;
  skillFormData: any;
  setSkillFormData: (value: any) => void;
  expirenceFormData: {
    company_name: string;
    place: string;
    year: string;
  };
  setExpirenceFormData: (key: string, value: any) => void;
  educationFormData: {
    place: string;
    institution: string;
    course: string;
    year: string;
  };
  setEducationFormData: (key: string, value: any) => void;
  resetForm: (form: string) => void;
}
const initialStates: any = {
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
  workFormData: {
    images: [],
    icon: null,
    title: "",
    about: "",
    description: "",
    primaryImage: 0,
    projectType: "website",
    link: "",
    isVisible: true,
    imageIds: [],
  },
  skillFormData: [],
  expirenceFormData: {
    company_name: "",
    place: "",
    year: "",
  },
  educationFormData: {
    place: "",
    institution: "",
    course: "",
    year: "",
  },
};
export const useFormDatatore = create<Store>((set, get) => ({
  ...initialStates,
  setProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, [data.key]: data.value },
    })),
  setWorkFormData: (key, value) =>
    set((state) => ({
      workFormData: { ...state.workFormData, [key]: value },
    })),
  setSkillFormData: (value) =>
    set((state) => ({
      skillFormData: [...state.skillFormData, value],
    })),
  setExpirenceFormData: (key, value) =>
    set((state) => ({
      expirenceFormData: { ...state.expirenceFormData, [key]: value },
    })),
  setEducationFormData: (key, value) =>
    set((state) => ({
      educationFormData: { ...state.educationFormData, [key]: value },
    })),
  resetForm: (form) => set({ [form]: initialStates[form] }),
}));
