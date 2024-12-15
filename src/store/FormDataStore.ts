import { create } from "zustand";

interface Store {
  workFormData: any;
  setWorkFormData: (key: string, value: any) => void;
  skillFormData: any;
  setSkillFormData: (value: any) => void;
  resetWorkForm: () => void;
}
export const useFormDatatore = create<Store>((set, get) => ({
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
