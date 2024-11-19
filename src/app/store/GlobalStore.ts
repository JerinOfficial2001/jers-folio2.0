import { create } from "zustand";

interface Store{
    isScrolled: boolean;
    setIsScrolled:(data:boolean)=>void
}
export const useGlobalStore = create<Store>((set,get) =>( {
    isScrolled: false,
    setIsScrolled:(data)=>set({isScrolled:data})
}))